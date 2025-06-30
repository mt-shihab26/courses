const { createClient } = require("redis");
const { log } = require("../utils/log.util");

const redisClient = createClient();

redisClient.on("error", (err) => log("Redis not connected\n", err));
redisClient.connect().then(() => log("Redis connected successfully"));

const redis = {
    set: ({ key, value }) => redisClient.set(key, value),
    get: ({ key }) => redisClient.get(key),
};

module.exports = redis;