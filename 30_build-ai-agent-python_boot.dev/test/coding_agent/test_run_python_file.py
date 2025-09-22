from coding_agent.run_python_file import run_python_file


def test_file_not_found(tmp_path):
    result = run_python_file(str(tmp_path), "non_existent.py")
    assert result == "Error: The file 'non_existent.py' was not found."


def test_not_a_file(tmp_path):
    dir_path = tmp_path / "mydir"
    dir_path.mkdir()

    result = run_python_file(str(tmp_path), "mydir")
    assert result == "Error: 'mydir' is not a file."


def test_not_python_file(tmp_path):
    file_path = tmp_path / "test.txt"
    file_path.write_text("print('hello')")

    result = run_python_file(str(tmp_path), "test.txt")
    assert result == "Error: The file 'test.txt' was not python file."


def test_valid_python_file():
    result = run_python_file("data/calculator", "main.py", ["3 + 5"])
    print(result)
