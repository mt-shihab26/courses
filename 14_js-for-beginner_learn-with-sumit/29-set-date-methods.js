const d = new Date();

d.setFullYear(2020);
console.log(d);


const d2 = new Date();
d2.setFullYear(2020, 11, 3);
console.log(d2);


const d3 = new Date();
d3.setMonth(11);
console.log(d3);


const d4 = new Date();
d4.setDate(15);
console.log(d4);
d4.setDate(d.getDate() + 50);


const d5 = new Date();
d5.setHours(22);
console.log(d5);


const d6 = new Date();
d6.setMinutes(30);
console.log(d6);


const d7 = new Date();
d7.setSeconds(30);
console.log(d7);


let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
console.log(text);