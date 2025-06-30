const d = new Date();

console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getMonth());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[d.getMonth()];
console.log(month);

console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMilliseconds());
console.log(d.getSeconds());
console.log(d.getDay());
