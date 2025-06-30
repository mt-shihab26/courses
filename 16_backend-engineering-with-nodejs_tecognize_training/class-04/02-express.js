const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({ msg: "Hello World" })
})

app.listen(3000, () => {
    console.log("On 3000");
})