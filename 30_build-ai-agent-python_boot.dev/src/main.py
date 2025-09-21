from os import environ
from dotenv import load_dotenv
from google import genai
from sys import argv, exit
from google.genai import types


def main():
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

    messages = [
        types.Content(role="user", parts=[types.Part(text=prompt)]),
    ]

    if verbose:
        print("User prompt:", prompt)

    response = client.models.generate_content(model=model, contents=messages)
    if response is None or response.usage_metadata is None:
        return

    print(response.text)

    if verbose:
        print("Prompt tokens:", response.usage_metadata.prompt_token_count)
        print("Response tokens:", response.usage_metadata.candidates_token_count)


if __name__ == "__main__":
    main()
