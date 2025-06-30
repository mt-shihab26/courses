const first = [1, 2, 3, 4];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined2 = [...first, "a", "b", ...second];

console.log(combined, combined2);

const clone = [...first];
console.log(first);
console.log(clone);

// spread operator with object
const firstObj = {
    name: "Shihab",
    age: 10,
};

const secondObj = {
    job: "Engineer",
    age: 20,
};

const combinedObj = { ...firstObj, ...secondObj, location: "Bangladesh" };
console.log(combinedObj);

const cloneObj = { ...firstObj };
console.log(firstObj);
console.log(cloneObj);
