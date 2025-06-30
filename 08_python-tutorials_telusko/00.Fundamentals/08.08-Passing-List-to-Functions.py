def odd_even(nums):
    odds = 0
    evens = 0
    for i in nums:
        if (i % 2):
            odds += 1
        else:
            evens += 1
    return odds, evens


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

odds, evens = odd_even(nums)

# print("odds:", odds, "\nevens:", evens)
print("Even: {} and Odd: {}".format(evens, odds))
