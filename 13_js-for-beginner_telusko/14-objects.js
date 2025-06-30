let input = "name"

let alien = {
    name: "Shihab Mahamud",
    tech: "C/C++",
    "work exp": 4
};

console.log(alien);

console.log(alien.name);
console.log(alien.tech)

console.log(alien["name"]);
console.log(alien["work exp"]);

console.log(alien[input])


let alien2 = {
    name: "Shihab Mahamud",
    tech: "C/C++",
    laptop: {
        cpu: "i5",
        ram: 8,
        brand: "Avita",
    },
}

console.log(alien2);
console.log(alien2.laptop);
console.log(alien2.laptop.cpu);


console.log(alien2);
delete alien2.laptop;
console.log(alien2);
delete alien2.name;
console.log(alien2);
