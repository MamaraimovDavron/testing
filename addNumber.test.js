const addNumber = require("./addNumber");

test("Berilgan sonning raqamlarini yi’gindisini hisoblaydingan funksiya tuzing", () => {
  expect(addNumber(346)).toBe(13);
  expect(addNumber(346)).not.toBe(14);
  expect(addNumber(111)).not.toBe(4);
  expect(addNumber(111)).toBe(3);
  expect(addNumber(424)).not.toBe(11);
  expect(addNumber(442)).toBe(10);
  expect(addNumber(315)).not.toBe(8);
  expect(addNumber(315)).toBe(9);
});
