import { testData, testData2, testData3, testData4 } from "./data.js";

const array_find = (array, search) => {
  const result = array.find((el) => el === search);
  return result;
};

let result2 = array_find(testData, "Rafshan"); // ["Rafshan"]
let result = array_find(testData, "/^raf.*/i"); // ["Rafshan"]

// console.log(result);
// console.log(result2);
