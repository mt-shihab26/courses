let log = num => {
    if (num == 0) return;
    log(num - 1);
    console.log(num);
}

log(10);


let func = num => num === 1 ? 1 : num * func(num - 1);
console.log(func(10));
