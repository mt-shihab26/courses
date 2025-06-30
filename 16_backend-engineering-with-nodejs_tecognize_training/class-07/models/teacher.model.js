const { Schema, model } = require('mongoose');

const teacherSchema = Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    date_of_birth: { type: Date },
    joining_date: { type: Date },
    subjects: {
        type: Array,
        of: String,
        validate: {
            validator: value => value.length > 0,
            message: "There must be at least 1 Subject!",
        }
    }
});

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;

// first, last, date of birth, joining date, subject