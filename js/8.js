import { testData, testData2, testData3, testData4 } from "./data.js";

const array_combine = (arrayKeys, arrayValues) => {
  let newObject = {};
  if (arrayKeys > arrayValues) {
    for (let i = 0; i < arrayValues.length; i++) {
      for (let i = 0; i < arrayKeys.length; i++) {
        let newKey = arrayKeys[i];
        if (typeof newKey === "boolean") {
          break;
        }
        newObject[newKey] = arrayValues[i];
      }
    }
  } else {
    for (let i = 0; i < arrayKeys.length; i++) {
      for (let i = 0; i < arrayValues.length; i++) {
        let newKey = arrayKeys[i];
        if (typeof newKey === "boolean") {
          break;
        }
        newObject[newKey] = arrayValues[i];
      }
    }
  }
  return newObject;
};

let result = array_combine(testData, testData2); // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}

// console.log(result);
