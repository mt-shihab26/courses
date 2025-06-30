function greet() {
  console.log("Hello World");
}

greet();

function greet2() {
  return "Hello World";
}

let str = greet2();
console.log(str);

function greet3(user) {
  return `Hello ${user}`;
}

let str2 = greet3("Shihab");
console.log(str2);

// Functions Expresion
let add = function (num1, num2) {
  return num1 + num2;
};

console.log(add(5, 6));
some = add;
console.log(some(5, 6));
console.log(some, add);

// Local and Global Scope
function localGlobal(u) {
  console.log(u);
  console.log(user);
}

let user = "shihab";

localGlobal("Mahamud");

// Default value
function add2(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

console.log(add2(2, 5, 7));
console.log(add2(2, 5));

// Arrow Functions
let addr = (num1, num2) => {
  return num1 + num2;
};

console.log(addr(5, 10));

let addr2 = (num1, num2) => num1 + num2;

console.log(addr2(50, 10));

// Methods
let laptop = {
  cpu: "i9",
  ram: 16,
  brand: "HP",
  str: function () {
    return `${this.cpu}, ${this.ram}, ${this.brand}`;
  },
};

console.log(laptop.str());

let laptop2 = {
  cpu: "i9",
  ram: 16,
  brand: "HP",
  str: () => "Hello World",
};

console.log(laptop2.str());
