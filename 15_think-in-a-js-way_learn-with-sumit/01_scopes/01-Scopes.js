"use strict";

// parent er dunia

function myFunc() {
    // myFunc/child er dunia
    var x = 10;
    console.log(`${x} from myFunc()`);
    var y = 10;
}

myFunc();



// console.log(window.x);
// console.log(x);
