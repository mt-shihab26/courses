const person = {
    name: "John",
    age: 30,
    city: "New York",
    today: new Date(),
    getAge: function () {
        return this.age;
    }
};

let text = "{";

for (let x in person) {
    text += `${x}: ${person[x]}, `;
}
text = text.slice(0, text.length - 2)
text += "}";


console.log(text);
console.log(Object.values(person));
console.log(JSON.stringify(person));
person.age = person.getAge.toString();
console.log(JSON.stringify(person));



const arr = ["John", "Peter", "Sally", "Jane"];

console.log(JSON.stringify(arr));