from os import path
from coding_agent.get_file_content import get_file_content


def test_get_file_info_not_found():
    response = get_file_content("data", "hello.txt")
    assert response == "Error: The file 'hello.txt' was not found."


def test_get_file_info_provided():
    response = get_file_content("data", "lorem.txt")
    with open(path.join("data", "lorem.txt"), "r") as file:
        file_content = file.read()
    assert response == file_content
