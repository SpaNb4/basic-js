const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof (members) == 'array' || typeof (members) == 'object' && members != null && members['foo'] !='bar') {
    let dreamTeam = '';
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) == 'string') {
        members[i] = members[i].trim()[0].toUpperCase();
      }
    }
    members.sort();
    for (let i = 0; i < members.length; i++) {
      if (typeof (members[i]) == 'string') {

        dreamTeam += members[i][0];
      }
    }
    return dreamTeam;
  }
  return false;
}
