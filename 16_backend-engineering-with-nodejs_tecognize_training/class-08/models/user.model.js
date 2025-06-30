const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String },
    password: { type: String },
});

const User = model("users", userSchema);

module.exports = User;
