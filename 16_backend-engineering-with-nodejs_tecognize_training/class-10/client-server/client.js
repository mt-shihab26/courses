const EventEmitter = require("events");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = new EventEmitter();
const server = require("./server")(client);

server.on("response", (data) => {
    console.log(data);
})

// add, delete, list, help
rl.on("line", command => {
    client.emit("command", command);
})