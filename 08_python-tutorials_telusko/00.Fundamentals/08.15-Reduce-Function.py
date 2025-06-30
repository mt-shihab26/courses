from functools import reduce

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


sum = reduce(lambda x, y : x + y, nums)


print(sum)
