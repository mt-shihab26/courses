from typing import Optional
from os import listdir, path


def get_file_info(working_directory: str, directory: Optional[str] = None):
    target_dir = path.abspath(working_directory)
    if directory is not None:
        target_dir = path.abspath(path.join(working_directory, directory))

    if not path.exists(target_dir):
        return f'Error: "{directory}" is not found'

    contents = listdir(target_dir)
    lines = ""
    for content in contents:
        content_path = path.join(target_dir, content)
        file_size = path.getsize(content_path)
        is_dir = path.isdir(content_path)
        lines += f"- {content}: file_size={file_size} bytes, is_dir={is_dir}\n"

    print(lines)
