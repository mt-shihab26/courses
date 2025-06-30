const errResponse = (res, err) => {
    const status = err.status || 500;
    const message = err.message || err.message;
    return res.status(status).json({
        message,
    });
};

class GeneralError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = "GeneralError";
        this.status = 400;
    }
}

class BadRequestError extends GeneralError {
    constructor(message) {
        super(message);
        this.name = "BadRequest";
        this.status = 400;
    }
}

class NotFoundError extends GeneralError {
    constructor(message) {
        super(message);
        this.name = "NotFound";
        this.status = 404;
    }
}

class UnauthorizedError extends GeneralError {
    constructor(message) {
        super(message);
        this.name = "Unauthorized";
        this.status = 401;
    }
}

module.exports = {
    GeneralError,
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    errResponse,
};
