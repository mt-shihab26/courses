const jsonwebtoken = require("jsonwebtoken");
const { UnauthorizedError } = require("./error.util");

const JWT_SECRET_KEY = "secret key";

const token = (payload) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(payload, JWT_SECRET_KEY, (err, token) => {
            if (err) reject(err);
            else resolve(token);
        });
    });
};

const compare = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, JWT_SECRET_KEY, (err, decoded_payload) => {
            if (err) reject(new UnauthorizedError(err.message));
            else resolve(decoded_payload);
        });
    });
};

module.exports = { token, compare };
