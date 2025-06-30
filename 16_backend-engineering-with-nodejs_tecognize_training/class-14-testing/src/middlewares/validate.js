const validate = (schema, payload) => {
    const result = schema.validate(payload);
    if (result.error) {
        throw new Error(result.error.details[0].message);
    }
    return result.value;
};

module.exports = validate;