import { testData, testData2, testData3, testData4 } from "./data.js";

const normalizeString = (array, shema, transform) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (transform === true) {
      if (typeof array[i] !== "object" && typeof array[i] !== "boolean") {
        element = array[i].toString();
      }
    }
    if (typeof element === shema) {
      newArray.push(element);
    }
  }
  return newArray;
};

const normalizeNumber = (array, shema, transform) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (transform === true) {
      element = Number(array[i]);
    }
    if (typeof element === shema && !Number.isNaN(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const normalizeInt = (array, transform) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (transform === true) {
      element = Number(array[i]);
    }
    if (
      typeof element === "number" &&
      !Number.isNaN(element) &&
      element % parseInt(element) === 0
    ) {
      newArray.push(element);
    }
  }
  return newArray;
};

const normalizeFloat = (array, transform) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (transform === true) {
      element = Number(array[i]);
    }
    if (
      typeof element === "number" &&
      !Number.isNaN(element) &&
      element % parseInt(element) !== 0
    ) {
      newArray.push(element);
    }
  }
  return newArray;
};

const normalizeBool = (array, transform) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (transform === true) {
      element = element > 0;
    }
    if (typeof element === "boolean") {
      newArray.push(element);
    }
  }
  return newArray;
};

const normalizeFunction = (array, shema) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (typeof element === shema) {
      newArray.push(element);
    }
  }
  return newArray;
};

const normalizeArray = (array, transform) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (transform === true) {
      element = [];
      element.push(array[i]);
    }
    if (Array.isArray(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const normalizeObject = (array, shema, transform) => {
  let newArray = [];
  const result = array.find((el) => el === shema);
  if (result) {
    return result;
  }
  const [keySearch] = Object.keys(shema);
  if (transform) {
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      const type = Object.prototype.toString.call(element).slice(8, -1);
      if (type === "Object") {
        for (const key in element) {
          if (key === keySearch) {
            let newObject = {};
            newObject[key] = element[key];
            newArray.push(newObject);
          }
        }
      }
    }
  }

  return newArray;
};

const array_normalize = (array, shema, transform = false) => {
  if (shema === "string") {
    return normalizeString(array, shema, transform);
  } else if (shema === "number") {
    return normalizeNumber(array, shema, transform);
  } else if (shema === "int") {
    return normalizeInt(array, transform);
  } else if (shema === "float") {
    return normalizeFloat(array, transform);
  } else if (shema === "bool") {
    return normalizeBool(array, transform);
  } else if (shema === "function") {
    return normalizeFunction(array, shema);
  } else if (shema === "array") {
    return normalizeArray(array, transform);
  } else if (typeof shema === "object") {
    return normalizeObject(array, shema, transform);
  }
};

let result = array_normalize(testData4, "string"); // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = array_normalize(testData4, "string", true); // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, { age: "float" }); // []
let result4 = array_normalize(testData4, { age: "float" }, true); // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
