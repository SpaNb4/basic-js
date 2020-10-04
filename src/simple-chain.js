const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || typeof(position)!='number') {
      this.chain=[];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.chain.length; ++i) {
      str = str + `( ${this.chain[i]} )~~`;
    }
    this.chain=[];
    return str.substring(0, str.length - 2);
  }
};

module.exports = chainMaker;
