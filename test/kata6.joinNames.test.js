const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
   expect(
     joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])
      ).toBe('Bart, Lisa & Maggie')
      expect(
       joinNames([{name: 'Lisa'}, {name: 'Maggie'}])
        ).toBe('Lisa & Maggie')
       expect(
          joinNames([{name: 'Bart'}])
          ).toBe('Bart')
          expect(
            joinNames([{name: 'Bart'}, {name: 'Homer',}, {name: 'Lisa'}, {name: 'Maggie'}])
      ).toBe('Bart, Homer, Lisa & Maggie')
  });
});
