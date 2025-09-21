from os import environ
from dotenv import load_dotenv
from google import genai
from sys import argv, exit


def main():
    load_dotenv()
    api_key = environ.get("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)

    if len(argv) < 2:
        return exit(1)

    prompt = argv[1]
    model = "gemini-2.0-flash-001"

    response = client.models.generate_content(model=model, contents=prompt)
    if response is None or response.usage_metadata is None:
        return

    print(response.text)
    print(response.usage_metadata.prompt_token_count)
    print(response.usage_metadata.candidates_token_count)


if __name__ == "__main__":
    main()
