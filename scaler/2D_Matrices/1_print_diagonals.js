/*
  Print rowwise sum
*/
let arr = [
  [4, 3, 1],
  [2, 5, 8],
  [9, 1, 3],
];

let N = 3;

// L -> R
let i = 0,
  j = 0;
while ((i < N) & (j < N)) {
  console.log(arr[i][j]);
  i++;
  j++;
}

// R -> L
(i = 0), (j = N - 1);
while ((i < N) & (j >= 0)) {
  console.log(arr[i][j]);
  i++;
  j--;
}
