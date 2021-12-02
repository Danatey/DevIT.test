import { testData, testData2, testData3, testData4 } from "./data.js";

const array_fill = (length, value) => {
  let newArray = [];

  for (let i = 0; i < length; i++) {
    newArray.push(value);
  }

  return newArray;
};

let result = array_fill(5, "string"); // ['string', 'string', 'string', 'string', 'string']

// console.log(result);
