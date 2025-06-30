const express = require("express");
const morgan = require("morgan");
// const { infoLogger, errorLogger } = require("./utils/logger.util");
const notFoundHandler = require("./notFoundHandler");
const errorHandler = require("./errorHandler");
const { NODE_ENV } = require("../utils/config.util");

const beforeRoutes = app => {
    // req, res
    // middleware -> callback -> req, res => access, modify
    // Request/Response Cycle
    app.use(express.json());
    app.use(express.static("public"));
    app.use(express.urlencoded({ extended: true }));
    if (NODE_ENV !== "testing") app.use(morgan("dev"))
    // app.use(infoLogger());
};

const afterRoutes = app => {
    // app.use(errorLogger());
    app.use(notFoundHandler);
    app.use(errorHandler);
};

module.exports = {
    beforeRoutes,
    afterRoutes,
};