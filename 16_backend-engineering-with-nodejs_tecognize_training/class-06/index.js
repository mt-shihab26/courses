import express from "express";
import morgan from "morgan";
import { err404 } from "./middlewares.js";

const app = express();

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.use(morgan("tiny"));


app.use((req, res, next) => {
    console.log("I am middleware 1");
    return next();
});

app.use("/random", (req, res, next) => {
    console.log("I am random middleware");
    next();
});

app.use("/api/students", (req, res) => {
    return res.json({
        msg: "get students"
    })
})

app.use("/:text", (req, res, next) => {
    if (req.params.text === "err") {
        return next("There is a error");
    }
    return next();
})

app.use("/:text", (req, res) => {
    res.status(200).json({
        msg: req.params.text
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: err
    })
})

app.use(err404)

app.listen(8080, () => {
    console.log("On http://localhost:8080");
})