const { expect } = require("chai");

describe("Comments", () => {
  it("Testing comments", () => {
    let test = zone_sheet(root, {
      data: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    });

    test.setComments("A3", "New comment");

    expect(test.getComments("A3")).to.eql("New comment");
  });
});
