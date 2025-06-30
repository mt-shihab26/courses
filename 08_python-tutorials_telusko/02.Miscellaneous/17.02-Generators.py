def top_ten():
    n = 1
    while n <= 10:
        yield n * n
        n += 1


val = top_ten()
for i in val:
    print(i)
