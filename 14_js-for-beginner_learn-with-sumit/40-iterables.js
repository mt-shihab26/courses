const person = {
    firstName: "shihab",
    lastName: "mahamud"
}

console.log(person);


const numbers = [1, 2, 3, 4, 5];
const country = "Bangladesh";

for (let number of numbers) {
    console.log(number);
}
console.log();

for (let char of country) {
    console.log(char);
}
console.log();


const letters = new Set(['a', 'b', 'c']);

for (let letter of letters) {
    console.log(letter);
}

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
])

for (const fruit of fruits) {
    console.log(fruit);
}