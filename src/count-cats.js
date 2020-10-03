const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats=0;
  for (const elem of matrix.flat()) {
    if (elem=='^^')
      cats++;
  }
  return cats;
};
