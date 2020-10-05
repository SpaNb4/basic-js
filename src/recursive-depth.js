const CustomError = require("../extensions/custom-error");

module.exports =class DepthCalculator {
  calculateDepth(arr, n = 1) {
    if (JSON.stringify(arr.flat()) == JSON.stringify(arr)) {
      return n;
    }
    else {
      arr = arr.flat();
      return this.calculateDepth(arr, n + 1);
    }
  }
};