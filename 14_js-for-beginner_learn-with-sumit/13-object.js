const run = function () {
    return "Running...";
}

const car = {
    name: "Fiat",
    model: 500,
    weigth: "850kg",
    color: "white",
    start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    },
    runner: run,
}

console.log(car.runner());


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

let names = person.fullName();
console.log(names);


let x = new String("hello");
console.log(x, typeof x);
let x2 = "Hello";
console.log(x2, typeof x2);
