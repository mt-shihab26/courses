const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    age: 19,
    get lang() {
        return this.language;
    },
    set lang(lg) {
        this.language = lg;
    },
    get name() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.name);
console.log(person.lang);
person.lang = "bn";
console.log(person.lang);

Object.defineProperty(person, "getAge", {
    get: function () { return this.age }
});

console.log(person.getAge);
