"use strict";

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    run() {
        console.log(this.name);
    }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

myCar1.run();
myCar2.run();
