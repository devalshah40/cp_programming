/*
  Print all diagonals from R to L
*/
let arr = [
  [4, 3, 1, 7, 8],
  [2, 5, 8, 6, 9],
  [9, 1, 3, 4, 10],
  [1, 5, 8, 6, 11],
];

let N = arr.length;
let M = arr[0].length;

let transposeArr = [];

for (let i = 0; i < M; i++) {
  let tempArr = [];
  for (let j = 0; j < N; j++) {
    tempArr.push(arr[j][i]);
  }
  transposeArr.push(tempArr);
}

console.table(transposeArr);
