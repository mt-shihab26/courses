const calc = require("./calc");

console.log(calc.add(2, 3));
console.log(calc.PI);


const { add, PI } = require("./calc");

console.log(add(2, 5));
console.log(PI);


const getCircleArea = require("./getCircleArea");
console.log(getCircleArea(55));
