const letters = new Set(["a", "b", "c", "a", "b"]);

console.log(letters, typeof letters);

letters.add("x");
letters.add("y");
letters.add("x");
letters.add("x");

console.log(letters);

let text = "";

letters.forEach(value => {
    text += value;
})

console.log(text);

console.log(letters.values());

for (const letter of letters.values()) {
    console.log(letter);
}

console.log(letters.keys());
console.log(letters.entries());

console.log(letters instanceof Set);