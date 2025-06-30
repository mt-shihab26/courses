/*
JavaScript has 3 types of scope:
    - Block scope
    - Function scope
    - Global scope
*/


const num = 5;

if (num % 2 == 1) {
    let something = "inside if"; // Block scope
    const something0 = "inside if const"
    var something2 = "inside if with var"; // Global Scope and window
    something4 = "inside if with none"; // Global Scope
}

// console.log(something); // err
console.log(something2); // not err

let bar = 24; // Global Scope
const bar3 = 53; // Global Scope
var bar2 = 23; // Global Scope and window

function foo() {
    let something = "inside func"; // Function Scope
    const something1 = "inside func" // Function Scope
    var something2 = "inside func with var"; // Function Scope
    something3 = "inside func with none"; // Global Scope
}


var gob = 234;
console.log(window.gob);

