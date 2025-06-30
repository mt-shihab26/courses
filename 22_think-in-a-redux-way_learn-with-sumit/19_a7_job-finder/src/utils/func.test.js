import { formatSalary } from "./func.js";

const formatSalaryTestCases = [
    { salary: "50000", expected: "50,000" },
    { salary: "123456789", expected: "123,456,789" },
    { salary: "1000000", expected: "1,000,000" },
    { salary: "99999", expected: "99,999" },
    { salary: "1234", expected: "1,234" },
    { salary: "123", expected: "123" },
    { salary: "12", expected: "12" },
    { salary: "1", expected: "1" },
];

formatSalaryTestCases.forEach(({ salary, expected }) => {
    const actual = formatSalary(salary);
    if (actual === expected) {
        console.log(
            "\x1b[32m%s\x1b[0m",
            `PASS: formatSalary("${salary}") returned "${actual}"`
        );
    } else {
        console.log(
            "\x1b[31m%s\x1b[0m",
            `FAIL: formatSalary("${salary}") returned "${actual}", expected "${expected}"`
        );
    }
});
