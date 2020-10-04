const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let secondsSpeed = 3600 / turnsSpeed;
  let obj = {
    turns: 0,
    seconds: 0,
  };
  obj.turns=Math.pow(2, disksNumber) - 1;
  obj.seconds=Math.floor(secondsSpeed * obj.turns);
  return obj;
};
