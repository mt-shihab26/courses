const promise1 = Promise.resolve("Promise 1 resolved");

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    }, 2000);
});

Promise.all([promise1, promise2])
    .then(res => {
        console.log(res);
    })

Promise.race([promise1, promise2])
    .then(res => {
        console.log(res);
    })