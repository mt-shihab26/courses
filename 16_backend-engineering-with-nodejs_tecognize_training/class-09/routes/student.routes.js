const studentRouter = require("express").Router();
const {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent,
} = require("../controllers/student.controller");
const admin = require("../middlewares/admin");
const authenticate = require("./../middlewares/authenticate");

studentRouter.use((req, res, next) => {
    console.log("I am from student router!");
    next();
});

studentRouter.route("/")
    .get(getStudents)
    .post([authenticate], createStudent);

studentRouter
    .route("/:id")
    .get(getStudentDetails)
    .patch([authenticate], updateStudent)
    .put([authenticate], updateStudent)
    .delete([authenticate, admin], deleteStudent);

module.exports = studentRouter;
