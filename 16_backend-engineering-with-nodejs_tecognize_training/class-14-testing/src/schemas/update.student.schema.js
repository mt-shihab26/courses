const Joi = require("joi");

const updateStudentSchema = Joi.object({
    name: Joi.string().min(6).max(255).messages({
        "string.min": "name must at least 6 letter",
        "string.empty": "name is required, must put the name"
    }),
    age: Joi.number().min(7),
    hobbies: Joi.array().items(Joi.string()).min(1),
}).min(1).messages({ "object.min": "minimum 1 key provide" });

module.exports = updateStudentSchema;