let values = [7, 2, 5]

values.push(23);

console.log(values);
console.log(values[0], values[2], values[1]);
console.log(values[5])


let names = ["Shihab", "Shawon", "Saimon"];
names[3] = "Jyad";
names[5] = "askdf"
console.log(names);


let data = [
    "Shihab",
    5,
    () => "Hello World",
    {
        tech: "C/C++, Python, JavaScript",
        some: "Someting",
    },
]

console.log(data);
console.log(data[0], data[1]);
console.log(data[2]());
console.log(data[3].tech)


let log = console.log

// Arrays Methods
let data2 = [5, 7, 8, 9];

log(data2.push(55));
log(data2.pop());

log(data2);

log(data2.shift());
log(data2);

log(data2.unshift(8));
log(data2);


let data3 = [4, 34, 5, 2, 5, 12, 553];
log(data3.splice(3));
log(data3);

data3 = [4, 34, 5, 2, 5, 12, 553];
log(data3.splice(3, 2));
log(data3);

data3 = [4, 34, 5, 2, 5, 12, 553];
log(data3.splice(3, 3, "shihab", "mahamud"));
log(data3);


// for of loop
let nums = [];
nums[0] = 12;
nums[9] = 55;
log(nums);

for (let ith of nums) {
    log(ith);
}

log();

for (let i in nums) {
    log(i);
}


// Destructur
let nums2 = [4, 2, 5, 9];
let [a, b, c, d] = nums2;
log(a, b, c, d);

let [a2, b2, , d2] = nums2;
log(a2, b2, d2);

let a3 = 5;
let b3 = 6;

[a3, b3] = [b3, a3];
log(a3, b3);

let works = "My name is Shihab Mahamud something".split(" ");
log(works);
let [a4, b4, , ...d4] = works;
log(a4, b4, d4);


// forEach methods
let nums3 = [42, 55, 34, 533, 45, 662, 5662, 55, 93];
nums3.forEach((num, index, nums) => {
    console.log(num, index, nums);
})


// filter
log(nums3.filter(num => num % 2 === 0));

nums3.filter(num => num % 2 === 0)
    .forEach(num => {
        log(num)
    });

// map
nums3.filter(num => num % 2 === 0)
    .map(num => num * 2)
    .forEach(num => {
        log(num)
    });

// reduce
log(nums3.filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((num1, num2) => num1 + num2));
