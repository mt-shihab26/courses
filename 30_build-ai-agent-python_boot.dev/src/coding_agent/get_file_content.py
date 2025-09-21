from os import path

MAX_CHARS = 10000


def get_file_content(working_directory: str, file_name: str) -> str:
    target_dir = path.abspath(path.join(working_directory, file_name))

    if not path.exists(target_dir):
        return f"Error: The file '{file_name}' was not found."

    if not path.isfile(target_dir):
        return f"Error: '{file_name}' is not a file."

    try:
        with open(target_dir, "r") as file:
            file_content = file.read(MAX_CHARS)
        return file_content
    except Exception as e:
        return f"Error: reading file: {e}"
