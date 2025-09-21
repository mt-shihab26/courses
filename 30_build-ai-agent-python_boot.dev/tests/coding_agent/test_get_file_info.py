from coding_agent.get_file_info import get_file_info


def test_get_file_info_not_found():
    response = get_file_info("data/calculator", "hello")
    assert response == "Error: The directory 'hello' was not found."


def test_get_file_info_default():
    response = get_file_info("data/calculator")


def test_get_file_info_with_pkg():
    response = get_file_info("data/calculator", "pkg")
