file = open("text.txt", "r")
file2 = open("text2.txt", "w")

for data in file:
    file2.write(data)

file.close()
file2.close()
