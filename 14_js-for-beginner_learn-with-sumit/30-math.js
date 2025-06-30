const log = console.log

log("Math.PI", Math.PI)
log("Math.E", Math.E)
log("Math.SQRT2", Math.SQRT2)
log("Math.SQRT1_2", Math.SQRT1_2)
log("Math.LN2", Math.LN2)
log("Math.LN10", Math.LN10)
log("Math.LOG2E", Math.LOG2E)
log("Math.LOG10E", Math.LOG10E)

log(Math.round(4.9));
log(Math.round(4.4));

log(Math.ceil(4.4))
log(Math.floor(4.4))

log(Math.trunc(4.7));
log(Math.trunc(4.4));

log(Math.sign(-4));
log(Math.sign(0));
log(Math.sign(4));

log(Math.pow(3, 2)); // 3^2
log(Math.sqrt(25));
log(Math.abs(-25));

const radianValue = 90 * Math.PI / 180;
log(Math.sin(radianValue));
log(Math.cos(radianValue));

log(Math.min(0, 150, 30, 20, -8, -200));
log(Math.max(0, 150, 30, 20, -8, -200));

log(Math.random());


log(Math.log(10));
log(Math.log2(8));
log(Math.log10(1000));


log(Math.floor(Math.random() * 10)); // 0 to 9
log((Math.random() * 81) + 20); // 20 to 100

const randomInRange = (n, x) =>
    Math.floor(Math.random() * (x + 1 - n) + n);
log(randomInRange(50, 55));

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}