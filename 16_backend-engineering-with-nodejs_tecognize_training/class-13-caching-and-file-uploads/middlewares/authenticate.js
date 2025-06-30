const { UnauthorizedError } = require("../utils/error.util");
const jwt = require("../utils/jwt.util");

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded_payload = await jwt.compare(token);
        req.user = decoded_payload;
        return next();
    } catch (err) {
        return next(new UnauthorizedError(err.message));
    }
};

module.exports = authenticate;
