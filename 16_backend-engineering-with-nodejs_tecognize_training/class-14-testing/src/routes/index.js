const studentRouter = require("./student.routes");
const teacherRouter = require("./teacher.routes");
const userRouter = require("./user.routes");
const fakeRouter = require("./fake.routes");

module.exports = (app) => {
    app.use("/api/students", studentRouter);
    app.use("/api/teachers", teacherRouter);
    app.use("/api/users", userRouter);
    app.use("/api/fakes/", fakeRouter);
};