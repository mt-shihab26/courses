const worker = new Worker("./worker.js");

const totalButton = document.getElementById("total");
const bgButton = document.getElementById("bg");

totalButton.addEventListener("click", () => {
    console.log("click in total button");

    worker.postMessage("hello worker");
});

worker.onmessage = (ev) => {
    const total = ev.data;
    console.log(`The final total is ${total}`);
};

bgButton.addEventListener("click", () => {
    console.log("click on change color");

    if (document.body.style.background !== "green") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "blue";
    }
});
