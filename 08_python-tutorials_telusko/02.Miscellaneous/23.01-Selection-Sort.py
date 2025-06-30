def selection_sort(lists):
    ln = len(lists)
    for i in range(ln):
        mn = i
        for j in range(i+1, ln):
            if lists[mn] > lists[j]:
                mn = j
        lists[mn], lists[i] = lists[i], lists[mn]
    return lists


if __name__ == "__main__":
    values = [5, 3, 8, 6, 7, 2]
    print(values)
    values = selection_sort(values)
    print(values)
