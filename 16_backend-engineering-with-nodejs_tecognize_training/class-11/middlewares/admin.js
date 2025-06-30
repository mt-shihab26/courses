const admin = (req, res, next) => {
    console.log(req.user.role);
    if (req.user.role !== "admin") {
        return res.status(403).send("Forbidden");
    }
    return next();
}

module.exports = admin;