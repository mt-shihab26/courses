console.log("1 Task 1"); // 1

const is = true; // 2

// promise declatation
const res = value => {
    console.log(value); // 10
};

const rej = err => {
    console.log(err);
};

const profunc = (resolve, reject) => {
    const back = () => {
        if (is == true) {
            resolve("9 Task 2"); // 9
        }
        else {
            reject("Failed");
        }
    }
    setTimeout(back, 2000);
};

const promise = new Promise(profunc); // 3

// promise call
promise // 4
    .then(res)
    .catch(rej);

console.log("5 Task 3"); // 5





let is2 = true; // 6

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (is2) {
            resolve("11 Task 4"); // 11
        }
        else {
            reject("Failed 2");
        }
    }, 3000);
});


promise2 // 7
    .then(value => {
        value += " more.."
        console.log(value); // 12
    })
    .catch(err => {
        console.log(err);
    });

console.log("8 Task 5"); // 8
