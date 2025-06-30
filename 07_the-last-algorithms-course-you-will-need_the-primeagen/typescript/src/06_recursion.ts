// simple -> sum of n numbers
const foo = (n: number): number => {
    // base case
    if (n <= 1) {
        return 1;
    }

    // recurse
    return n + foo(n - 1);
};

console.log(foo(0));
console.log(foo(50));

// recurse can broke into there steps
// -> pre
// -> recurse
// -> post
