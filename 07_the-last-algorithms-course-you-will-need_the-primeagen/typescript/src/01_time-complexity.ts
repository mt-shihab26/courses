// O(n)
const sum_char_codes = (str: string): number => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
};

// O(n)
const sum_char_codes2 = (str: string): number => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }

    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }

    return sum;
};

// O(n)
const sum_char_codes3 = (str: string): number => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const char_code = str.charCodeAt(i);
        // Capital E
        if (char_code === 69) {
            return sum;
        }
        sum += char_code;
    }
    return sum;
};

// O(n^2)
const sum_char_codes4 = (str: string): number => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            sum += str.charCodeAt(j);
        }
    }
    return sum;
};

// O(n^3)
const sum_char_codes5 = (str: string): number => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            for (let k = 0; k < str.length; k++) {
                sum += str.charCodeAt(j);
            }
        }
    }
    return sum;
};

const main = () => {
    const s = "hello world";
    const l = console.log;

    l(sum_char_codes(s));
    l(sum_char_codes2(s));
    l(sum_char_codes3(s));
    l(sum_char_codes4(s));
    l(sum_char_codes5(s));
};

main();
