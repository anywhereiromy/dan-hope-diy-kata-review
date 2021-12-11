const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns the stirng Yes when passed as true', () => {

  expect(booleanToWord(true)).toBe('Yes')
  });

  it('returns the string No when passed as false', () => {

    expect(booleanToWord(false)).toBe('No')
  })
});
