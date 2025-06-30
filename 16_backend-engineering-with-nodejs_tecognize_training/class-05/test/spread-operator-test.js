const arrValue = ["My", "name", "is", "Shihab"];

console.log(arrValue);
console.log(...arrValue);


const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four", "five"];
console.log(arr2);


let arr11 = [1, 2, 3];
let arr22 = arr11;

console.log(arr11);
console.log(arr22);

arr11.push(4);

console.log(arr11);
console.log(arr22);

let arr111 = [1, 2, 3];
let arr222 = [...arr111];

console.log(arr111);
console.log(arr222);

arr111.push(4);

console.log(arr111);
console.log(arr222);



const obj1 = {
    x: 1,
    y: 2,
    z: 5
};

const obj2 = {
    z: 3,
    x: 55
}

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);


// rest parameter
const func = (...args) => {
    console.log(args);
};

func(3);
func(4, 5, 6);


const sum = (x, y, z) => {
    console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];

sum(...num1);