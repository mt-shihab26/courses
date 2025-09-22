from os import path


def run_python_file(working_directory: str, file_name: str):
    target_path = path.abspath(path.join(working_directory, file_name))

    if not path.exists(target_path):
        return f"Error: The file '{file_name}' was not found."

    if not path.isfile(target_path):
        return f"Error: '{file_name}' is not a file."

    if not target_path.endswith(".py"):
        return f"Error: The file '{file_name}' was not python file."

    try:
        with open(target_path, "r") as file:
            file_content = file.read()
    except Exception as e:
        return f"Error: reading file: {e}"
