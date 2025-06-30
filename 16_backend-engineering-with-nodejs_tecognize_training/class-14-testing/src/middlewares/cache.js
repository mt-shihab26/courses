const { InternalServerError } = require("../utils/error.util");
const { log } = require("../utils/log.util");
const redis = require("./../services/redis.service");

const cache = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await redis.get({ key: id });
        log("--- fetching from redis");
        if (data == null) return next();
        return res.status(200).send(JSON.parse(data));
    } catch (err) {
        return next(new InternalServerError(err.message));
    }
};

module.exports = cache;