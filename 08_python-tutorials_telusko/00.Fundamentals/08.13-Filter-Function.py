nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def is_even(x):
    return x % 2 == 0


evens = list(filter(is_even, nums))

print(evens)

evens2 = list(filter(lambda x : x % 2 == 0, nums))

print(evens)
