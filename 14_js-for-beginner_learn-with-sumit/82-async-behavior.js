console.log("Line 1 Code");

const back = () => {
    console.log("Line 2 Code")
}

setTimeout(back, 2000);

console.log("Line 3 Code");


setInterval(back, 2000);

console.log("Line 4 Code");
