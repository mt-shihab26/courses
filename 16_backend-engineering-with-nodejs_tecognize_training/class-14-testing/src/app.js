const express = require("express");
const mongoose = require("mongoose");
const { MONGODB_URI, NODE_ENV } = require("./utils/config.util");
const { connectToMongoDB } = require("./utils/db.util");

const app = express();

connectToMongoDB();

require("./middlewares").beforeRoutes(app);
require("./routes")(app);
require("./middlewares").afterRoutes(app);

module.exports = app;
