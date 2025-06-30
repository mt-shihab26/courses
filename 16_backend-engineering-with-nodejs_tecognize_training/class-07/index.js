// CRUD Operations
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const studentRouter = require('./routes/student.routes');
const teacherRouter = require('./routes/teacher.routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/tecognize')
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.error("MongoDB Connection Failed"));

// req, res
// middleware -> callback -> req, res => access, modify
// Request/Response Cycle
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));


app.use('/api/student', studentRouter);
app.use("/api/teacher", teacherRouter)

app.use((req, res) => {
    return res.status(404).send('Resource Not Found!');
});


app.listen(8080, () => {
    console.log('Listening on port 8080!');
});
