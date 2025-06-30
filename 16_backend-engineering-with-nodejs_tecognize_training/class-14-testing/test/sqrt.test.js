const { pow } = require("../src/utils/func.util");

describe("pow function: ", () => {
    it("square of positive number", () => {
        expect(pow(2)).toBe(4);
    });

    it("square of negative number", () => {
        expect(pow(-2)).toBe(4);
    });

    it("square of zero number", () => {
        expect(pow(0)).toBe(0);
    });
});
