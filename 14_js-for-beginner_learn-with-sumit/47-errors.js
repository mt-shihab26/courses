try {
    add(1, 3);
} catch (err) {
    console.log(err.name, ":", err.message);
}

// add(1, 3);

console.log("After error");

const x = 2;

try {
    if (x == 1) throw "This is one";
    if (x == 2) throw {
        name: "Number2Error",
        message: "This is a number 2",
        toString: function () {
            return `${this.name}: ${this.message}`
        }
    }
} catch (err) {
    console.log(err);
}


const add = (a, b) => {
    if (b === 0) throw {
        name: "Div 0 Error",
        message: "2nd argument can't be 0 (zero)",
        toString: function () {
            return `${this.name}: ${this.message}`
        }
    }
    return a / b;
}


console.log(add(55, 10));

try {
    console.log(add(55, 0));
} catch (err) {
    console.log(err.toString());
} finally {
    console.log(add(55, 5));
}

console.log(add(55, 55));
