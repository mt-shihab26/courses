from typing import Optional
from os import listdir, path
from google.genai import types


def get_files_info(working_directory: str, directory_name: Optional[str] = None) -> str:
    target_path = path.abspath(working_directory)
    if directory_name is not None:
        target_path = path.abspath(path.join(working_directory, directory_name))

    if not path.exists(target_path):
        return f"Error: The directory '{directory_name}' was not found."

    contents = listdir(target_path)
    lines = ""
    for content in contents:
        content_path = path.join(target_path, content)
        file_size = path.getsize(content_path)
        is_dir = path.isdir(content_path)
        lines += f"- {content}: file_size={file_size} bytes, is_dir={is_dir}\n"

    return lines


schema_get_files_info = types.FunctionDeclaration(
    name="get_files_info",
    description="Lists files in the specified directory along with their sizes, constrained to the working directory.",
    parameters=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "directory_name": types.Schema(
                type=types.Type.STRING,
                description="The directory to list files from, relative to the working directory. If not provided, lists files in the working directory itself.",
            ),
        },
    ),
)
