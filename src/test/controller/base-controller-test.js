"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const base_controller_1 = require("../../app/controller/base-controller");
describe("Base Controller Tests", () => {
    let res, status, json;
    beforeEach(() => {
        status = (0, sinon_1.stub)();
        json = (0, sinon_1.spy)();
        res = { status, json };
        status.returns(res);
    });
    it("shouold pass base controller get mapping", async () => {
        const req = { body: {}, headers: {} };
        await (0, base_controller_1.baseController)(req, res, () => { });
        (0, chai_1.expect)(status.calledOnce).to.be.true;
        (0, chai_1.expect)(status.args[0][0]).to.equal(200);
        (0, chai_1.expect)(json.calledOnce).to.be.true;
    });
});
