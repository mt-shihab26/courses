function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


const add2 = function (a, b) {
    return a + b;
};

console.log(add2(43, 2));

const add3 = new Function("a", "b", "return a + b");

console.log(add3(10, 5));

print();
// print2();

function print() {
    console.log("We are mad");
}

const print2 = function () {
    console.log("We are mad2");
};

(function () {
    console.log("Self invoking");
})(); // self invoking funtion -> IIFE


const text = print.toString();
console.log(text);

const x = (x, y) => x * y;
const x2 = (x, y) => { return x * y };


const add4 = function (a, b) {
    console.log(arguments);
    return a * b;
}


add4(2, 8);