function tmp() {
    let counter = 0;
    function plus() {
        counter += 1;
        return counter;
    }
    return plus;
}

const add = tmp();

console.log(add());
console.log(add());
console.log(add());

