const { createUser, loginUser, fileUpload } = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.route("/upload")
    .post(fileUpload)
userRouter.route("/register")
    .post(createUser);

userRouter.route("/login")
    .post(loginUser);

module.exports = userRouter;
