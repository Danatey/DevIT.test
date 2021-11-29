import { testData, testData2, testData3, testData4 } from "./data.js";

const array_skip_until = (array, value) => {
  const arrayInd = array.findIndex((el) => el === value);
  if (arrayInd === -1) {
    return [];
  }
  const newArray = array.slice(arrayInd, array.length);
  return newArray;
};

let result = array_skip_until(testData, 2); // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, "Rafshan"); // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, "asd"); // []

// console.log(result);
// console.log(result2);
// console.log(result3);
