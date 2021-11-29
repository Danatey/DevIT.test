import { testData, testData2, testData3, testData4 } from "./data.js";

const array_chunk = (array, count) => {
  let newArray = [];
  for (let i = 0; i < array.length; i += count) {
    newArray.push(array.slice(i, i + count));
  }
  return newArray;
};

let result = array_chunk(testData2, 2); // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]

// console.log(result);
