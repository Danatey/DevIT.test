let arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  "Vasya",
  "|",
  "123",
  9,
  10,
  11,
  12,
  13,
  14,
  15,
];

const showArr = (array) => {
  let turn = 1;
  for (let i = 0; i < array.length; i += 4) {
    let newArray = [arr[i], arr[i + 1], arr[i + 2], arr[i + 3]];
    newArray = newArray.filter((el) => el !== undefined);
    setTimeout(() => {
      console.log(newArray);
    }, (turn + 1) * 2000);
    turn = turn + 1;
  }
};

// showArr(arr);
