nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


evens = list(filter(lambda x : x % 2 == 0, nums))

print(evens)

evens = list(map(lambda x : x * 2, evens))

print(evens)
