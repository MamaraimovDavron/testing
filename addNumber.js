const addNumber = (num) => {
  let sum = 0;
  let reminder;
  while (num > 0) {
    reminder = num % 10;
    sum = sum + reminder;
    num = parseInt(num / 10);
  }

  return sum;
};

module.exports = addNumber;
