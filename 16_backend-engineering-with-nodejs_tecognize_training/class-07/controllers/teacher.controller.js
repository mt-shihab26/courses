<<<<<<< HEAD:class-05/the-project/controllers/teacher.controller.js
const Teacher = require("../models/teacher.model");
const { InternalServerError } = require("../utils/error.util");

const getTeachers = async (req, res, next) => {
=======
const Teacher = require("../models/teacher.model")

const err500 = (res, err) => {
    return res.status(500).json({
        error: err
    });
}

const getTeachers = async (req, res) => {
>>>>>>> origin/class-07:controllers/teacher.controller.js
    try {
        const teachers = await Teacher.find();
        return res.status(200).json(teachers);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

<<<<<<< HEAD:class-05/the-project/controllers/teacher.controller.js
const createTeacher = async (req, res, next) => {
=======
const createTeacher = async (req, res) => {
    const teacher = Teacher(req.body);
>>>>>>> origin/class-07:controllers/teacher.controller.js
    try {
        await teacher.save();
        return res.status(201).json(teacher);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const getIndividualTeacher = async (req, res, next) => {
    const id = req.params.id;
    try {
        const teacher = await Teacher.findById(id);
        return res.status(200).json(teacher);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const updateTeacher = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const updateTeacher = await Teacher
            .findByIdAndUpdate(id, body, { new: true });
        return res.status(200).json(updateTeacher);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const deleteTeacher = async (req, res, next) => {
    const id = req.params.id;
    try {
        const student = await Teacher.findByIdAndDelete(id);
        return res.status(200).json(student);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};


module.exports = {
    getTeachers,
    createTeacher,
    getIndividualTeacher,
    updateTeacher,
    deleteTeacher
};