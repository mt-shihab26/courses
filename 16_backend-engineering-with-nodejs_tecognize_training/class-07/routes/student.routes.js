const studentRouter = require('express').Router();
const {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/student.controller');

studentRouter.use((req, res, next) => {
    console.log("I am from student router!");
    next();
});

studentRouter.route('/')
    .get(getStudents)
    .post(createStudent)

studentRouter.route('/:id')
    .get(getStudentDetails)
    .patch(updateStudent)
    .put(updateStudent)
    .delete(deleteStudent)

module.exports = studentRouter;