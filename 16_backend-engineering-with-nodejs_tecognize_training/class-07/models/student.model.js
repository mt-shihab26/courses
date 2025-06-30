const { Schema, model } = require('mongoose');

const studentSchema = Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 7 },
    hobbies: {
        type: Array,
        of: String,
        validate: {
            validator: value => value.length > 0,
            message: "There must be at least 1 hobby!",
        }
    }
});

const Student = model('Student', studentSchema);

module.exports.Student = Student;
