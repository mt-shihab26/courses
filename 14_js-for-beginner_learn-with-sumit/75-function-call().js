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

console.log(person.fullName.call(person2, 324, 55));
