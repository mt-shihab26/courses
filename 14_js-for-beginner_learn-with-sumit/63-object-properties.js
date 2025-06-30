const person = {
    name: "Sumit",
    firstName: "Sumit",
    lastName: "Saha",
    age: 35,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
};

console.log(person.name);
console.log(person["name"]);
let x = "name";
console.log(person[x]);


for (let x in person) {
    console.log(x);
}

person.lang = "English";
console.log(person);

delete person.age;
console.log(person);