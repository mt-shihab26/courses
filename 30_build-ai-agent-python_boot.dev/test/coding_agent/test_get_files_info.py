from coding_agent.get_files_info import get_files_info


def test_directory_not_found_returns_error():
    response = get_files_info("data/calculator", "hello")
    assert response == "Error: The directory 'hello' was not found."


def test_returns_info_for_root_directory():
    response = get_files_info("data/calculator")
    assert response is not None
    assert isinstance(response, str)
    assert len(response) > 0


def test_returns_info_for_subdirectory():
    response = get_files_info("data/calculator", "pkg")
    assert response is not None
    assert isinstance(response, str)
    assert len(response) > 0
