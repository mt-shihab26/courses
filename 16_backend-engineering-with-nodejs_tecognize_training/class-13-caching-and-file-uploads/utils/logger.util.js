const winston = require("winston");
const expressWinston = require("express-winston");

const infoLogger = () => expressWinston.logger({
    level: "info",
    format: winston.format.json(),
    meta: false,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "combined.log" })
    ]
});

const errorLogger = () => expressWinston.errorLogger({
    level: "error",
    format: winston.format.json(),
    meta: true,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ]
})

module.exports = { infoLogger, errorLogger };
