function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    if (callback) callback(sum);
}

let x;

calculator(5, 4, result => {
    x = result;
});

console.log(x);