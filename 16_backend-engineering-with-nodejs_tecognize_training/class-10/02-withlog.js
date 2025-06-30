const EventEmitter = require("node:events");

class WithLog extends EventEmitter {
    execute(cb) {
        console.log("Before Execution!");
        this.emit("begin");
        cb();
        this.emit("end");
        console.log("After Execution!");
    }
}

const withLog = new WithLog();

withLog.on("end", () => console.log("end with execute"));
withLog.on("begin", () => console.log("About to execute"));

// withLog.execute(() => console.log("---executing task---"));
withLog.execute(() => {
    setImmediate(() => {
        console.log("---executing task---")
    })
});

withLog.emit("begin");

withLog.once("data", () => console.log("This is a data event"));

withLog.emit("data");
withLog.emit("data");
withLog.emit("data");