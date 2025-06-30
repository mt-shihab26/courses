class Person {
    constructor(name, age) {
        this.name = name;
        debugger;
        this.age = age;
    }
    play(status) {
        debugger;
        console.log(`${this.name} aged ${this.age} is playing ${status}`);
    }
}

debugger;
const person1 = new Person("Sakib");
const person2 = new Person("Tamim", 36);

person1.play("well");
person2.play("bad");
