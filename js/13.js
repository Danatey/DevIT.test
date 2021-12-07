const { makeModule } = require("./modules/make.modules");

const ConstructorCollection = function () {
  this.make = function (arr) {
    return makeModule(arr);
  };
};
const Collection = new ConstructorCollection();

let numbers = Collection.make([1, 2, 3, 4]);

// console.log(numbers);
