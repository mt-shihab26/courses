// while loop
let i = 1;
while (i <= 5) {
    console.log("hi", i++);
}
console.log();


// do while loop
let i2 = 7;
do {
    console.log("hi2", i2++);
} while (i2 <= 5);
console.log();


for (let i3 = 1; i3 <= 5; i3++) {
    console.log("hi3", i3);
}

// for in loop
let alien2 = {
    name: "Shihab Mahamud",
    tech: "C/C++",
    sm: 34,
    laptop: {
        cpu: "i5",
        ram: 8,
        brand: "Avita",
    },
}


for (let k in alien2) {
    if (typeof alien2[k] === "object") {
        for (let j in alien2[k]) {
            console.log(j, alien2[k][j], typeof j);
        }
    }
    else {
        console.log(k, alien2[k], typeof k);
    }
}

console.log(typeof alien2);

let alien3 = new Object();
console.log(typeof alien3);


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