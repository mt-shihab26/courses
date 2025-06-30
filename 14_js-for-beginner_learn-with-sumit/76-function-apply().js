"use strict";

const person = {
    fullName: function (a, b) {
        return this.firstName + " " + this.lastName + " " + a + " " + b;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.apply(person2, [324, 55]));


console.log(Math.max.apply(" ", [1, 2, 3]))
