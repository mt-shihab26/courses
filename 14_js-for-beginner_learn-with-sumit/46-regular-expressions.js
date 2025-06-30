const text = "Visit W3Schools!";

const res = text.search("W3Schools!");
console.log(res);

const res2 = text.search(/w3Schools/i);
console.log(res2);



const text2 = "Visit Microsoft!";

const res3 = text2.replace("Microsoft", "W3Schools");
console.log(text2, res3);

const res4 = text2.replace(/microsoft/i, "W3Schools");
console.log(text2, res4);



const text3 = "Microsoft won microsoft W3";

const res5 = text3.replace(/microsoft/ig, "W3Schools");
console.log(res5);



const text4 = "\nIs th\nis it?";

const res6 = text4.replace(/is/igm, "good");
console.log(res6);



const text5 = "Is this all there is?";

const res7 = text5.match(/[shaI]/gi);
console.log(res7);



const text6 = "12345534983458";

const res8 = text6.match(/[0-5]/g);
console.log(res8);



const text7 = "re, green, red, green, gren, gr, blue, yellow";

const res9 = text7.match(/(green|red|blue)/g);
console.log(res9);



const text8 = "Give 100%!";
const res10 = text8.match(/\d/g);
console.log(res10);



const text9 = "Hellooo World! Hello W3Schools!";

const res11 = text9.match(/lo+/g);
console.log(res11);

const res12 = text9.match(/lo*/g);
console.log(res12);

const res13 = text9.match(/lo?/g);
console.log(res13);



const pattern = /lo+/;
console.log(pattern, typeof pattern, typeof /lo+/);
let res14 = pattern.test("Hellooo World! Hello W3Schools!")
console.log(res14);

console.log(/e/.test("The best things in life are free!"));
console.log(/e/g.exec("The best things in life are free!"));