const hello = "Hello World";


console.log(hello.length);


const sl = hello.slice(1, 7);
console.log(sl);

const sl2 = hello.slice(-5, -1)
console.log(sl2);

const sl3 = hello.slice(3);
console.log(sl3);

const sl4 = hello.slice(-8);
console.log(sl3);


const sub = hello.substring(1, 7);
console.log(sub);


const substr = hello.substr(1, 3);
console.log(substr);


const rep = hello.replace("Hello", "hel");
console.log(rep);


console.log(hello.toUpperCase());


console.log(hello.toLowerCase());


console.log(hello.concat("-", hello));


console.log("         hello world           ".trim());


console.log(hello.charAt(2), hello[2], hello.charCodeAt(2));


console.log(hello.charAt(500), hello[500]);


console.log(hello.split(" "));