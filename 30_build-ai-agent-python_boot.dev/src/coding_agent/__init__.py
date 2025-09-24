from os import environ
from dotenv import load_dotenv
from google import genai
from sys import argv, exit
from google.genai import types

from .call_function import call_function
from .get_files_info import schema_get_files_info
from .read_file import schema_read_file
from .write_file import schema_write_file
from .run_python_file import schema_run_python_file


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

    system_prompt = """
You are a helpful AI coding agent.

When a user asks a question or makes a request, make a function call plan. You can perform the following operations:

- List files and directories
- Read the content of file
- Write to a file (create or update)
- Run a Python file with optional arguments

When asked to run a Python file, execute it directly without asking for arguments unless the user specifically mentions arguments. If no arguments are mentioned, assume no arguments are needed and run with empty args array.

All paths you provide should be relative to the working directory. You do not need to specify the working directory in your function calls as it is automatically injected for security reasons.
    """

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

    if verbose:
        print("User prompt:", prompt)

    response = client.models.generate_content(
        model=model, contents=messages, config=config
    )

    if response is None or response.usage_metadata is None:
        print("response is malformed")
        return

    if verbose:
        print("Prompt tokens:", response.usage_metadata.prompt_token_count)
        print("Response tokens:", response.usage_metadata.candidates_token_count)

    if response.function_calls:
        for function_call in response.function_calls:
            print(call_function(function_call, verbose))
    else:
        print(response.text)
