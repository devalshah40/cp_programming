/*
  Transpose matrix diagonals way
*/
let arr = [
  [4, 3, 1, 7, 8],
  [2, 5, 8, 6, 9],
  [9, 1, 3, 4, 10],
  [1, 5, 8, 6, 11],
  [1, 5, 8, 6, 12],
];

let N = 5;

for (let k = 0; k < N; k++) {
  let r = 0;
  let c = k;
  // let reverseR = k;
  // let reverseC = 0;
  while (r < c) {
    console.log(arr[r][c]);
    console.log(arr[c][r]);
    [arr[r][c], arr[c][r]] = [arr[c][r], arr[r][c]];
    r++;
    c--;
  }
  console.log();
}

for (let k = 1; k < N; k++) {
  let r = k;
  let c = N - 1;
  while (r < c) {
    console.log(arr[r][c]);
    console.log(arr[c][r]);
    [arr[r][c], arr[c][r]] = [arr[c][r], arr[r][c]];
    r++;
    c--;
  }
  console.log();
}

console.table(arr);
