import { expect } from "chai";
import { spy, stub } from "sinon";
import { baseController } from "../../app/controller/base-controller";

describe("Base Controller Tests", () => {
  let res: any, status: any, json: any;
  beforeEach(() => {
    status = stub();
    json = spy();
    res = { status, json };
    status.returns(res);
  });
  it("shouold pass base controller get mapping", async () => {
    const req: any = { body: {}, headers: {} };
    await baseController(req, res, () => {});

    expect(status.calledOnce).to.be.true;
    expect(status.args[0][0]).to.equal(200);
    expect(json.calledOnce).to.be.true;
  });
});
