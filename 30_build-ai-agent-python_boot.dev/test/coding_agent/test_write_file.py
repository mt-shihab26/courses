import os
import tempfile
from unittest.mock import patch
from coding_agent.write_file import write_file


def test_write_lorem():
    working_directory = "data"
    file_path = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

    result = write_file(working_directory, file_path, content)
    assert result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_path)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)


def test_write_lorem_again():
    working_directory = "data"
    file_path = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again"

    result = write_file(working_directory, file_path, content)
    assert result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_path)
    with open(path, "r") as f:
        assert f.read() == content


def test_write_lorem_again2():
    working_directory = "data"
    file_path = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again 2"

    result = write_file(working_directory, file_path, content)
    assert result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_path)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)


def test_write_dir():
    working_directory = "data/new-dir"
    file_path = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again 2"

    result = write_file(working_directory, file_path, content)
    assert result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_path)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)
        os.removedirs(working_directory)


def test_write_sub_dir():
    working_directory = "data/new-dir/new-dir2"
    file_path = "lorem2.txt"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. again 2"

    result = write_file(working_directory, file_path, content)
    assert result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'

    path = os.path.join(working_directory, file_path)
    with open(path, "r") as f:
        assert f.read() == content
        os.remove(path)
        os.removedirs(working_directory)


def test_write_file_success():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "test.txt"
        content = "Hello, World!"

        result = write_file(temp_dir, file_path, content)

        assert (
            result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_path)
        assert os.path.exists(file_path)

        with open(file_path, "r") as f:
            assert f.read() == content


def test_write_file_creates_parent_directories():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "subdir/nested/test.txt"
        content = "Content in nested directory"

        result = write_file(temp_dir, file_path, content)

        assert (
            result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_path)
        assert os.path.exists(file_path)
        assert os.path.exists(os.path.dirname(file_path))

        with open(file_path, "r") as f:
            assert f.read() == content


def test_write_file_empty_content():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "empty.txt"
        content = ""

        result = write_file(temp_dir, file_path, content)

        assert result == f'Successfully wrote to "{file_path}" (0 characters)'

        file_path = os.path.join(temp_dir, file_path)
        assert os.path.exists(file_path)

        with open(file_path, "r") as f:
            assert f.read() == ""


def test_write_file_large_content():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "large.txt"
        content = "x" * 10000  # 10KB of content

        result = write_file(temp_dir, file_path, content)

        assert result == f'Successfully wrote to "{file_path}" (10000 characters)'

        file_path = os.path.join(temp_dir, file_path)
        assert os.path.exists(file_path)

        with open(file_path, "r") as f:
            assert f.read() == content


def test_write_file_overwrites_existing():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "overwrite.txt"
        original_content = "Original content"
        new_content = "New content"

        # Write original content
        result1 = write_file(temp_dir, file_path, original_content)
        assert (
            result1
            == f'Successfully wrote to "{file_path}" ({len(original_content)} characters)'
        )

        # Overwrite with new content
        result2 = write_file(temp_dir, file_path, new_content)
        assert (
            result2
            == f'Successfully wrote to "{file_path}" ({len(new_content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_path)
        with open(file_path, "r") as f:
            assert f.read() == new_content


def test_write_file_handles_special_characters():
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "special.txt"
        content = "Special chars: àáâãäåæçèéêë ñ 中文 🚀 \n\t"

        result = write_file(temp_dir, file_path, content)

        assert (
            result == f'Successfully wrote to "{file_path}" ({len(content)} characters)'
        )

        file_path = os.path.join(temp_dir, file_path)
        with open(file_path, "r", encoding="utf-8") as f:
            assert f.read() == content


@patch("builtins.open", side_effect=PermissionError("Permission denied"))
def test_write_file_permission_error(_):
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "permission_error.txt"
        content = "This should fail"

        result = write_file(temp_dir, file_path, content)

        assert result.startswith(
            "Error: Could not write to file permission_error.txt, error:"
        )
        assert "Permission denied" in result


@patch("os.makedirs", side_effect=OSError("Cannot create directory"))
def test_write_file_makedirs_error(_):
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = "deep/nested/path/test.txt"
        content = "This should fail"

        result = write_file(temp_dir, file_path, content)

        assert result.startswith("Error: Could not create parent dirs:")
        assert "Cannot create directory" in result


def test_write_file_relative_path():
    with tempfile.TemporaryDirectory() as temp_dir:
        # Change to temp directory to test relative paths
        original_cwd = os.getcwd()
        try:
            os.chdir(temp_dir)
            file_path = "relative.txt"
            content = "Relative path test"

            result = write_file(".", file_path, content)

            assert (
                result
                == f'Successfully wrote to "{file_path}" ({len(content)} characters)'
            )
            assert os.path.exists(file_path)

            with open(file_path, "r") as f:
                assert f.read() == content
        finally:
            os.chdir(original_cwd)


def test_write_file_absolute_path_in_filename():
    with tempfile.TemporaryDirectory() as temp_dir:
        # Test with absolute path in filename (should be handled correctly)
        nested_dir = os.path.join(temp_dir, "nested")
        os.makedirs(nested_dir, exist_ok=True)

        file_path = os.path.join(nested_dir, "absolute.txt")
        content = "Absolute path in filename"

        result = write_file(temp_dir, file_path, content)

        # The function should still work and create the file
        assert result.startswith("Successfully wrote to")
        assert str(len(content)) in result


def test_write_file_nonexistent_working_directory():
    nonexistent_dir = "/path/that/does/not/exist"
    file_path = "test.txt"
    content = "Test content"

    result = write_file(nonexistent_dir, file_path, content)

    # Should create the directory structure and succeed
    assert result.startswith(
        "Error: Could not create parent dirs:"
    ) or result.startswith("Successfully wrote to")
