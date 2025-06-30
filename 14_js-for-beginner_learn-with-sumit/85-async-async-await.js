let paymantSuccess = true;
let marks = 90;

const enroll = () => {
    console.log("3 Course enrollment is in progress");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymantSuccess) {
                resolve();
            }
            else {
                reject("Paymat failed!");
            }
        }, 2000);
    })
    return promise;
}

const progress = () => {
    console.log("7 Course on progress...");

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                resolve();
            }
            else {
                reject("10 You could not get enough marks to get  the certificate");
            }
        }, 3000);

    });
    return promise;
}

const getCertificate = () => {
    console.log("11 Preparing your certificate!");

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("14 Congrats! you got the certificate")
        }, 1);
    })
    return promise;
}


const course = async () => {
    try {
        await enroll();
        await progress();
        const massage = await getCertificate();
        console.log(massage);
    }
    catch (err) {
        console.log(err);
    }
}

course();

console.log("End line");

console.log(5 + 10);
console.log(55 + 10);
