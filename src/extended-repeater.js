const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let word = str;
  if (options.repeatTimes == undefined)
    return str + options.addition;
  str = '';
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.separator) {
    options.separator = '+';
  }
  if (options.addition == null)
    options.addition = 'null';
  options.addition = options.addition.toString();
  for (let i = 0; i <= options.repeatTimes - 1; i++) {
    if (options.addition) {
      str += word + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
      if (options.additionSeparator && options.additionRepeatTimes)
        str = str.substring(0, str.length - options.additionSeparator.length);
    }
    else {
      str = str + word;
    }
    str = str + options.separator;
  }
  return str.substring(0, str.length - options.separator.length);
};