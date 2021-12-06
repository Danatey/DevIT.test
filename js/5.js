import { testData, testData2, testData3, testData4 } from "./data.js";

const array_contains = (arr, search) => {
  return arr.some((el) => search.test(el));
};

let result = array_contains(testData4, /^raf.*/i); // true
let result2 = array_contains(testData4, /^azaza.*/i); // false

// console.log(result);
// console.log(result2);
