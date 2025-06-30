const { createClient } = require("redis");

const redisClient = createClient();

redisClient.on("error", (err) => console.log("Redis not connected\n", err));
redisClient.connect().then(() => console.log("Redis connected successfully"));

const redis = {
    set: ({ key, value }) => redisClient.set(key, value),
    get: ({ key }) => redisClient.get(key),
};

module.exports = redis;