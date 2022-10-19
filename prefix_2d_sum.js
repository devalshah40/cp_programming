// calculating new array
function prefixSum2D(a) {
  let R = a.length;
  let C = a[0].length;

  let psa = new Array(R);
  for (let i = 0; i < R; i++) {
    psa[i] = new Array(C);
    for (let j = 0; j < C; j++) psa[i][j] = 0;
  }

  psa[0][0] = a[0][0];

  // Filling first row and first column
  for (let i = 1; i < C; i++) psa[0][i] = psa[0][i - 1] + a[0][i];
  for (let i = 1; i < R; i++) psa[i][0] = psa[i - 1][0] + a[i][0];

  // updating the values in the
  // cells as per the general formula.
  for (let i = 1; i < R; i++)
    for (let j = 1; j < C; j++)
      // values in the cells of new array
      // are updated
      psa[i][j] = psa[i - 1][j] + psa[i][j - 1] - psa[i - 1][j - 1] + a[i][j];

  // for (let i = 0; i < R; i++) {
  //   for (let j = 0; j < C; j++) console.log(psa[i][j] + ' ');
  //   console.log('<br>');
  // }
  console.table(psa);
  return psa;
}

// driver code
// let a = [
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1],
// ];
let mangoes = [
  [1, 0, 1, 1, 1],
  [0, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [1, 0, 1, 0, 1],
];
console.table(mangoes);
prefixSum2D(mangoes);
