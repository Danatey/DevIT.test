import { testData, testData2, testData3, testData4 } from "./data.js";

const array_avg = (array, skipNaN = false) => {
  if (skipNaN) {
    const sum = array
      .filter((num) => typeof num === "number")
      .reduce((acc, value) => acc + value, 0);
    const result = sum / array.length;
    return result;
  } else {
    const arrayFiltred = array.filter((num) => typeof num === "number");
    const sum = arrayFiltred
      .filter((num) => typeof num === "number")
      .reduce((acc, value) => acc + value, 0);
    const result = sum / arrayFiltred.length;
    return result;
  }
};

let result = array_avg(testData2); // ~265
let result2 = array_avg(testData); // ~420
let result3 = array_avg(testData, true); // ~191+

console.log(result);
console.log(result2);
console.log(result3);
