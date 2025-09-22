from os import path
from subprocess import CalledProcessError, TimeoutExpired, run


def get_python_file_path(working_directory: str, file_name: str) -> str:
    target_path = path.abspath(path.join(working_directory, file_name))

    if not path.exists(target_path):
        raise FileNotFoundError(f"The file '{file_name}' was not found.")

    if not path.isfile(target_path):
        raise ValueError(f"'{file_name}' is not a file.")

    if not target_path.endswith(".py"):
        raise ValueError(f"The file '{file_name}' was not python file.")

    return target_path


def exec_python_code(file_path: str, args):
    binary = "python"
    timeout = 30

    try:
        output = run([binary, file_path] + args, timeout=timeout, capture_output=True)
        return output
    except TimeoutExpired:
        raise Exception(f"Python execution timed out after {timeout} seconds")
    except CalledProcessError as e:
        message = f"Python execution failed with exit code {e.returncode}: {e.stderr.decode()}"
        raise Exception(message)
    except Exception as e:
        raise Exception(f"Failed to execute Python file: {e}")


def run_python_file(working_directory: str, file_name: str, args=[]):
    try:
        file_path = get_python_file_path(working_directory, file_name)
        output = exec_python_code(file_path, args)
        return f"STDOUT: {output.stdout}\nSTDERR: {output.stderr}"
    except Exception as e:
        return f"Error: {e}"
