const theBigOne = require("./theBigOne");

test("3 ta sondan kattasini topib beruvchi funksiya tuzing", () => {
  expect(theBigOne(3, 2, 1)).toBe(3);
  expect(theBigOne(3, 2, 1)).not.toBe(1);
  expect(theBigOne(3, 2, 1)).not.toBe(6);
  expect(theBigOne(6, 11, 15)).not.toBe(11);
  expect(theBigOne(6, 11, 15)).toBe(15);
});
