/*
  Print rowwise sum
*/
let arr = [
  [4, 3, 1, 7],
  [2, 5, 8, 6],
  [9, 1, 3, 4],
];

for (let i = 0; i < arr.length; i++) {
  let rowWiseSum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    rowWiseSum += arr[i][j];
  }
  // console.log(rowWiseSum);
}

let N = 3,
  M = 4;

for (let i = 0; i < M; i++) {
  let columnWiseSum = 0;
  for (let j = 0; j < N; j++) {
    columnWiseSum += arr[j][i];
  }
  console.log(columnWiseSum);
}
