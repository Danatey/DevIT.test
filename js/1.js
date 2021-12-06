import { testData, testData2, testData3, testData4 } from "./data.js";

const array_find = (array, search) => {
  const newReg = new RegExp(search);
  const result = array.find((el) => newReg.test(el));
  return result;
};

let result = array_find(testData, /^raf.*/i); // ["Rafshan"]
let result2 = array_find(testData, "Rafshan"); // ["Rafshan"]

// console.log(result);
// console.log(result2);
