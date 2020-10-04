const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let myArr = arr.slice();
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == '--double-next') {
      if (i == myArr.length - 1) {
        myArr.splice(i, 1);
      }
      else {
        myArr[i] = myArr[i + 1];
        i--;
      }
    }
    else if (myArr[i] == '--double-prev') {
      if (i == 0) {
        myArr.splice(i, 1);
      }
      else {
        myArr[i] = myArr[i - 1];
        i--;
      }
    }
    else if (myArr[i] == '--discard-next') {
      if (i == myArr.length - 1) {
        myArr.splice(i, 1);
      }
      else {
        myArr[i] = 'del';
        myArr[i + 1] = 'del';
        i--;
      }
    }
    else if (myArr[i] == '--discard-prev') {
      if (i == 0) {
        myArr.splice(i, 1);
      }
      else {
        myArr[i] = 'del';
        myArr[i - 1] = 'del';
        i--;
      }
    }
  }
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == 'del') {
      myArr.splice(i, 1);
      i--;
    }
  }
  return myArr;
};