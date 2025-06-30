const User = require("../models/user.model");
const crypto = require("../utils/crypto.util");
const jwt = require("../utils/jwt.util");
const { InternalServerError } = require("../utils/error.util");

const createUser = async (req, res, next) => {
    try {
        const body = req.body;
        body.password = await crypto.hash(body.password);

        const user = new User(req.body);
        await user.save();

        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
        };
        const token = await jwt.token(payload);

        res.status(201).json({ token });
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

const loginUser = async (req, res, next) => {
    try {
        const body = req.body;

        const user = await User.findOne({ username: body.username });
        if (!user) throw { status: 404, message: "User not found" };

        const isValidUser = await crypto.compare(body.password, user.password);
        if (!isValidUser) throw { status: 403, message: "login failed" };

        const payload = {
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        };
        const token = await jwt.token(payload);

        res.status(200).json({ msg: "user logged in successfully", token });
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

module.exports = { createUser, loginUser };
