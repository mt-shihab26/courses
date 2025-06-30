const arr = [1, 2, 3, 5, 3, 6];

arr.forEach((value, index, arr) => {
    if (value === 3) {
        arr[index] = 6;
    }
})

console.log(arr);