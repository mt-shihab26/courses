const processOrder = customer => {
    console.log(`processing order for customer 1`);

    setTimeout(() => {
        console.log("cooking compleated")
    }, 3000)

    console.log(`order processed for curstomer 1`);
}

console.log(`take order for customer 1`)
processOrder();
console.log(`completed order for customer 1`);