const fs = require("fs");

// promise
const promise1 = () => {
    return new Promise((resolve, reject) => {
        console.log("--Reading file1.txt--");
        fs.readFile("./file1.txt", "utf-8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.split(', '))
            }
        })
    })
};

const promise2 = (preData) => {
    return new Promise((resolve, reject) => {
        fs.readFile("./file2.txt", "utf-8", (err, data) => {
            console.log("--Reading file2.txt--");
            if (err) {
                reject(err);
            }
            else {
                resolve([data.toLowerCase().split(" "), preData]);
            }
        })
    })
};

const calc = (data, preData) => {
    // console.log(data, preData);
    console.log(typeof preData, preData);

    const result = {};
    preData.forEach(og => result[og] = 0);


    data.forEach(dt => {
        preData.forEach(og => {
            if (dt === og) {
                result[og]++;
            }
        })
    })
    return result;
};

promise1()
    .then(res => {
        return promise2(res);
    })
    .then(res => {
        const rs = calc(res[0], res[1]);
        console.log(rs);
    })
    .catch(err => {
        console.log(err);
    })
