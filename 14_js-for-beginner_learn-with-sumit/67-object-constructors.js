function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

const sumit = new Person("Sumit", "saha", 35);
const jasim = new Person("Jasim", "Uddin", 30);
const rahim = new Person("Rahin", "Islam", 32);
console.log(sumit, jasim, rahim);