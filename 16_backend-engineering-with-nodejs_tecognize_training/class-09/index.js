// CRUD Operations
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routes/student.routes");
const teacherRouter = require("./routes/teacher.routes");
const userRouter = require("./routes/user.routes");
const { MONGODB_URI, NODE_ENV } = require("./utils/config.util");
const notFoundHandler = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.error("MongoDB Connection Failed"));

// req, res
// middleware -> callback -> req, res => access, modify
// Request/Response Cycle
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

if (NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/api/students", studentRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/users", userRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8080, () => {
    console.log("Listening on port 8080!");
});
