const fs = require("fs");


const readData = () => new Promise((resolve, reject) => {
    fs.readFile("./db/db.student.json", "utf-8", (err, data) => {
        if (err) reject(err)
        else resolve(JSON.parse(data));
    })
})

const writeData = ({ data }) => new Promise((resolve, reject) => {
    fs.writeFile('./db/db.student.json', JSON.stringify(data), (err) => {
        if (err) reject(err);
        else resolve('success');
    });
});

module.exports = {
    readData,
    writeData
}