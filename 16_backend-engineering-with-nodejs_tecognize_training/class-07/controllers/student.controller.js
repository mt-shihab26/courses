<<<<<<< HEAD:class-05/the-project/controllers/student.controller.js
const Student = require("../models/student.model");
const { InternalServerError, BadRequestError } = require("../utils/error.util");
const _ = require("lodash");
const validate = require("./../middlewares/validate");
const updateStudentSchema = require("../schemas/update.student.schema");
const createStudentSchema = require("../schemas/create.student.schema");

const getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ name: 1 });
        return res.status(200).send(students);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const createStudent = async (req, res, next) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        return res.status(201).send(result);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const getStudentDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if (student) return res.status(200).send(student);
        return res.status(404).send("no data found");
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const updateStudent = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id, updatedData, {
            new: true,
            useFindAndModify: false,
        });
        return res.status(200).send(student);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(id);
        return res.status(200).send(student);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const studentCreateValidate = (req, res, next) => {
    const payload = _.pick(req.body, ["name", "age", "hobbies"]);
    try {
        req.body = validate(createStudentSchema, payload);
        return next();
    } catch (err) {
        return next(new BadRequestError(err.message));
    }
}

const studentUpdateValidate = (req, res, next) => {
    const payload = _.pick(req.body, ["name", "age", "hobbies"]);
    try {
        req.body = validate(updateStudentSchema, payload);
        return next();
    } catch (err) {
        return next(new BadRequestError(err.message));
    }
}

module.exports = {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent,
    studentCreateValidate,
    studentUpdateValidate
};
=======
const { Student } = require('../models/student.model');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find()
            .sort({ name: 1 });
        return res.status(200).send(students);
    } catch (err) {
        return res.status(500).send({
            error: err
        })
    }
}

const createStudent = async (req, res) => {
    const student = new Student(req.body);
    try {
        const result = await student.save();
        return res.status(201).send(result);
    } catch (err) {
        return res.status(500).send({
            error: err
        })
    }
}

const getStudentDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if (student) return res.status(200).send(student);
        return res.status(404).send('no data found');
    } catch (err) {
        return res.status(500).send({
            error: err
        });
    }
}

const updateStudent = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id, updatedData, { new: true, useFindAndModify: false });
        return res.status(200).send(student);
    } catch (err) {
        return res.status(500).send({
            error: err
        });
    }
}

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(id);
        return res.status(200).send(student);
    } catch (err) {
        return res.status(500).send({
            error: err
        });
    }
}

module.exports = {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent
}
>>>>>>> origin/class-07:controllers/student.controller.js
