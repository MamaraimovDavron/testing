function descendNumbers(num) {
  return +num
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");
}

module.exports = descendNumbers;
