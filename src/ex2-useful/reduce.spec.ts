// test harness
import "mocha";
import { expect } from "chai";

// under test
import { accumulator, orders, expected } from "./reduce";

describe("Accumulator Reduce Test", function () {
  let total: number;

  this.beforeEach(() => {
    total = accumulator(orders);
  });

  it("Should get ID's from data", function () {
    expect(total).to.deep.equal(expected);
  });
  
});
