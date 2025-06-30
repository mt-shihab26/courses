def binary_search(nums, target):
    low = 0
    high = len(nums) - 1
    while low <= high:
        mid = low + ((high - low) // 2)
        if nums[mid] > target:
            high = mid-1
        elif nums[mid] < target:
            low = mid+1
        else:
            return mid
    return -1


if __name__ == "__main__":
    lst = [0, 1, 2, 5, 6, 7, 8]

    print(binary_search(lst, 10))
    print(binary_search(lst, 7))
    print(binary_search(lst, 1))
