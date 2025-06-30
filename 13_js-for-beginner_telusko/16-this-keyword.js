let laptop1 = {
    cpu: "5",
    ram: "8",
    compare: function(other) {
        return this.cpu > other.cpu;
    }
}

let laptop2 = {
    cpu: "7",
    ram: "8",
    compare: function(other) {
        return this.cpu > other.cpu;
    }
}

console.log(laptop1.compare(laptop2));
console.log(laptop2.compare(laptop1));
