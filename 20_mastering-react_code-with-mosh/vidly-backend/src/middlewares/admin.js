const admin = (req, res, next) => {
    if (process.env.AUTH_STATE === "false") {
        return next();
    }
    if (req.user.isAdmin !== true) {
        return res.status(403).send({ message: "Access denied." });
    }
    return next();
};

module.exports = admin;
