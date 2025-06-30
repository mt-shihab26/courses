const studentRouter = require("express").Router();
const {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent,
    studentCreateValidate,
    studentUpdateValidate
} = require("../controllers/student.controller");
const admin = require("../middlewares/admin");
const cache = require("../middlewares/cache");
const authenticate = require("./../middlewares/authenticate");

studentRouter.route("/")
    .get(getStudents)
    .post([studentCreateValidate, authenticate], createStudent);

studentRouter
    .route("/:id")
    .get([cache], getStudentDetails)
    .patch([studentUpdateValidate, authenticate], updateStudent)
    .delete([authenticate, admin], deleteStudent);

module.exports = studentRouter;
