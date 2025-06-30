class Car {
    constructor(brand) {
        this._carname = brand;
    }
    present() {
        return `I have a ` + this._carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this._model = mod;
    }
    show() {
        return this.present() + ", it a " + this._model;
    }

    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
console.log(myCar.cnam);
myCar.cnam = "fasdfk";
console.log(myCar.cnam);
