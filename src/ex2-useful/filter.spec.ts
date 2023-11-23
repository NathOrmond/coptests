// test harness
import "mocha";
import { expect } from "chai";

// under test
import { namesBeginningWithT, data, expected } from "./filter";

describe("Filter Names with T Test", function () {
  let names: Array<string>;

  this.beforeEach(() => {
    names = namesBeginningWithT(data);
  });

  it("Should get ID's from data", function () {
    expect(names).to.deep.equal(expected);
  });
});
