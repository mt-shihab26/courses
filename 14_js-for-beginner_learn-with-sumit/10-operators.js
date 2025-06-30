let x = 5
let y = 2;

// Arithmetic Operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x ** y); // exponentiation (ES2016)
console.log(x / y);
console.log(x % y); // Modulus (Division Remainder)
console.log(x++);
console.log(x--);


// String Operators
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);

let text4 = "What a very ";
text4 += "nice day";
console.log(text4);


// adding String and Numbers
let xi = 5 + 5;
let yi = "5" + 5;
let zi = "Hello" + 5;
console.log(xi, yi, zi);

// Type Operators
let xs = "something";
let xt = 25;
console.log(typeof xs, typeof xt);

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
console.log(auto instanceof Object);