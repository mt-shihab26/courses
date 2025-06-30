file = open("text.txt", "r")
file2 = open("text2.txt", "a")

file2.write("Hello file")

file.close()
file2.close()
