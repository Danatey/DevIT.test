import { testData, testData2, testData3, testData4 } from "./data.js";

const array_unique = (array) => {
  return Array.from(new Set(array));
};

let result = array_unique(testData.concat(testData2)); // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

console.log(result);
