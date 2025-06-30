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
        this.name = "Bad Request";
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

class InternalServerError extends GeneralError {
    constructor(message) {
        super(message);
        this.name = "Internal Server Error";
        this.status = 500;
    }
}

module.exports = {
    GeneralError,
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
    InternalServerError
};
