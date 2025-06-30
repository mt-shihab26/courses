"use strict";

// const hello = () => "Hello world";

// console.log(hello());


// const hello1 = function () {
//     document.getElementById("demo2").innerHTML += this;
// }

// window.addEventListener("load", hello1);

// document.getElementById("btn").addEventListener("click", hello1);


// Arrow function
// const hello2 = () => {
//     document.getElementById("demo2").innerHTML += this;
// }

// window.addEventListener("load", hello2);

// document.getElementById("btn").addEventListener("click", hello2);


document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("demo2").innerHTML += this;
});
