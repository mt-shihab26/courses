// "2015-03-25" (The International Standard)

const d = new Date("2015-03-25");
console.log(d);

const d2 = new Date("2015-03");
console.log(d2);

const d3 = new Date("2015");
console.log(d3);

const d4 = new Date("2015-03-25T12:00:00Z");
console.log(d4);

const d5 = new Date("2015-03-25T12:00:00-06:30");
console.log(d5);

const d6 = new Date("03/25/2015");
console.log(d6);

const d7 = new Date("Mar 25 2015");
console.log(d7);

const d8 = new Date("JANUARY, 25, 2015");
console.log(d8);


const msec = Date.parse("March 21, 2012");
console.log(msec);

console.log(new Date(msec));