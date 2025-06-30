const is_even = num => new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve(true);
    else reject(`The number ${num} is odd`);
});


const is_even2 = async (num2) => {
    const res = await is_even(num2);
    return res;
}

is_even2(3)
    .then(res => console.log(res))
    .catch(err => console.log(err));
