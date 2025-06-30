const EventEmitter = require("node:events");

// In frontend
// click, double click, hover are event
// listen => define a function against a event
// emit => trigger a event

const myEmitter = new EventEmitter();
// console.log(myEmitter);

// register
// myEmitter.on("event", () => {
//     console.log("an event has triggered");
// });

// myEmitter.on("event", () => {
//     console.log("In the middle");
// })

myEmitter.on("event", function (a, b) {
    console.log(a, b);
    console.log(this);
});

myEmitter.on("data", function () {
    console.log("data event");
})

// trigger
myEmitter.emit("event", 1, 2);
