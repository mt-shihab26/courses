from os import makedirs, path
from google.genai import types


def write_file(working_directory: str, file_path: str, content: str) -> str:
    target_path = path.abspath(path.join(working_directory, file_path))

    parent_dir = path.dirname(target_path)
    if not path.exists(parent_dir):
        try:
            makedirs(parent_dir, exist_ok=True)
        except Exception as e:
            return f"Error: Could not create parent dirs: {parent_dir}, error: {e}."

    try:
        with open(target_path, "w", encoding="utf-8") as file:
            file.write(content)
        return f'Successfully wrote to "{file_path}" ({len(content)} characters)'
    except Exception as e:
        return f"Error: Could not write to file {file_path}, error: {e}."


schema_write_file = types.FunctionDeclaration(
    name="write_file",
    description="Write content to a file, constrained to the working directory. Creates parent directories if needed.",
    parameters=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "file_path": types.Schema(
                type=types.Type.STRING,
                description="The path to the file to write, relative to the working directory.",
            ),
            "content": types.Schema(
                type=types.Type.STRING,
                description="The content to write to the file as string.",
            ),
        },
        required=["file_path", "content"],
    ),
)
