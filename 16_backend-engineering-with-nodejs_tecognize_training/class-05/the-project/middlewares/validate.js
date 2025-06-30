const validate = (schema, payload) => {
    const result = schema.validate(payload);
    console.log(result.error);
    if (result.error) {
        throw new Error(result.error.details[0].message);
    }
    return result.value;
};

module.exports = validate;