from coding_agent.get_file_info import get_file_info

error = get_file_info("data/calculator")
if error:
    print(error)

error = get_file_info("data/calculator", "pkg")
if error:
    print(error)
