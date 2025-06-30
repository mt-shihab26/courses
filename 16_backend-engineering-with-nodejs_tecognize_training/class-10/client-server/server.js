const EventEmitter = require("events");

class Server extends EventEmitter {
    constructor(client) {
        super();
        client.on("command", command => {
            switch (command) {
                case "help":
                case "add":
                case "delete":
                case "ls":
                    this[command]();
                    break;
                default:
                    this.emit("response", "Unknown command");
            }
        });
    }
    add = () => {
        this.emit("response", "add...")
    }
    help = () => {
        this.emit("response", "help...")
    }
    delete = () => {
        this.emit("response", "delete...")
    }
    ls = () => {
        this.emit("response", "ls...")
    }
}

module.exports = (client) => new Server(client);
