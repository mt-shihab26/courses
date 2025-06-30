const studentRouter = require("express").Router();
const {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent,
} = require("../controllers/student.controller");
const { authenticate } = require("../middlewares/auth.middleware");

studentRouter.use((req, res, next) => {
    console.log("I am from student router!");
    next();
});

studentRouter.route("/").get(authenticate, getStudents).post(createStudent);

studentRouter
    .route("/:id")
    .get(getStudentDetails)
    .patch(updateStudent)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = studentRouter;
