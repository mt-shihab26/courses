class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walking...");
    }
}

const person = new Person("Shihab");
console.log(person);

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("Shihab 2", "Dip");
console.log(teacher);
