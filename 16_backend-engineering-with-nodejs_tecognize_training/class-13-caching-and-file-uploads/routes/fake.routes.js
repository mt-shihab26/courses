const { getData } = require("../controllers/fake.controller");
const fakeRouter = require("express").Router();

fakeRouter.route("/")
    .get(getData)

module.exports = fakeRouter;
