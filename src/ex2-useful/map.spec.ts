// test harness
import "mocha";
import { expect } from "chai";

// under test
import { getIDs, data, expected} from "./map";

describe("Get ID's map test", function () {

    let ids: Array<number>;

    this.beforeEach(() => {
        ids = getIDs(data);
    });

    it("Should get ID's from data", function () {
        expect(ids).to.deep.equal(expected);
    });
});
