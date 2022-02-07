const secondGreatestNumber = require("./index");

const testCases = [
  [[1, 2, 3, 4, 5], 4],
  [[3, 4, 5, 2, 1], 4],
  [[534, 562, 391, 649, 123, 503, 394, 200], 562],
  [[-5, -4, -7, 0, -1], -1],
];

describe("Get second greatest number from an array", () => {
  for (let i = 0; i < testCases.length; i++) {
    it(`Test #${i + 1}`, () => {
      const testCase = testCases[i];
      expect(secondGreatestNumber(testCase[0])).toEqual(testCase[1]);
    });
  }
});
