const person = {
    name: "shihab",
    age: 19,
    getName: function () {
        return this.name;
    }
};

person.name = "Saimon";

let number = 3;
number = 4;

console.log(person);


// some way to crate object
const person1 = {
    name: "Shihab",
    age: 19
};
console.log(person1);

const person2 = {};
person2.name = "Shihab";
person2.age = 19;
console.log(person2);

const person3 = new Object();
person3.name = "Shihab";
person3.age = 19;
console.log(person3);
