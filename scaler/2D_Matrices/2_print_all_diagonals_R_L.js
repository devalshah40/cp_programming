/*
  Print all diagonals from R to L
*/
let arr = [
  [4, 3, 1, 7],
  [2, 5, 8, 6],
  [9, 1, 3, 4],
  [1, 5, 8, 6],
  [2, 20, 8, 6],
];

let N = 5,
  M = 4;

for (let k = 0; k < M; k++) {
  let r = 0;
  let c = k;
  while (r < N && c >= 0) {
    console.log(arr[r][c]);
    r++;
    c--;
  }
  console.log();
}

for (let k = 1; k < N; k++) {
  let r = k;
  let c = M - 1;
  while (r < N && c >= 0) {
    console.log(arr[r][c]);
    r++;
    c--;
  }
  console.log();
}

// /*
//   Print all diagonals from R to L
// */
// let arr = [
//   [4, 3, 1, 7],
//   [2, 5, 8, 6],
//   [9, 1, 3, 4],
//   [1, 5, 8, 6],
// ];

// let N = 4;

// let ansArr = [];
// for (let k = 0; k < N; k++) {
//   let r = 0;
//   let c = k;

//   let diagonalArr = Array(N).fill(0);
//   let i = 0;
//   while (r < N && c >= 0) {
//     // console.log(arr[r][c]);
//     diagonalArr[i] = arr[r][c];
//     i++;

//     r++;
//     c--;
//   }
//   ansArr.push(diagonalArr);
// }
// console.table(ansArr);

// for (let k = 1; k < N; k++) {
//   let r = k;
//   let c = N - 1;
//   let diagonalArr = Array(N).fill(0);
//   let i = 0;

//   while (r < N && c >= 0) {
//     // console.log(arr[r][c]);
//     diagonalArr[i] = arr[r][c];
//     i++;

//     r++;
//     c--;
//   }
//   ansArr.push(diagonalArr);
// }
// console.table(ansArr);
