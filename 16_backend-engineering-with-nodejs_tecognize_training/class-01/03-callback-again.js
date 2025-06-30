const doThing = (success, error) => {
    const num = parseInt(Math.random() * 1000);
    if (num % 2 == 0) {
        setTimeout(() => success(num), 1000);
    }
    else {
        setTimeout(() => error(num), 1000);
    }
}

// doThing(num => {
//     console.log("SUCCESS " + num);

// }, num => {
//     console.error("ERROR " + num);
// })


const doThing2 = () => new Promise((resolve, reject) => {
    const num = parseInt(Math.random() * 1000);
    if (num % 2 == 0) {
        setTimeout(() => resolve(num), 0);
    }
    else {
        setTimeout(() => reject(num), 0);
    }
});

// doThing2()
//     .then(num => {
//         console.log("SUCCESS 1st " + num);
//         return doThing2();
//     })
//     .then(num => {
//         console.log("SUCCESS 2nd " + num);
//     })
//     .catch(num => {
//         console.error("Error " + num);
//     })
//     .finally(num => {
//         console.log("Finally I am here! " + num);
//     })

const executeDoThing2 = async () => {
    try {
        const num = await doThing2();
        console.log(`SUCCESS ${num}`);
        const num2 = await doThing2();
        console.log(`2nd ${num} ${num2}`);
        const num3 = await doThing2();
        console.log(`3th ${num} ${num2} ${num3}`);

    } catch (err) {
        console.error(`Error ${err}`);
    } finally {
        console.log(`Finally here`);
    }
}

executeDoThing2();
