const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direct = direct;
  }

  encrypt(text, key) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    let l = 0;
    if (text.length > key.length) {
      while (key.length != text.length) {
        key = key + key[l];
        l++;
      }
    }
    let res = '';
    let space = false;
    let n = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] != ' ') {
        if (/^[A-Z]+$/.test(text[i])) {
          res += this.alphabet.charAt((text[i].charCodeAt() + (key[i - n].charCodeAt())) % this.alphabet.length);
        }
        else {
          res += text[i];
        }
      }
      else {
        space = true;
        n++;
        i++;
        if (text[i + 1] != ' ') {
          if (/^[A-Z]+$/.test(text[i + 1])) {
            res += ' ' + this.alphabet.charAt((text[i].charCodeAt() + (key[i - n].charCodeAt())) % this.alphabet.length);
          }
          else {
            res += ' ' + text[i];
          }
        }
        else {
          res += ' ';
        }
      }
    }
    if (this.direct) {
      return res;
    }
    else {
      return res.split("").reverse().join("");
    }
  }

  decrypt(text, key) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    let l = 0;
    if (text.length > key.length) {
      while (key.length != text.length) {
        key = key + key[l];
        l++;
      }
    }
    let res = '';
    let space = false;
    let n = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] != ' ') {
        if (/^[A-Z]+$/.test(text[i])) {
          res += this.alphabet.charAt((text[i].charCodeAt() - (key[i - n].charCodeAt() - this.alphabet.length)) % this.alphabet.length);
        }
        else {
          res += text[i];
        }
      }
      else {
        space = true;
        n++;
        i++;
        if (text[i + 1] != ' ') {
          if (/^[A-Z]+$/.test(text[i + 1])) {
            res += ' ' + this.alphabet.charAt((text[i].charCodeAt() - (key[i - n].charCodeAt() - this.alphabet.length)) % this.alphabet.length);
          }
          else {
            res += ' ' + text[i];
          }
        }
        else {
          res += ' ';
        }
      }
    }
    if (this.direct) {
      return res;
    }
    else {
      return res.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
