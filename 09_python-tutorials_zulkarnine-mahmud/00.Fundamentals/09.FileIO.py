with open("text_file.txt", mode="r") as in_file:
    words = []
    for line in in_file.readlines():
        words += line.strip().split(" ")
    unique_words = set(words)

    with open("unique_words.txt", mode="w") as out_file:
        for item in sorted(unique_words):
            out_file.write(item)
            out_file.write("\n")
