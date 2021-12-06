import { testData, testData2, testData3, testData4 } from "./data.js";

const findObjectKey = (object, path) => {
  for (const key in object) {
    if (key === path) {
      return object[key];
    }
  }
};

const array_pluck = (array, path) => {
  let newArray = [];

  const pathArray = path.split(".");
  for (let i = 0; i < array.length; i++) {
    let turnPath = 0;
    let element = array[i];
    let findKey = findObjectKey(element, pathArray[turnPath]);
    if (turnPath !== pathArray.length - 1) {
      turnPath++;
      findKey = findObjectKey(findKey, pathArray[turnPath]);
    }
    newArray.push(findKey);
  }
  return newArray;
};

let result = array_pluck(testData3, "name"); // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2 = array_pluck(testData3, "skills.php"); // [0, 5, 8, 6, 0, 0]

// console.log(result);
// console.log(result2);
