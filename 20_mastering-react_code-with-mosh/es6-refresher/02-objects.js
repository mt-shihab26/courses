const person = {
    name: "Shihab",
    walk: function () {
        console.log("Walking... (legacy)");
    },
    walk2: () => {
        console.log("Walking... (fat arrow)");
    },
    walk3() {
        console.log("Walking... (new this)");
    },
};

console.log(person.name);
person.walk();
person.walk2();
person.walk3();

const useName = "name";
console.log(person[useName]);
person["walk"]();
person["walk2"]();
person["walk3"]();
