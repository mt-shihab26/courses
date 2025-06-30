const Teacher = require("../models/teacher.model");

const err500 = (res, err) => {
    return res.status(500).json({
        error: err,
    });
};

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        return res.status(200).json(teachers);
    } catch (err) {
        return err500(res, err);
    }
};

const createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        return res.status(201).json(teacher);
    } catch (err) {
        return err500(res, err);
    }
};

const getIndividualTeacher = async (req, res) => {
    const id = req.params.id;
    try {
        const teacher = await Teacher.findById(id);
        return res.status(200).json(teacher);
    } catch (err) {
        return err500(res, err);
    }
};

const updateTeacher = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const updateTeacher = await Teacher.findByIdAndUpdate(id, body, {
            new: true,
        });
        return res.status(200).json(updateTeacher);
    } catch (err) {
        return err500(res, err);
    }
};

const deleteTeacher = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Teacher.findByIdAndDelete(id);
        return res.status(200).json(student);
    } catch (err) {
        return err500(res, err);
    }
};

module.exports = {
    getTeachers,
    createTeacher,
    getIndividualTeacher,
    updateTeacher,
    deleteTeacher,
};
