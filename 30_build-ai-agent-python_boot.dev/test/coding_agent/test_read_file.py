import os
import tempfile
import shutil
from coding_agent.read_file import read_file
from coding_agent.config import MAX_CHARS


def test_file_exists_and_readable():
    temp_dir = tempfile.mkdtemp()
    try:
        test_file = os.path.join(temp_dir, "test.txt")
        test_content = "Hello, world!"

        with open(test_file, "w") as f:
            f.write(test_content)

        result = read_file(temp_dir, "test.txt")
        assert result == test_content
    finally:
        shutil.rmtree(temp_dir)


def test_file_not_found():
    temp_dir = tempfile.mkdtemp()
    try:
        result = read_file(temp_dir, "nonexistent.txt")
        assert result == "Error: The file 'nonexistent.txt' was not found."
    finally:
        shutil.rmtree(temp_dir)


def test_not_a_file():
    temp_dir = tempfile.mkdtemp()
    try:
        subdir = os.path.join(temp_dir, "subdir")
        os.makedirs(subdir)

        result = read_file(temp_dir, "subdir")
        assert result == "Error: 'subdir' is not a file."
    finally:
        shutil.rmtree(temp_dir)


def test_file_truncation():
    temp_dir = tempfile.mkdtemp()
    try:
        test_file = os.path.join(temp_dir, "large.txt")
        large_content = "a" * (MAX_CHARS + 100)

        with open(test_file, "w") as f:
            f.write(large_content)

        result = read_file(temp_dir, "large.txt")
        expected_truncated = "a" * MAX_CHARS
        expected_message = f"[...File] 'large.txt' truncated at {MAX_CHARS} characters"
        expected_result = expected_truncated + expected_message

        assert result == expected_result
    finally:
        shutil.rmtree(temp_dir)


def test_empty_file():
    temp_dir = tempfile.mkdtemp()
    try:
        test_file = os.path.join(temp_dir, "empty.txt")

        with open(test_file, "w") as _:
            pass

        result = read_file(temp_dir, "empty.txt")
        assert result == ""
    finally:
        shutil.rmtree(temp_dir)


def test_unreadable_file():
    temp_dir = tempfile.mkdtemp()
    try:
        test_file = os.path.join(temp_dir, "unreadable.txt")

        with open(test_file, "w") as f:
            f.write("test content")

        os.chmod(test_file, 0o000)

        try:
            result = read_file(temp_dir, "unreadable.txt")
            assert result.startswith("Error: reading file:")
        finally:
            os.chmod(test_file, 0o644)
    finally:
        shutil.rmtree(temp_dir)
