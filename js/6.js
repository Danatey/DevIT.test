import { testData, testData2, testData3, testData4 } from "./data.js";

const array_get = (array, path) => {
  console.log(array[path]);
};
let result = array_get(testData4, "[5].name"); // "Rafshan"
let result2 = array_get(testData4, "[17][0][0][0][11][0]"); // {name: "Rafshan", email: "rafshan@example.com", age: 11}
let result3 = array_get(testData4, "[17][0][0][0][11][0][name]"); // "Rafshan"
