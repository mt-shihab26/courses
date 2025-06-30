const friuts = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(friuts);

friuts.set("good", 340);
friuts.set("apples", 230);

console.log(friuts);
console.log(friuts.get("apples"));

// friuts.clear();
// console.log(friuts);


console.log(friuts instanceof Map);

friuts.forEach((value, key) => {
    console.log(value, key);
})

console.log(friuts.has("apples"));
friuts.delete("apples");
console.log(friuts.has("apples"));


for (const x of friuts.keys()) {
    console.log(x);
}
for (const x of friuts.values()) {
    console.log(x);
}

for (const x of friuts.entries()) {
    console.log(x);
}

const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };

const friuts2 = new Map();

friuts.set(apples, 500);
friuts.set(bananas, 300);
friuts.set(oranges, 534);

console.log(friuts2);
