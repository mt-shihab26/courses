// Built-in module

const fs = require("node:fs");

fs.readFile("./calc.js", (err, data) => {
    if (!err) {
        console.log(data.toString());
    } else {
        console.log(err.message);
    }
})


const crypto = require("crypto");
const http = require("node:http");
