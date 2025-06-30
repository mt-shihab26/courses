function myFunction(x = 1, y = 1) {
    return x * y;
}

console.log(myFunction(3));
console.log(myFunction(3, 5));
console.log(myFunction());

const sum = clac_sum(1, 123, 500, 115, 44, 88);

function clac_sum() {
    let sum = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum);


const max = find_max(1, 123, 500, 115, 44, 88);

function find_max() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(max);