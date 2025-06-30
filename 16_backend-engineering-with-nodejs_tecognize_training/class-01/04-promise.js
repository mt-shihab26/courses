let promise = new Promise((resolve, reject) => {
    resolve("Done");
    // setTimeout(() => resolve("Done"), 2000);
    // setTimeout(() => reject("Error"), 2000);
});

// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// )

const x = promise.then(console.log);
console.log(x);
const x2 = x.catch(console.log)
console.log(x2);
const x3 = x2.finally(() => console.log("Finally here"))
console.log(x3);
