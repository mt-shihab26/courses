from os import environ
from dotenv import load_dotenv
from google import genai


def main():
    load_dotenv()
    api_key = environ.get("GEMINI_API_KEY")
    client = genai.Client(api_key=api_key)

    response = client.models.generate_content(
        model="gemini-2.0-flash-001", contents="What is paystubhero?"
    )

    print(response.text)


if __name__ == "__main__":
    main()
