/*
Data type in JavaScript
- Primitive
    - Number
    - String
    - Boolean
    - Null
    - Undefined
    - Symbol
- Object
*/

// Number
let num1 = 8;
console.log(typeof num1);

let num2 = 8.5;
console.log(typeof num2);

let hex = 0xff; // hex reprentaion of number
console.log(hex, typeof hex);

let exp = 1.5e12; // 1.5 * 10^12
console.log(exp, typeof exp);

let some = 100_00_000;
console.log(some, typeof some);

let inf = 5 / 0;
console.log(inf, typeof inf);

let infn = -5 / 0;
console.log(infn, typeof infn);

console.log("Number Maximum Value: ", Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 100);

let bigInt = 23423423134234234354444444444444123423423423423423423n;
console.log(bigInt, typeof bigInt);

let nAN = 5 / "str"; // Not a number
console.log(nAN, typeof nAN);

// Strings
let firstName = "Shihab";
let lastName = "Mahamud";
console.log(typeof firstName);

let fullName = firstName + " " + lastName;
console.log(fullName);

let fullName2 = 'Shi\thab\n"Maha\bmud"';
console.log(fullName2);

// Boolean
let bool = 5 < 6;
console.log(bool, typeof bool);

let bool2 = true;
let bool3 = false;
console.log(bool2, typeof bool2);

// null
let type = null;
console.log(type, typeof type);
// null represents an object
//          it sys it isn't an object
// it doesn't represents an object
//         but it's an object

// undefined
let something;
console.log(something, typeof something);

let value = 5;
console.log(value, typeof value);

value = undefined;
console.log(value, typeof value);
