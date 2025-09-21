from typing import Optional
from os import listdir, path


def get_file_info(base_working_dir: str, current_working_dir: Optional[str] = None):
    abs_base_working_dir = path.abspath(base_working_dir)

    abs_current_working_dir = abs_base_working_dir
    if current_working_dir is not None:
        dir = path.join(base_working_dir, current_working_dir)
        abs_current_working_dir = path.abspath(dir)

    if not abs_current_working_dir.startswith(abs_base_working_dir):
        return f'Error: "{current_working_dir}" is not a directory'

    contents = listdir(abs_current_working_dir)

    lines = ""
    for content in contents:
        content_path = path.join(abs_current_working_dir, content)
        file_size = path.getsize(content_path)
        is_dir = path.isdir(content_path)
        lines += f"- {content}: file_size={file_size} bytes, is_dir={is_dir}\n"

    print(lines)
