const app = require("../src/app");
const supertest = require("supertest");

const request = supertest(app);

describe("Test 404 not found", () => {
    it("return not found", async () => {
        const response = await request.get("/api/helloworld");
        expect(response.status).toBe(404);
    });

    it("return successful", async () => {
        const response = await request.get("/api/students");
        expect(response.status).toBe(200);
    });
});
