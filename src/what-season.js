const CustomError = require("../extensions/custom-error");

module.exports = 	function getSeason(date) {
  if (date==null)
    return 'Unable to determine the time of year!';
  let month = Number(date.toISOString().substring(5, 7));
  switch (month) {
    case 1:
    case 12:
    case 2:
      return 'winter';
      break;
    case 3:
    case 4:
    case 5:
      return 'spring';
      break;
    case 6:
    case 7:
    case 8:
      return 'summer';
      break;
    case 9:
    case 10:
    case 11:
      return 'autumn';
      break;
  }

}