from os import path
from subprocess import CalledProcessError, TimeoutExpired, run
from google.genai import types


def get_python_file_path(working_directory: str, file_path: str) -> str:
    target_path = path.abspath(path.join(working_directory, file_path))

    if not path.exists(target_path):
        raise FileNotFoundError(f"The file '{file_path}' was not found.")

    if not path.isfile(target_path):
        raise ValueError(f"'{file_path}' is not a file.")

    if not target_path.endswith(".py"):
        raise ValueError(f"The file '{file_path}' was not python file.")

    return target_path


def exec_python_code(file_path: str, args=[]):
    binary = "python"
    timeout = 30

    try:
        command_args = [binary, file_path] + args
        output = run(command_args, timeout=timeout, capture_output=True)
        return output
    except TimeoutExpired:
        raise Exception(f"Python execution timed out after {timeout} seconds")
    except CalledProcessError as e:
        message = f"Python execution failed with exit code {e.returncode}: {e.stderr.decode()}"
        raise Exception(message)
    except Exception as e:
        raise Exception(f"Failed to execute Python file: {e}")


def run_python_file(working_directory: str, file_path: str, args=[]):
    try:
        file_path = get_python_file_path(working_directory, file_path)
        output = exec_python_code(file_path, args)
        stdout_text = output.stdout.decode("utf-8") if output.stdout else ""
        stderr_text = output.stderr.decode("utf-8") if output.stderr else ""
        return f"STDOUT: {stdout_text}\nSTDERR: {stderr_text}"
    except Exception as e:
        return f"Error: {e}"


schema_run_python_file = types.FunctionDeclaration(
    name="run_python_file",
    description="Execute a python file directly with python interpreter. Just run the file - no need to read contents first. The args parameter is optional - if not provided, runs with no additional arguments.",
    parameters=types.Schema(
        type=types.Type.OBJECT,
        properties={
            "file_path": types.Schema(
                type=types.Type.STRING,
                description="The file to run, relative to the working directory",
            ),
            "args": types.Schema(
                type=types.Type.ARRAY,
                description="Additional CLI arguments to pass to the python file. Default is empty array if not provided.",
                items=types.Schema(type=types.Type.STRING),
            ),
        },
        required=["file_path"],
    ),
)
