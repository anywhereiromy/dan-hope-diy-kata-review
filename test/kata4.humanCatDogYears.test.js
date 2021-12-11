const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns array of three numbers in array for human cats and dog years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    expect(humanCatDogYears(11)).toEqual([11, 60, 69])
    })
})

