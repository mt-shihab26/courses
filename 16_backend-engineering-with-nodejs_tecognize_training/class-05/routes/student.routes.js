const {
    getStudents, createStudent, getStudentDetails,
    updateStudent, deleteStudent
} = require("../controllers/student.controller");
const studentRouter = require("express").Router();


studentRouter.route("/")
    .get(getStudents)
    .post(createStudent)


studentRouter.route("/:id")
    .get(getStudentDetails)
    .patch(updateStudent)
    .put(updateStudent)
    .delete(deleteStudent)


module.exports = studentRouter;