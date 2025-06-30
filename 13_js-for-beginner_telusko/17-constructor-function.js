function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
    this.info = function () {
        console.log(`${this.name}, ${this.tech}`);
    };
    return this;
}




let px = Alien("Shihab Mahamud", "C/C++, Python, JS");
px.info();

let Alien2 = (name, tech) => {
    this.name = name;
    this.tech = tech;
    this.info = () => `${this.name}, ${this.tech}`;
    return this;
};

let p1 = Alien2("Shihab", "C/C++");
console.log(p1.info());



function Alien3(name, tech) {
    this.name = name;
    this.tech = tech;
    this.info = () => `${this.name}, ${this.tech}`;
}

let p3 = new Alien3("Shihab", "C/C++");
console.log(p3.info());
