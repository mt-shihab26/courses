const mongoose = require("mongoose");
const { MONGODB_URI, NODE_ENV } = require("./config.util");
const { log } = require("./log.util");

const connectToMongoDB = () => {
    mongoose
        .connect(MONGODB_URI)
        .then(() => log("Connected to MongoDB!"))
        .catch((err) => log("MongoDB Connection Failed"));

};

module.exports = {
    connectToMongoDB,
}