const { NODE_ENV } = require("./config.util")

const log = (message) => {
    if (NODE_ENV !== "testing") {
        console.log(message);
    }
};

module.exports = {
    log
}