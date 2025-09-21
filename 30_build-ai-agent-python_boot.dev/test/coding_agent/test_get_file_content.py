from os import path
from coding_agent.get_file_content import get_file_content


def test_returns_error_message_when_file_does_not_exist():
    response = get_file_content("data", "hello.txt")
    assert response == "Error: The file 'hello.txt' was not found."


def test_returns_file_content_when_file_exists():
    response = get_file_content("data", "lorem.txt")
    with open(path.join("data", "lorem.txt"), "r") as file:
        file_content = file.read(10000)
    assert response == file_content
    assert len(response) == 10000


def test_returns_error_message_when_path_is_directory():
    response = get_file_content("data", "calculator")
    assert response == "Error: 'calculator' is not a file."
