from google.genai.types import FunctionCall

from .get_files_info import get_files_info
from .read_file import read_file
from .write_file import write_file
from .run_python_file import run_python_file

pwd = "data/calculator"


def call_function(function_call: FunctionCall, verbose=False):
    if verbose:
        print(f"Calling function: {function_call.name}({function_call.args})")
    else:
        print(f"Calling function: {function_call.name}")

    if function_call.name == "get_files_info":
        if function_call.args is not None:
            get_files_info(pwd, function_call.args["directory_name"])
        else:
            print("Error: No arguments provided for get_files_info function")

    elif function_call.name == "read_file":
        if function_call.args is not None:
            read_file(pwd, function_call.args["file_path"])
        else:
            print("Error: No arguments provided for read_file function")

    elif function_call.name == "write_file":
        if function_call.args is not None:
            write_file(
                pwd, function_call.args["file_path"], function_call.args["content"]
            )
        else:
            print("Error: No arguments provided for write_file function")

    elif function_call.name == "run_python_file":
        if function_call.args is not None:
            run_python_file(
                pwd, function_call.args["file_path"], function_call.args["args"]
            )
        else:
            print("Error: No arguments provided for run_python_file function")
