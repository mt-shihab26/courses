module.exports = (err, req, res, next) => {
    return res.status(err.status).json({
        name: err.name,
        message: err.message,
    });
};
