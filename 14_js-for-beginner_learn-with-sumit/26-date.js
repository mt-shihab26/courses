// new Date()
const d = new Date();
console.log(d);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
const d2 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d2);

const d3 = new Date("October 13, 2014 11:13:00");
console.log(d3);

console.log(new Date(0));
console.log(new Date(100000000000));
console.log(new Date(-100000000000));
console.log(new Date(86400000));

console.log(d3.toUTCString());
console.log(d3.toDateString());
console.log(d3.toISOString());