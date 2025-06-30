lst = [1, 2, 5, 6, 7, 8, 0]


def linear_search(nums, target):
    for i in range(len(nums)):
        if lst[i] == target:
            return i
    return -1


print(linear_search(lst, 8))
