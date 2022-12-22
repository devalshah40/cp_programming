/*
Problem Description
Given a row-wise and column-wise sorted matrix A of size N * M.
Return the maximum non-empty submatrix sum of this matrix.


Problem Constraints
1 <= N, M <= 1000
-109 <= A[i][j] <= 109


Input Format
The first argument is a 2D integer array A.


Output Format
Return a single integer that is the maximum non-empty submatrix sum of this matrix.


Example Input
Input 1:-
    -5 -4 -3
A = -1  2  3
     2  2  4
Input 2:-
    1 2 3
A = 4 5 6
    7 8 9


Example Output
Output 1:-
12
Output 2:-
45


Example Explanation
Expanation 1:-
The submatrix with max sum is 
-1 2 3
 2 2 4
 Sum is 12.
Explanation 2:-
The largest submatrix with max sum is 
1 2 3
4 5 6
7 8 9
The sum is 45.

 
*/
function maxSumOfAllSubmatrices(A) {
  let n = A.length;
  let m = A[0].length;

  let suff = Array(n)
    .fill()
    .map(() => Array(m));
  suff[n - 1][m - 1] = A[n - 1][m - 1];
  let ans = suff[n - 1][m - 1];

  for (let j = m - 2; j >= 0; j--) {
    suff[n - 1][j] = suff[n - 1][j + 1] + A[n - 1][j];
    ans = Math.max(ans, suff[n - 1][j]);
  }
  for (let i = n - 2; i >= 0; i--) {
    suff[i][m - 1] = suff[i + 1][m - 1] + A[i][m - 1];
    ans = Math.max(ans, suff[i][m - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
      suff[i][j] =
        A[i][j] + suff[i + 1][j] + suff[i][j + 1] - suff[i + 1][j + 1];
      ans = Math.max(ans, suff[i][j]);
    }
  }
  return ans;
}
function kadane(A) {
  let curSum = 0;
  let ans = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < A.length; i++) {
    curSum += A[i];
    ans = Math.max(curSum, ans);

    if (curSum < 0) {
      curSum = 0;
    }
  }
  return ans;
}
// let A = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

let A = [
  [-5, -4, -3],
  [-1, 2, 3],
  [2, 2, 4],
];

let ans = maxSumOfAllSubmatrices(A);
console.log(ans);
