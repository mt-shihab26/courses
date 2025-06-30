const nums = [1, 2, 3];

const iterator = nums[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const myNumbers = {};

myNumbers[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n == 100) done = true;
            return {
                value: n,
                done: done,
            };
        },
    };
};


for (let num of myNumbers) {
    console.log(num);
}