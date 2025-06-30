const { createUser, loginUser } = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.route("/register")
    .post(createUser);

userRouter.route("/login")
    .post(loginUser);

module.exports = userRouter;
