const http = require("http");


const requestListener = (req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.write("hello world");
        res.write("\nthis is root");
        res.end();
    } else if (req.url === "/about" && req.method === "GET") {
        res.write("This is about");
        res.end();
    }
}

const server = http.createServer(requestListener);


server.listen(5000, () => {
    console.log("On 5000");
})