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

let n = arr.length;
// first transpose it then reverse each row
for (let r = 0; r < n - 1; r++) {
  for (let c = r + 1; c < n; c++) {
    let temp = arr[r][c];
    arr[r][c] = arr[c][r];
    arr[c][r] = temp;
  }
}

for (let r = 0; r < n; r++) {
  let start = 0,
    end = n - 1;
  while (start < end) {
    let temp = arr[r][start];
    arr[r][start] = arr[r][end];
    arr[r][end] = temp;
    start++;
    end--;
  }
}

console.table(arr);
