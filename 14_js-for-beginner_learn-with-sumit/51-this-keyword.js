"use strict";

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getFullName: function () {
        return this.fullName();
    }
}

console.log(person.getFullName());

console.log(this);

function func() {
    console.log(this);
}

func();


// Explicit Function Binding
const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "John",
    lastName: "Doe",
}

console.log(person1.fullName.call(person2));
