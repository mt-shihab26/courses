const { compareToken } = require("../utils/jwt");

const auth = async (req, res, next) => {
    if (process.env.AUTH_STATE === "false") {
        return next();
    }
    const token = req.headers["x-auth-token"];
    if (!token) {
        return res.status(401).send({ message: "Access denied. No token found" });
    }
    try {
        const decoded = await compareToken(token);
        req.user = decoded;
    } catch (err) {
        return res.status(400).send({ message: "Invalid token." });
    }
    return next();
};

module.exports = auth;
