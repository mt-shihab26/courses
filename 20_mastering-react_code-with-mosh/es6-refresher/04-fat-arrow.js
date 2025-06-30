const square = function (number) {
    return number * number;
};
const square2 = (number) => {
    return number * number;
};
const square3 = (number) => number * number;
console.log(square3(5));

const jobs = [
    { id: 1, isActive: true },
    { id: 1, isActive: true },
    { id: 1, isActive: false },
];
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

const person = {
    name: "Shihab",
    walk() {
        setTimeout(() => {
            console.log("this: ", this);
        }, 1000);
    },
};

person.walk();
const walk = person.walk;
walk();
