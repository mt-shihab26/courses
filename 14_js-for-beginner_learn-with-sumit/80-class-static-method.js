class Car {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
}

let myCar = new Car("Ford");

console.log(Car.hello());
