from coding_agent.get_file_info import get_file_info


def test_get_file_info_default():
    error = get_file_info("data/calculator")
    assert error is None


def test_get_file_info_with_pkg():
    error = get_file_info("data/calculator", "pkg")
    assert error is None
