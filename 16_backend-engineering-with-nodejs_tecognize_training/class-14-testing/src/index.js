const app = require("./app");
const { log } = require("./utils/log.util");

app.listen(8080, () => {
    log("Listening on port 8080!");
});
