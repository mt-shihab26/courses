const teacherRouter = require("express").Router();
const {
    getTeachers,
    createTeacher,
    getIndividualTeacher,
    updateTeacher,
    deleteTeacher,
} = require("../controllers/teacher.controller");

teacherRouter.route("/").get(getTeachers).post(createTeacher);

teacherRouter
    .route("/:id")
    .get(getIndividualTeacher)
    .patch(updateTeacher)
    .delete(deleteTeacher);

module.exports = teacherRouter;
