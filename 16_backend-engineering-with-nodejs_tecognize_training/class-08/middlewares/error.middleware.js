const notFoundHandler = (req, res) => {
    return res.status(404).send("Resource Not Found!");
};

const errorHandler = (err, req, res, next) => {
    return res.status(err.status).json({
        name: err.name,
        message: err.message,
    });
};

module.exports = {
    notFoundHandler,
    errorHandler,
};
