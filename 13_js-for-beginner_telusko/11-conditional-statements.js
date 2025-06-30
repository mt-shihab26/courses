let n = 5;

if (n % 2 === 0) {
    console.log(n, "is even");
}
else {
    console.log(n, "is odd");
}



let result = 50;
let sym;

if (result >= 80) {
    sym = "A+";
}
else if (result >= 70) {
    sym = "A";
}
else if (result >= 60) {
    sym = "A-";
}
else if (result >= 60) {
    sym = "B";
}
else if (result >= 50) {
    sym = "C";
}
else if (result >= 40) {
    sym = "D";
}
else {
    sym = "F";
}
console.log(result, "is", sym);


let rs = 5 % 2 === 0 ? "Even" : "Odd";
console.log(rs);


let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("7am");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4am");
        break;
    case "Friday":
        console.log("9am");
        break;
    case "Saturday":
        console.log("8am");
        break;
    case "Sunday":
        console.log("8am");
        break;
    default:
        console.log("any");
}