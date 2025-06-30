const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    age: 19,
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    getArein() {
        return this.age;
    }
}

person.getAge = function () {
    return this.age;
};

console.log(person.getArein());
console.log(person.getAge());
console.log(person.fullName());

