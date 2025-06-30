log = console.log;


let length = 16;                                    // number
let lastName = "Jhonson";                           // string
let is_even = true;                                 // boolean 
let cars = ["Saab", "Volvo", "BMW"];                // Array
let person = { first: "John", lastName: "Doe" };    // Object
let un = undefined;                                  // undefined


// string + number
let x1 = 16 + "Volvo"; // same as
let x2 = "16" + "Volvo";
console.log(x1, x2);
let x3 = 16 + 4 + "Volvo";
// x3 = (16 + 4) + "Volvo";
// x3 = 20 + "Volvo";
// x3 = "20" + "Volvo";
console.log(x3);

let x4 = "Volvo" + 16 + 4;
// x4 = ("Volvo" + 16) + 4;
// x4 = "Volvo16" + 4;
// x4 = "Volvo16" + "4";
console.log(x4);


// Types are Dynamic
let x; // Now x is undefined
console.log(typeof x);
x = 5; // Now x is Number
console.log(typeof x);
x = "John"; // Now x is String
console.log(typeof x);


// Strings
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';
console.log(carName1, carName1[1], carName1[0]);

let answer1 = "It's alright";             // Single quote inside double quotes
let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
let answer4 = "It\'s alright";
let answer5 = "He is called \"Johnny\"";
log(answer4, answer5)
let car5 = "";    // The value is "", the typeof is "string"
log(car5);


// Numbers
let num1 = 34.00;     // Written with decimals
let num2 = 34;        // Written without decimals
log(num1, num2);

let numy = 123e5;      // 12300000
let numz = 123e-5;     // 0.00123
log(numy, numz);


// Booleans
let bool = true;
let bool2 = false;


// Arrays
const cars2 = ["Saab", "Volvo", "BMW"];
log(cars2, cars2[0], cars2[2]);


// Objects
const person2 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
log(person2, person2.firstName, person2["lastName"]);


// The typeof Operator
log(typeof "");             // Returns "string"
log(typeof typeof "John");         // Returns "string"
log(typeof "John Doe");     // Returns "string"

log(typeof 0);              // Returns "number"
log(typeof typeof 0);              // Returns "number"
log(typeof 314);            // Returns "number"
log(typeof 3.14);           // Returns "number"
log(typeof (3));            // Returns "number"
log(typeof (3 + 4));        // Returns "number"

console.log(typeof typeof 0); // Returns "number"


// Undefined
let car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined
log(car, typeof car);

