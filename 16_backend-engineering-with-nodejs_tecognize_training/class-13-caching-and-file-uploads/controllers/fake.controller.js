const { default: axios } = require("axios");
const redis = require("../services/redis.service");
const { InternalServerError } = require("../utils/error.util");

// http://localhost:8080/api/fakes?ext=photos/3
const getData = async (req, res, next) => {
    try {
        const uri = "https://jsonplaceholder.typicode.com/" + req.query.ext;
        console.log(uri);

        const ext = req.query.ext.replace("/", "_");
        console.log(ext);

        const data = JSON.parse(await redis.get({ key: ext }));
        console.log(data);
        if (data != null) {
            console.log("--- Fetching from redis ---")
            return res.status(200).send(data);
        }

        console.log("After redis");
        const response = await axios.get(uri);
        console.log("--- Fetching from internet ---")

        console.log(response.data);

        await redis.set({ key: ext, value: JSON.stringify(response.data) });

        return res.status(200).send(response.data);
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
}

module.exports = {
    getData,
}