import { expect } from "chai";

describe("Base Router Tests", () => {
  it("should add numbers correctly", () => {
    const num1 = 2;
    const num2 = 3;
    expect(num1 + num2).to.equal(5);
  });
});
