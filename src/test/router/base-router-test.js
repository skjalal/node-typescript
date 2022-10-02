"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe("Base Router Tests", () => {
    it("should add numbers correctly", () => {
        const num1 = 2;
        const num2 = 3;
        (0, chai_1.expect)(num1 + num2).to.equal(5);
    });
});
