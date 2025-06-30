file = open("text.txt", "r")

# print(file)

# print(file.read())

# print(file.read(5))
# print(file.read(1))
# print(file.read(5))


# print(file.readline(), end="")
# print(file.readline())

i = 1
for v in file:
    print(v, i)
    i += 1

file.close()
