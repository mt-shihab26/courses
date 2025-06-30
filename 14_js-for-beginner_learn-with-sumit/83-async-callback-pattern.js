let paymantSuccess = true; // 1
let marks = 90; // 2

const enroll = callback => {
    console.log("3 Course enrollment is in progress"); // 3

    const back = () => {
        if (paymantSuccess) {
            callback(); // 6
        }
        else {
            console.log("Paymat failed!");
        }
    }

    setTimeout(back, 2000); // 4
}

const progress = callback => {
    console.log("7 Course on progress..."); // 7

    const back = () => {
        if (marks >= 80) {
            callback(); // 10
        }
        else {
            console.log("10 You could not get enough marks to get  the certificate"); // 10
        }
    }

    setTimeout(back, 3000); // 8
}

const getCertificate = () => {
    console.log("11 Preparing your certificate!"); // 11

    const back = () => {
        console.log("14 Congrats! you got the certificate"); // 14
    }

    setTimeout(back); // 12;
}


enroll(() => {
    progress(() => {
        getCertificate();
        console.log("13 End of line") // 13
    });
    console.log("9 End of line"); // 9
})

console.log("5 End of line"); // 5
