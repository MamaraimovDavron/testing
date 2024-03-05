const descendNumbers = require("./descendNumbers");

test("3 xonali sonni teskari qilib beradigan funksiya", () => {
  expect(descendNumbers(321)).toBe(123);
  expect(descendNumbers(321)).not.toBe(122);
  expect(descendNumbers(111)).toBe(111);
  expect(descendNumbers(444)).toBe(444);
  expect(descendNumbers(555)).toBe(555);
  expect(descendNumbers(666)).toBe(666);
  expect(descendNumbers(425)).not.toBe(524);
  expect(descendNumbers(321)).not.toBe(121);
});

// console.log(descendNumbers(321) == 123);
