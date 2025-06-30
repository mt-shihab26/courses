def bubble_sort(nums):
    ln = len(nums)
    for i in range(len(nums)-1):
        for j in range(1, ln):
            if nums[j-1] > nums[j]:
                nums[j-1], nums[j] = nums[j], nums[j-1]
        ln -= 1
    return nums


if __name__ == "__main__":
    nus = [5, 3, 8, 6, 7, 2]

    print(nus)
    nus = bubble_sort(nus)
    print(nus)
