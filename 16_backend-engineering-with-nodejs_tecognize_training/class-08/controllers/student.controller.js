const Student = require("../models/student.model");

const getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ name: 1 });
        return res.status(200).send(students);
    } catch (err) {
        return res.status(500).send({
            error: err,
        });
    }
};

const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        return res.status(201).send(result);
    } catch (err) {
        return res.status(500).send({
            error: err,
        });
    }
};

const getStudentDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if (student) return res.status(200).send(student);
        return res.status(404).send("no data found");
    } catch (err) {
        return res.status(500).send({
            error: err,
        });
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
        return res.status(500).send({
            error: err,
        });
    }
};

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(id);
        return res.status(200).send(student);
    } catch (err) {
        return res.status(500).send({
            error: err,
        });
    }
};

module.exports = {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent,
};
