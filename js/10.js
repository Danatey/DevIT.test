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
    let element = array[i];

    // let elementPath = pathArray[i];
    // console.log(elementPath);
    // if (pathArray.length > 1) {
    //   for (let i = 0; i < pathArray.length - 1; i++) {
    //     let newObject = element[pathArray[i]];
    //     // let a = findObjectKey(newObject, elementPath);
    //   }
    // }
    newArray.push(element[path]);
  }
  return newArray;
};

let result = array_pluck(testData3, "name"); // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2 = array_pluck(testData3, "skills.php"); // [0, 5, 8, 6, 0, 0]

// console.log(result);
// console.log(result2);
