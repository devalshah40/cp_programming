function numDecodings(A, n, i, j) {
  if (n === 2) {
    if (`${A[i] + A[j]}` <= 26) {
      return 1;
    } else {
      return 0;
    }
  }
  let a = numDecodings(A, n - 1, i + 1, j);
  let b = numDecodings(A, n - 1, i, j - 1);

  // if (a === 0 || b === 0) {
  //   return a + b;
  // } else {
  //   return a * b;
  // }
  return a + b;
  // return numDecodings(A, n - 1, i + 1, j) + numDecodings(A, n - 1, i, j - 1);
}

let A, ans;
// A = '1';
// ans = numDecodings(A, A.length, 0, A.length - 1);
// A = '12';
// ans = numDecodings(A, A.length, 0, A.length - 1);
// A = '123';
// ans = numDecodings(A, A.length, 0, A.length - 1);
// A = '1234';
// ans = numDecodings(A, A.length, 0, A.length - 1);
A = '234';
ans = numDecodings(A, A.length, 0, A.length - 1);

console.log(ans + 1);
/*
1 = 2,3,4
2 => 3,4
4 => 2,3

*/
