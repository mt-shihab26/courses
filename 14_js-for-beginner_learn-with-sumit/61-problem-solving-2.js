// Problem 1 - নিচের sentence এ "Sumit" শব্দটি কয়বার ব্যবহার হয়েছে? প্রথমবার "Sumit" কত নম্বর পজিশনে পাওয়া গেছে?
const sentence = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practiacl manner. If you are just gettin started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit als deep dives into advanced topice using the lattest best practices for you seasoned web developers. sumit";

const matches = sentence.match(/sumit/ig);
console.log(matches != null ? matches.length : 0);

const po = sentence.search(/Sumit/i);
console.log(po);



// Problem 2 - input: linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')
// output: 2 or 'not found!'
// problem: linearSearch() function টি implement করতে হবে।

const linearSearch = (arr, c) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === c) {
            return i;
        }
    }
    return "not found";
};

const indx = linearSearch(['a', 'b', 'c', 'd', 'c'], 'c');
console.log(indx);



// Problem 3 - কোনো Array থেকে কি ভাবে সব থেকে বড় string খুজে বের করবেন এবং তার index নাম্বার দেখাবেন।

const longestString = words => {
    let longestWord = "";
    for (let word of words) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }
    return [longestWord, words.indexOf(longestWord)];
}

const index = longestString(["shihab", "mahamud", "something", "foo", "baa"]);
console.log(index);



// Problem 4 - 1-100 পর্যন্ত কোন সংখ্যা গুলো 3, 5 এবং 3 ও 5 উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন।
const fizzBuzz = (start, end) => {
    let out;
    for (let i = start; i <= end; i++) {
        out = "";
        if (i % 3 === 0) {
            out = "fizz ";
            if (i % 5 === 0) {
                out += "buzz";
            }
        }
        else if (i % 5 === 0) {
            out = "buzz";
        }
        if (out !== "") {
            console.log(i, ":", out);
        }
    }
}

fizzBuzz(1, 100);



// Problem 5 - filter falsely value
const mixedArr = [
    "lws",
    undefined,
    "Learn with Sumit",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "Thanks all",
    NaN
]

const truelyArr = mixedArr.filter(ele => ele)

console.log(truelyArr);



// Problem 6 - filter falsely value from object
const obj = {
    a: "lws",
    b: undefined,
    c: "Learn with Sumit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
}

const filterObject = ob => {
    for (let i in ob) {
        // console.log(i, ob[i]);
        if (!ob[i]) {
            delete ob[i];
        }
    }
    return ob;
}

console.log(filterObject(obj));

