// pure my code (not copy paste)
// that way i test it in func.test.js file.
// just run "yarn test:func"
export const formatSalary = salary => {
    let formatedSalary = "";
    for (let i = salary.length - 1, j = 1; i > 0; i--) {
        formatedSalary = salary[i] + formatedSalary;
        if (j === 3) {
            j = 1;
            formatedSalary = "," + formatedSalary;
        } else {
            j++;
        }
    }
    formatedSalary = salary[0] + formatedSalary;
    return formatedSalary;
};
