const bubble_sort = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
};
// O(n^2)

const arr = [9, 3, 7, 4, 69, 420, 42];
const c_arr = [3, 4, 7, 9, 42, 69, 420];

test("bubble-sort", function () {
    bubble_sort(arr);
    expect(arr).toEqual(c_arr);
});
