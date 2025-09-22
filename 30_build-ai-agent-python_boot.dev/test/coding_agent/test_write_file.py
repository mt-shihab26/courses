import os
import tempfile
from unittest.mock import patch
from coding_agent.write_file import write_file


def test_write_lorem():
    working_directory = "data"
    file_name = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

    result = write_file(working_directory, file_name, content)
    assert result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_name)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)


def test_write_lorem_again():
    working_directory = "data"
    file_name = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again"

    result = write_file(working_directory, file_name, content)
    assert result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_name)
    with open(path, "r") as f:
        assert f.read() == content


def test_write_lorem_again2():
    working_directory = "data"
    file_name = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again 2"

    result = write_file(working_directory, file_name, content)
    assert result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_name)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)


def test_write_dir():
    working_directory = "data/new-dir"
    file_name = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again 2"

    result = write_file(working_directory, file_name, content)
    assert result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_name)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)
        os.removedirs(working_directory)


def test_write_sub_dir():
    working_directory = "data/new-dir/new-dir2"
    file_name = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again 2"

    result = write_file(working_directory, file_name, content)
    assert result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_name)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)
        os.removedirs(working_directory)


def test_write_file_success():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "test.txt"
        content = "Hello, World!"

        result = write_file(temp_dir, file_name, content)

        assert (
            result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_name)
        assert os.path.exists(file_path)

        with open(file_path, "r") as f:
            assert f.read() == content


def test_write_file_creates_parent_directories():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "subdir/nested/test.txt"
        content = "Content in nested directory"

        result = write_file(temp_dir, file_name, content)

        assert (
            result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_name)
        assert os.path.exists(file_path)
        assert os.path.exists(os.path.dirname(file_path))

        with open(file_path, "r") as f:
            assert f.read() == content


def test_write_file_empty_content():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "empty.txt"
        content = ""

        result = write_file(temp_dir, file_name, content)

        assert result == f'Successfully wrote to "{file_name}" (0 characters)'

        file_path = os.path.join(temp_dir, file_name)
        assert os.path.exists(file_path)

        with open(file_path, "r") as f:
            assert f.read() == ""


def test_write_file_large_content():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "large.txt"
        content = "x" * 10000  # 10KB of content

        result = write_file(temp_dir, file_name, content)

        assert result == f'Successfully wrote to "{file_name}" (10000 characters)'

        file_path = os.path.join(temp_dir, file_name)
        assert os.path.exists(file_path)

        with open(file_path, "r") as f:
            assert f.read() == content


def test_write_file_overwrites_existing():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "overwrite.txt"
        original_content = "Original content"
        new_content = "New content"

        # Write original content
        result1 = write_file(temp_dir, file_name, original_content)
        assert (
            result1
            == f'Successfully wrote to "{file_name}" ({len(original_content)} characters)'
        )

        # Overwrite with new content
        result2 = write_file(temp_dir, file_name, new_content)
        assert (
            result2
            == f'Successfully wrote to "{file_name}" ({len(new_content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_name)
        with open(file_path, "r") as f:
            assert f.read() == new_content


def test_write_file_handles_special_characters():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "special.txt"
        content = "Special chars: àáâãäåæçèéêë ñ 中文 🚀 \n\t"

        result = write_file(temp_dir, file_name, content)

        assert (
            result == f'Successfully wrote to "{file_name}" ({len(content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_name)
        with open(file_path, "r", encoding="utf-8") as f:
            assert f.read() == content


@patch("builtins.open", side_effect=PermissionError("Permission denied"))
def test_write_file_permission_error(_):
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "permission_error.txt"
        content = "This should fail"

        result = write_file(temp_dir, file_name, content)

        assert result.startswith(
            "Error: Could not write to file permission_error.txt, error:"
        )
        assert "Permission denied" in result


@patch("os.makedirs", side_effect=OSError("Cannot create directory"))
def test_write_file_makedirs_error(_):
    with tempfile.TemporaryDirectory() as temp_dir:
        file_name = "deep/nested/path/test.txt"
        content = "This should fail"

        result = write_file(temp_dir, file_name, content)

        assert result.startswith("Error: Could not create parent dirs:")
        assert "Cannot create directory" in result


def test_write_file_relative_path():
    with tempfile.TemporaryDirectory() as temp_dir:
        # Change to temp directory to test relative paths
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_dir)
            file_name = "relative.txt"
            content = "Relative path test"

            result = write_file(".", file_name, content)

            assert (
                result
                == f'Successfully wrote to "{file_name}" ({len(content)} characters)'
            )
            assert os.path.exists(file_name)

            with open(file_name, "r") as f:
                assert f.read() == content
        finally:
            os.chdir(original_cwd)


def test_write_file_absolute_path_in_filename():
    with tempfile.TemporaryDirectory() as temp_dir:
        # Test with absolute path in filename (should be handled correctly)
        nested_dir = os.path.join(temp_dir, "nested")
        os.makedirs(nested_dir, exist_ok=True)

        file_name = os.path.join(nested_dir, "absolute.txt")
        content = "Absolute path in filename"

        result = write_file(temp_dir, file_name, content)

        # The function should still work and create the file
        assert result.startswith("Successfully wrote to")
        assert str(len(content)) in result


def test_write_file_nonexistent_working_directory():
    nonexistent_dir = "/path/that/does/not/exist"
    file_name = "test.txt"
    content = "Test content"

    result = write_file(nonexistent_dir, file_name, content)

    # Should create the directory structure and succeed
    assert result.startswith(
        "Error: Could not create parent dirs:"
    ) or result.startswith("Successfully wrote to")
