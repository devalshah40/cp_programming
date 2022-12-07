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
  let N = A.length;
  let M = A[0].length;
  let ans = Number.NEGATIVE_INFINITY;
  for (let start_row = 0; start_row < N; start_row++) {
    let arr = Array(M).fill(0);
    for (let end_row = start_row; end_row < N; end_row++) {
      for (let j = 0; j < M; j++) {
        arr[j] += A[end_row][j];
      }
      ans = Math.max(ans, this.kadane(arr));
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
let A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let ans = maxSumOfAllSubmatrices(A);
console.log(ans);
