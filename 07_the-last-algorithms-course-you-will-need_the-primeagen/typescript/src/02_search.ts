const linear_search = (a: number[], num: number) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === num) {
            return true;
        }
    }
    return false;
};
// O(n)

test("linear_search", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(linear_search(foo, 69)).toEqual(true);
    expect(linear_search(foo, 1336)).toEqual(false);
    expect(linear_search(foo, 69420)).toEqual(true);
    expect(linear_search(foo, 69421)).toEqual(false);
    expect(linear_search(foo, 1)).toEqual(true);
    expect(linear_search(foo, 0)).toEqual(false);
});

const binary_search = (a: number[], num: number) => {
    let low = 0;
    let high = a.length - 1;
    let mid: number;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (a[mid] === num) {
            return true;
        } else if (a[mid] < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
};
// O(log n)

test("binary_search", function () {
    const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
    expect(binary_search(foo, 69)).toEqual(true);
    expect(binary_search(foo, 1336)).toEqual(false);
    expect(binary_search(foo, 69420)).toEqual(true);
    expect(binary_search(foo, 69421)).toEqual(false);
    expect(binary_search(foo, 1)).toEqual(true);
    expect(binary_search(foo, 0)).toEqual(false);
});
