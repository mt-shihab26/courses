// 'var' is function scoped
// 'let' and 'const' is block scoped

if (true) {
    var varVariable = "This is var";
    var varVariable = "This is var again";
}

console.log(varVariable);


if (true) {
    let letVariable = "This is let";
    // let letVariable = "This is let again";
    console.log(letVariable);
}

