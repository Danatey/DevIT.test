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

let result = array_avg(testData2); // ~265
let result2 = array_avg(testData); // ~420
let result3 = array_avg(testData, true); // ~191+
