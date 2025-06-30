const array = [1, 2, 3, 4, 5];

// reduce method reduce the array with single value
const singleValue = array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);

console.log(singleValue);
