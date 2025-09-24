from os import path

from google.genai import types
from coding_agent.config import MAX_CHARS


def get_file_content(working_directory: str, file_name: str) -> str:
    target_path = path.abspath(path.join(working_directory, file_name))

    if not path.exists(target_path):
        return f"Error: The file '{file_name}' was not found."

    if not path.isfile(target_path):
        return f"Error: '{file_name}' is not a file."

    try:
        with open(target_path, "r") as file:
            file_content = file.read()
            truncate_content = file_content[:MAX_CHARS]
            if len(file_content) > len(truncate_content):
                t_msg = f"[...File] '{file_name}' truncated at {MAX_CHARS} characters"
                truncate_content += t_msg
        return truncate_content
    except Exception as e:
        return f"Error: reading file: {e}"


schema_get_file_content = types.FunctionDeclaration(
    name="get_file_content",
    description="Gets the contents of the given file as a string, constrained to the working directory.",
    parameters=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "file_path": types.Schema(
                type=types.Type.STRING,
                description="The path to the file, from the working directory.",
            ),
        },
    ),
)
