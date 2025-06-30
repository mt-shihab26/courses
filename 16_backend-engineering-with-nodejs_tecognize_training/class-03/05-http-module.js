const http = require("node:http");

const server = http.createServer((req, res) => {
    res.write("Hello for node http");
    res.end();
});


server.listen(8080);
