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

const array_find = (array, search) => {
  console.log(search);
  const result = array.find((el) => el === search);
  return result;
};

// let result2 = array_find(testData, "Rafshan"); // ["Rafshan"]
// console.log(result2);
let result = array_find(testData, "/^raf.*/i"); // ["Rafshan"]
console.log(result);
