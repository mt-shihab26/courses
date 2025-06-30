const processOrder = customer => {
    console.log(`processing order for customer 1`);

    let currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log(`order processed for curstomer 1`);
}

console.log(`take order for customer 1`)
processOrder();
console.log(`completed order for customer 1`);