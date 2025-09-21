from typing import Optional
from os import listdir, path


def get_file_info(working_directory: str, directory_name: Optional[str] = None):
    target_dir = path.abspath(working_directory)
    if directory_name is not None:
        target_dir = path.abspath(path.join(working_directory, directory_name))

    if not path.exists(target_dir):
        return f"Error: The directory '{directory_name}' was not found."

    contents = listdir(target_dir)
    lines = ""
    for content in contents:
        content_path = path.join(target_dir, content)
        file_size = path.getsize(content_path)
        is_dir = path.isdir(content_path)
        lines += f"- {content}: file_size={file_size} bytes, is_dir={is_dir}\n"

    return lines
