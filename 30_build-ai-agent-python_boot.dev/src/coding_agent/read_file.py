from os import path
from google.genai import types

from .config import MAX_CHARS


def read_file(working_directory: str, file_path: str) -> str:
    target_path = path.abspath(path.join(working_directory, file_path))

    if not path.exists(target_path):
        return f"Error: The file '{file_path}' was not found."

    if not path.isfile(target_path):
        return f"Error: '{file_path}' is not a file."

    try:
        with open(target_path, "r", encoding="utf-8") as file:
            file_content = file.read()
            truncated_content = file_content[:MAX_CHARS]
            if len(file_content) > len(truncated_content):
                t_msg = f"[...File] '{file_path}' truncated at {MAX_CHARS} characters"
                truncated_content += t_msg
        return truncated_content
    except Exception as e:
        return f"Error: reading file: {e}"


schema_read_file = types.FunctionDeclaration(
    name="read_file",
    description="Gets the contents of the given file as a string, constrained to the working directory.",
    parameters=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "file_path": types.Schema(
                type=types.Type.STRING,
                description="The path to the file, from the working directory.",
            ),
        },
        required=["file_path"],
    ),
)
