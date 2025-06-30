// Problem 1 - get random number in range
const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * max - min + 1) + min;

for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber(10, 100));
}


// Problem 2 - sort string
const ownSort = (arr, cmp) => {
    const len = arr.length;
    let mn, i, j;
    for (i = 0; i < len; i++) {
        mn = i;
        for (j = i + 1; j < len; j++) {
            if (cmp(arr[mn], arr[j])) mn = j;
        }
        [arr[mn], arr[i]] = [arr[i], arr[mn]];
    }
    return arr;
}

const students = ["Sumit", "Saad", "Daiyan", "Akash", "Za"];
// console.log(students.length);
// students.sort();
// console.log(students);
console.log(ownSort(students, (a, b) => {
    const len = a.length > b.length ? b.length : a.length;
    for (let i = 0; i < len; i++) {
        if (a[i] != b[i]) return a[i] > b[i]
    }
    return a.length > b.length;
}));


// Problem 3 - sort number
const rollNumbers = [3, 5, 1, 5, 6, 2, 4, 10];
console.log(rollNumbers.sort((a, b) => a - b));
console.log(rollNumbers.sort((a, b) => b - a));


// Problem 4 - Leap Year
const isLeapYear = y =>
    (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
console.log(isLeapYear(2000), isLeapYear(2004), isLeapYear(2022));


// Problem 5 - count vowel in string
let vowels = {
    a: true, e: true, i: true, o: true, u: true,
    A: true, E: true, I: true, O: true, U: true
};
const countVowels = word => {
    let ct = 0;
    for (let l of word) {
        if (vowels[l]) ct++;
    }
    return ct;
}
console.log(countVowels("I am learning JS a A"));
console.log(countVowels("I love Bangladesh"));


// Problem 6 - count duplicate elements
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
const countDuplicates = numbers => {
    let ct = 0;
    let map = new Map();
    for (let ith of numbers) {
        if (map.get(ith) === undefined) map.set(ith, 0);
        map.set(ith, map.get(ith) + 1);
        if (map.get(ith) === 2) ct++;
    }
    console.log(map);
    return ct;
}

console.log(countDuplicates(numbers));


// Problem 7 - Get duplicate elements
const numbers2 = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
const duplicates = numbers2.filter((value, index, array) => {
    return array.indexOf(value) !== index;
});

console.log(duplicates);