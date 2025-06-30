const teacherRouter = require("express").Router();
const {
    getTeachers,
    createTeacher,
    getIndividualTeacher,
    updateTeacher,
    deleteTeacher
} = require("../controllers/teacher.controller");
const admin = require("../middlewares/admin");
const authenticate = require("../middlewares/authenticate");

<<<<<<< HEAD:class-05/the-project/routes/teacher.routes.js
teacherRouter.route("/")
    .get(getTeachers)
    .post([authenticate], createTeacher);
=======
>>>>>>> origin/class-07:routes/teacher.routes.js

teacherRouter.route("/")
    .get(getTeachers)
    .post(createTeacher);


teacherRouter.route("/:id")
    .get(getIndividualTeacher)
    .patch([authenticate], updateTeacher)
    .delete([authenticate, admin], deleteTeacher);

module.exports = teacherRouter;
