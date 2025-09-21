import os
import tempfile
from unittest.mock import patch
from coding_agent.get_file_info import get_file_info


def test_get_file_info_default():
    error = get_file_info("data/calculator")
    assert error is None


def test_get_file_info_with_pkg():
    error = get_file_info("data/calculator", "pkg")
    assert error is None


def test_get_file_info_hello():
    error = get_file_info("data/calculator", "hello")
    assert error == 'Error: "hello" is not found'


def test_get_file_info_absolute_path():
    """Test with absolute path as working directory"""
    abs_path = os.path.abspath("data/calculator")
    error = get_file_info(abs_path)
    assert error is None


def test_get_file_info_relative_subdirectory():
    """Test with relative path in subdirectory parameter"""
    error = get_file_info("data", "calculator")
    assert error is None


def test_get_file_info_nonexistent_working_directory():
    """Test with nonexistent working directory"""
    error = get_file_info("nonexistent_dir")
    assert error == 'Error: "None" is not found'


def test_get_file_info_nonexistent_subdirectory():
    """Test with nonexistent subdirectory"""
    error = get_file_info("data/calculator", "nonexistent")
    assert error == 'Error: "nonexistent" is not found'


def test_get_file_info_empty_directory():
    """Test with empty directory"""
    with tempfile.TemporaryDirectory() as temp_dir:
        error = get_file_info(temp_dir)
        assert error is None


def test_get_file_info_directory_with_files_and_subdirs():
    """Test directory containing both files and subdirectories"""
    with tempfile.TemporaryDirectory() as temp_dir:
        # Create test files and directories
        test_file = os.path.join(temp_dir, "test.txt")
        with open(test_file, "w") as f:
            f.write("test content")

        test_subdir = os.path.join(temp_dir, "subdir")
        os.mkdir(test_subdir)

        error = get_file_info(temp_dir)
        assert error is None


def test_get_file_info_single_file_directory():
    """Test directory with single file"""
    with tempfile.TemporaryDirectory() as temp_dir:
        test_file = os.path.join(temp_dir, "single.txt")
        with open(test_file, "w") as f:
            f.write("single file content")

        error = get_file_info(temp_dir)
        assert error is None


def test_get_file_info_large_file():
    """Test directory with large file"""
    with tempfile.TemporaryDirectory() as temp_dir:
        large_file = os.path.join(temp_dir, "large.txt")
        with open(large_file, "w") as f:
            f.write("x" * 10000)  # 10KB file

        error = get_file_info(temp_dir)
        assert error is None


def test_get_file_info_nested_directory_path():
    """Test with nested directory path"""
    error = get_file_info("data/calculator", "pkg")
    assert error is None


def test_get_file_info_dot_directory():
    """Test with current directory"""
    original_cwd = os.getcwd()
    try:
        os.chdir("data/calculator")
        error = get_file_info(".")
        assert error is None
    finally:
        os.chdir(original_cwd)


def test_get_file_info_parent_directory():
    """Test with parent directory reference"""
    with tempfile.TemporaryDirectory() as temp_dir:
        subdir = os.path.join(temp_dir, "subdir")
        os.mkdir(subdir)

        error = get_file_info(subdir, "..")
        assert error is None


def test_get_file_info_special_characters_in_filename():
    """Test directory with files containing special characters"""
    with tempfile.TemporaryDirectory() as temp_dir:
        special_files = [
            "file with spaces.txt",
            "file-with-dashes.txt",
            "file_with_underscores.txt",
        ]
        for filename in special_files:
            filepath = os.path.join(temp_dir, filename)
            with open(filepath, "w") as f:
                f.write("content")

        error = get_file_info(temp_dir)
        assert error is None


def test_get_file_info_zero_byte_file():
    """Test directory with zero-byte file"""
    with tempfile.TemporaryDirectory() as temp_dir:
        empty_file = os.path.join(temp_dir, "empty.txt")
        open(empty_file, "w").close()  # Create empty file

        error = get_file_info(temp_dir)
        assert error is None


@patch("builtins.print")
def test_get_file_info_output_format(mock_print):
    """Test the output format of file info"""
    with tempfile.TemporaryDirectory() as temp_dir:
        # Create a test file with known size
        test_file = os.path.join(temp_dir, "test.txt")
        with open(test_file, "w") as f:
            f.write("hello")  # 5 bytes

        # Create a test directory
        test_dir = os.path.join(temp_dir, "testdir")
        os.mkdir(test_dir)

        get_file_info(temp_dir)

        # Verify print was called
        mock_print.assert_called_once()

        # Get the printed output
        printed_output = mock_print.call_args[0][0]

        # Verify the format includes both file and directory
        assert "test.txt: file_size=5 bytes, is_dir=False" in printed_output
        assert (
            "testdir: file_size=" in printed_output
        )  # Directory size varies by system
        assert "is_dir=True" in printed_output


@patch("builtins.print")
def test_get_file_info_multiple_items_output(mock_print):
    """Test output format with multiple files and directories"""
    with tempfile.TemporaryDirectory() as temp_dir:
        # Create multiple test items
        items = {
            "file1.txt": "content1",
            "file2.txt": "longer content here",
        }

        for filename, content in items.items():
            filepath = os.path.join(temp_dir, filename)
            with open(filepath, "w") as f:
                f.write(content)

        # Create directories
        for dirname in ["dir1", "dir2"]:
            os.mkdir(os.path.join(temp_dir, dirname))

        get_file_info(temp_dir)

        mock_print.assert_called_once()
        printed_output = mock_print.call_args[0][0]

        # Verify each item is listed
        assert "file1.txt:" in printed_output
        assert "file2.txt:" in printed_output
        assert "dir1:" in printed_output
        assert "dir2:" in printed_output

        # Verify format consistency
        lines = printed_output.strip().split("\n")
        for line in lines:
            assert line.startswith("- ")
            assert "file_size=" in line
            assert "bytes, is_dir=" in line


def test_get_file_info_error_message_format():
    """Test that error messages follow expected format"""
    error = get_file_info("data/calculator", "nonexistent_dir")
    assert error == 'Error: "nonexistent_dir" is not found'

    error = get_file_info("completely_nonexistent_dir")
    assert error == 'Error: "None" is not found'


def test_get_file_info_path_normalization():
    """Test that paths are properly normalized"""
    # Test with trailing slashes
    error1 = get_file_info("data/calculator/")
    error2 = get_file_info("data/calculator")
    assert error1 == error2

    # Test with redundant path separators
    error3 = get_file_info("data//calculator")
    assert error3 == error2

