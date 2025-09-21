from os import makedirs, path


def write_file(working_directory: str, file_name: str, content: str):
    target_path = path.abspath(path.join(working_directory, file_name))

    parent_dir = path.dirname(target_path)
    if not path.exists(parent_dir):
        try:
            makedirs(parent_dir, exist_ok=True)
        except Exception as e:
            return f"Error: Could not create parent dirs: {parent_dir}, error: {e}."

    try:
        with open(target_path, "w") as file:
            file.write(content)
        return f'Successfully wrote to "{file_name}" ({len(content)} characters)'
    except Exception as e:
        return f"Error: Could not write to file {file_name}, error: {e}."
