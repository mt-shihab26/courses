const fs = require("node:fs/promises");
const EventEmitter = require("node:events");

class WithLog extends EventEmitter {
    async execute(asyncCb, ...args) {
        console.time("execute");
        this.emit("begin");
        // asyncCb(...args, (err, data) => {
        //     if (err) return this.emit("error", err);
        //     this.emit("data", data);
        //     console.timeEnd("execute");
        //     this.emit("end");
        // })
        try {
            const data = await asyncCb(...args);
            this.emit("data", data);
            console.timeEnd("execute");
            this.emit("end");
        } catch (err) {
            this.emit("error");
        }
    }
}

const withLog = new WithLog();

withLog.on("begin", () => console.log("About to execute"));
withLog.on("end", () => console.log("Done with execution!"));
withLog.on("data", data => console.log(`Length: ${data.length}`));
// withLog.on("error", err => {
//     console.log(err);
//     // process.exit(1);
// });

process.on("uncaughtException", err => {
    console.log(err);
})

// withLog.execute(fs.readFile, "");
withLog.execute(fs.readFile, "./sample.txt");