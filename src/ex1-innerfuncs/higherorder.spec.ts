// test harness
import "mocha";
import { expect } from "chai";

// under test
import { greaterThanFive, greaterThanTen, unless } from "./higherorder";

describe("Higher Order Function Tests", function () {

    it("Should calculate greater than five", function () {
        expect(greaterThanFive(6)).to.be.true;
        expect(greaterThanFive(5)).to.be.false;
    });

    it("Should calculate greater than ten", function () {
        expect(greaterThanTen(11)).to.be.true;
        expect(greaterThanTen(10)).to.be.false;
    });
});
