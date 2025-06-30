const express = require("express");
const { verifyEnv } = require("./../utils/env");
const cors = require("cors");
// const { handleUnhandledRejection, handleUncaughtException } = require("./../utils/logger");

module.exports = app => {
    // process.on("uncaughtException", handleUncaughtException);
    // process.on("unhandledRejection", handleUnhandledRejection);

    // throw new Error("Normal error");

    // const a = Promise.reject("Async error");
    // a.then();

    verifyEnv();
    app.use(cors());
    app.use(express.json());
};
