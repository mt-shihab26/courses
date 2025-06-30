const { readData, writeData } = require("./../utils/db.utils");


const getStudents = async (req, res) => {
    try {
        const data = await readData();
        return res.status(200).json({ students: data });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}


const createStudent = async (req, res) => {
    try {
        const students = await readData();
        students.push(req.body);
        await writeData({ data: students });
        return res.status(200).json({
            msg: "successfully created",
            data: req.body
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const getStudentDetails = async (req, res) => {
    try {
        const students = await readData();
        const student = students.filter(student => student.id === req.params.id)[0];
        return res.status(201).json({ student: student });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const updateStudent = async (req, res) => {
    try {
        let id = req.params.id;
        const students = await readData();

        const newStudents = students.map(item => {
            if (item.id === id) {
                // spread operator
                return { ...item, ...req.body }
            }
            return item;
        })

        if (req.body.id) id = req.body.id;

        const student = newStudents.filter(item => item.id === id)[0];
        let result = null;
        if (student) result = await writeData({ data: newStudents });
        if (result) return res.status(200).json({
            student: student,
            msg: "student updated successfully"
        });
        else return res.status(404).send("no data found!")
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        let students = await readData();
        const student = students.filter(item => item.id === id)
        if (student) {
            students = students.filter(item => item.id !== id);
            let result = null;
            result = await writeData({ data: students });
            if (result) {
                return res.status(200).send({
                    msg: "Student successfully"
                })
            } else {
                return res.status(404).send({ error: "Data not found" });
            }
        }
        else return res.status(404).send({ error: "Student not found" });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}


module.exports = {
    getStudents,
    getStudentDetails,
    createStudent,
    updateStudent,
    deleteStudent
}