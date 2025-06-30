const john = new String("John");

String.prototype.doingFun = function () {
    return `I am doing ${this}`;
}

console.log(john.doingFun())

const x = "Bangladesh";

console.log(x.doingFun());