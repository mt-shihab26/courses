const Joi = require("joi");

const createStudentSchema = Joi.object({
    name: Joi.string().required().min(6).max(255).messages({
        "string.min": "name must at least 6 letter",
        "string.empty": "name is required, must put the name"
    }),
    age: Joi.number().min(7),
    hobbies: Joi.array().items(Joi.string()).min(1),
})

module.exports = createStudentSchema;