class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    play() {
        console.log(this.name);
    }
}

const car1 = new Car("BMW", 2022);

console.log(car1);

car1.play();
