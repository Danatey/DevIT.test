const makeModule = function (arr = []) {
  this.array = arr;
  return this.array;
};

module.exports = { makeModule };
