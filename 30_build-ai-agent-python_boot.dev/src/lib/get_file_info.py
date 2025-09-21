from typing import Optional
from os import listdir, path


# - README.md: file_size=1032 bytes, is_dir=False
# - src: file_size=128 bytes, is_dir=True
# - package.json: file_size=1234 bytes, is_dir=False


def get_file_info(working_dir: str, directory: Optional[str] = None):
    abs_working_dir = path.abspath(working_dir)
    if directory is None:
        directory = working_dir
    abs_directory = path.abspath(directory)
    if not abs_directory.startswith(abs_working_dir):
        return f'Error: "{directory}" is not a directory'

    lines = ""
    contents = listdir(abs_directory)
    for content in contents:
        content_path = path.join(abs_directory, content)

        file_size = path.getsize(content_path)
        is_dir = path.isdir(content_path)

        line = f"- {content}: file_size={file_size} bytes, is_dir={is_dir}\n"
        lines += line

    print(lines)
