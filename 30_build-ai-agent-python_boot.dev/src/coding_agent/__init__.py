from os import environ
from dotenv import load_dotenv
from google import genai
from google.genai import errors
from sys import argv, exit
from google.genai import types
import time

from .config import MAX_ITERS
from .call_function import call_function
from .get_files_info import schema_get_files_info
from .read_file import schema_read_file
from .write_file import schema_write_file
from .run_python_file import schema_run_python_file

system_prompt = """
You are a helpful AI coding agent.

When a user asks a question or makes a request, make a function call plan. You can perform the following operations:

- List files and directories
- Read file contents
- Execute Python files with optional arguments
- Write or overwrite files

When the user asks about the code project - they are referring to the working directory. So, you should typically start by looking at the project's files, and figuring out how to run the project.

All paths you provide should be relative to the working directory.
You do not need to specify the working directory in your function calls as it is automatically injected for security reasons.
"""


def log_messages_history(messages, iteration):
    """Log all messages in the conversation history with verbose details."""
    print(f"\n--- Messages History (Iteration {iteration}) ---")
    for i, msg in enumerate(messages):
        print(f"Message {i + 1}: Role={msg.role}")
        if msg.parts:
            for j, part in enumerate(msg.parts):
                if hasattr(part, "text") and part.text:
                    print(
                        f"  Part {j + 1} (text): {part.text[:200]}{'...' if len(part.text) > 200 else ''}"
                    )
                elif hasattr(part, "function_call") and part.function_call:
                    print(f"  Part {j + 1} (function_call): {part.function_call.name}")
                elif hasattr(part, "function_response") and part.function_response:
                    print(
                        f"  Part {j + 1} (function_response): {str(part.function_response)[:200]}{'...' if len(str(part.function_response)) > 200 else ''}"
                    )
                else:
                    print(f"  Part {j + 1}: {type(part).__name__}")
    print("--- End Messages History ---\n")


def main() -> None:
    load_dotenv()
    api_key = environ.get("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)

    args = len(argv)
    if args < 2:
        print("Usage: python src/main.py <prompt> [--verbose]")
        return exit(1)

    verbose = False
    if args == 3 and argv[2] == "--verbose":
        verbose = True

    prompt = argv[1]
    model = "gemini-2.0-flash-001"

    messages = [types.Content(role="user", parts=[types.Part(text=prompt)])]

    available_functions = types.Tool(
        function_declarations=[
            schema_get_files_info,
            schema_read_file,
            schema_write_file,
            schema_run_python_file,
        ]
    )

    config = types.GenerateContentConfig(
        tools=[available_functions],
        system_instruction=system_prompt,
    )

    for iteration in range(0, MAX_ITERS):
        try:
            response = client.models.generate_content(
                model=model,
                contents=messages,
                config=config,
            )

            if response is None or response.usage_metadata is None:
                print("response is malformed")
                return

        except errors.ClientError as e:
            if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
                print("Rate limit exceeded. Waiting 60 seconds...")
                time.sleep(60)
                continue
            else:
                print(f"API Error: {e}")
                return
        except Exception as e:
            print(f"Unexpected error: {e}")
            return

        if verbose:
            print(f"Iteration {iteration + 1}/{MAX_ITERS}")
            print(
                "User prompt:",
                prompt if iteration == 0 else "[continuing conversation]",
            )
            print("Prompt tokens:", response.usage_metadata.prompt_token_count)
            print("Response tokens:", response.usage_metadata.candidates_token_count)

            # Log all messages after each iteration
            log_messages_history(messages, iteration + 1)

        if response.candidates:
            for candidate in response.candidates:
                if candidate is None or candidate.content is None:
                    continue
                messages.append(candidate.content)

        if response.function_calls:
            for function_call in response.function_calls:
                result = call_function(function_call, verbose)
                if verbose:
                    print("Tool response:", result)
                name = function_call.name
                if not name:
                    name = ""
                messages.append(
                    types.Content(
                        role="tool",
                        parts=[
                            types.Part.from_function_response(
                                name=name,
                                response={"result": result},
                            )
                        ],
                    )
                )
        else:
            if response.text:
                print("Agent response:", response.text)
                return
            else:
                if verbose:
                    print("Empty response, continuing...")
                messages.append(
                    types.Content(
                        role="user",
                        parts=[
                            types.Part(
                                text="Please provide a more detailed analysis or continue your investigation."
                            )
                        ],
                    )
                )

        # Sleep between iterations to avoid rate limiting
        if iteration < MAX_ITERS - 1:
            time.sleep(2)

    print(
        f"Agent completed {MAX_ITERS} iterations. Use --verbose flag for detailed output."
    )
