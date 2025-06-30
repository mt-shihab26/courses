const express = require("express");
const studentRouter = require("./routes/student.routes");
const app = express();


app.use(express.json());


app.use("/students", studentRouter)


app.listen(8080, () => {
    console.log("Listening on http://localhost:8080");
})