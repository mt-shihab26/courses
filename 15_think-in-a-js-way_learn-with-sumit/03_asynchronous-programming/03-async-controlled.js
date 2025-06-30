const takeOrder = (customer, callback) => {
    console.log(`take order for ${customer}`)
    callback()
}

const processOrder = (customer, callback) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log("cooking compleated");
        console.log(`order processed for ${customer}`);
        callback();
    }, 3000)
}

const completedOrder = (customer) => {
    console.log(`completed order for ${customer}`);
}

takeOrder("customer 1", () => {
    processOrder("customer 1", () => {
        completedOrder("customer 1");
    })
})

console.log("non blocking");