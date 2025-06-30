onmessage = () => {
    console.log("Worker has start working...");

    const last = 10000000000;

    let total = 0;
    for (let i = 0; i < last; i++) {
        total += 1;
    }

    console.log("Worker has finished working...");

    postMessage(total);
};
