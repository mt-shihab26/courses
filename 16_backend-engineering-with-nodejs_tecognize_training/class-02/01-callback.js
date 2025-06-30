const fs = require("fs");

const res = {};

fs.readFile("./file1.txt", "utf-8", (err, data) => {
    console.log("--Reading file1.txt");
    if (err) {
        console.log("Error: ", err.message);
    }
    else {
        const dataArr = data.split(', ');
        dataArr.forEach(og => res[og] = 0);
        fs.readFile("./file2.txt", "utf-8", (err, data) => {
            console.log("--Reading file2.txt");
            if (err) {
                console.log("Error: ", err.message);
            }
            else {
                const dataArr2 = data.toLowerCase().split(" ");
                dataArr2.forEach(dt => {
                    dataArr.forEach(og => {
                        if (dt == og) {
                            res[og]++;
                        }
                    })
                })
                console.log(res);
            }
        })
    }
})
