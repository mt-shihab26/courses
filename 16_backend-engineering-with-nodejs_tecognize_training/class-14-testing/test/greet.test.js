const { greet } = require("./../src/utils/func.util");

describe("greet() function: ", () => {
    it("Welcome message", () => {
        expect(greet("shihab")).toMatch(/shihab/);
    })
});