// Explicit Conversion
let num = 6;
console.log(num, typeof num);

let nums = String(6);
console.log(nums, typeof nums);

let num2 = Number("123");
console.log(num2, typeof num2);

// Type Coercion
console.log("Type Co-Version");
let x;
console.log(x, typeof x);
x = 8;
console.log(x, typeof x);
x = x + "";
console.log(x, typeof x);
x = x - 2;
console.log(x, typeof x);

// Boolean
x = !x;
console.log(x, typeof x);
x = !!x;
console.log(x, typeof x);
console.log(Boolean(7)); // Truthy
console.log(Boolean(0)); // Falsy
console.log(Boolean(null)); // Falsy
console.log(Boolean(undefined)); // Falsy
console.log(Boolean("Shihab")); // Truthy



let x2;
x = 8;
x = x + "";
x = x + 2;
console.log(x, typeof x);
x = +x + 2;
console.log(x, typeof x);


let x3 = "123 Shihab";
console.log(x3, typeof x3);
let x4 = parseInt("123 Shihab")
console.log(x4, typeof x4);
