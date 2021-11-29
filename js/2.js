let testData = [
  1,
  2,
  1990,
  85,
  24,
  "Vasya",
  "colya@example.com",
  "Rafshan",
  "ashan@example.com",
  true,
  false,
];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

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

// console.log(result);
// console.log(result2);
// console.log(result3);
