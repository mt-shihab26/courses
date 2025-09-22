from os import path


def get_python_code(working_directory: str, file_name: str) -> str:
    target_path = path.abspath(path.join(working_directory, file_name))

    if not path.exists(target_path):
        raise FileNotFoundError(f"The file '{file_name}' was not found.")

    if not path.isfile(target_path):
        raise ValueError(f"'{file_name}' is not a file.")

    if not target_path.endswith(".py"):
        raise ValueError(f"The file '{file_name}' was not python file.")

    try:
        with open(target_path, "r") as file:
            file_content = file.read()
        return file_content
    except Exception as e:
        raise Exception(f"Error reading file: {e}")


def run_python_file(working_directory: str, file_name: str):
    try:
        code = get_python_code(working_directory, file_name)
    except Exception as e:
        return f"Error: {e}"
