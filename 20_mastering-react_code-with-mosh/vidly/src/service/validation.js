import Joi from "joi-browser";

/**
 * Validate data with Joi scheme,
 * and get row result object of the joi
 * @param {object} data Object that contain actual data
 * @param {object} schema Object that contain Joi schema
 * @param {boolean} abortEarly want abort early give true default value is false
 * @returns {object} return row joi validation result object
 */
const validateWithJoi = (data, schema, abortEarly = false) => {
    const option = { abortEarly: abortEarly };

    const result = Joi.validate(data, schema, option);
    return result;
};

/**
 * Do mapping of state data object key to errorMessage string
 * @param {object} result The row result object of Joi.validate function
 * @returns return key-errorMessage of state data object
 */
const mapJoiErrorToObject = result => {
    if (!result) return null;
    if (!result.error) return null;
    if (!result.error.details) return null;

    const errors = {};

    result.error.details.forEach(item => {
        errors[item.path[0]] = item.message;
    });

    return errors;
};

/**
 * Validate data with given object,
 * get errors object of key-errorMessage pair
 * or get null if data is valid
 * @param {object} data Object that contain actual data
 * @param {object} schema Object that contain Joi schema
 * @returns {object} errors object or null
 */
export const validate = (data, schema) => {
    const result = validateWithJoi(data, schema);
    const errors = mapJoiErrorToObject(result);

    return errors === null ? null : Object.keys(errors).length === 0 ? null : errors;
};

/**
 * Validate one property of state data object
 * get errorMessage as string or empty string for valid data
 * @param {string} name Name of the property data state
 * @param {string} value Value of the property data state
 * @param {object} schema The main Joi schema of the component
 * @param {object} errors The state errors object
 * @returns {string} string of errorMessage for that field or empty string for valid data
 */
export const validateProperty = (name, value, schema, errors) => {
    const object = { [name]: value };
    const schemaProperty = { [name]: schema[name] };

    const result = validateWithJoi(object, schemaProperty, true);
    const returnedErrors = mapJoiErrorToObject(result);

    const errorMessage =
        returnedErrors === null
            ? ""
            : Object.keys(returnedErrors).length === 0
            ? ""
            : returnedErrors[name];

    const errorsTwo = { ...errors };
    errorsTwo[name] = errorMessage;
    return errorsTwo;
};
