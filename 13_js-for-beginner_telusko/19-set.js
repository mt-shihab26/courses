let log = console.log;

let str = new Set("book keeper");
log(str);


let nums = new Set();
nums.add(2);
nums.add(3);
nums.add(3);
nums.add("shihab");
nums.add("mahamud");
nums.add(1);
log(nums);

for (let num of nums) {
    log(num);
}


nums.forEach((value, value2, nums) => {
    log(value, value2, nums);
})


log(nums.has(3));
log(nums.has(100));