/*
Problem Description
Given a N * M 2D matrix A. Find the maximum sum sub-matrix from the matrix A. Return the Sum.


Problem Constraints
1 <= N, M <= 300
-104 <= A[i][j] <= 104


Input Format
The first argument is a 2D Integer array A.


Output Format
Return the sum of the maximum sum sub-matrix from matrix A.


Example Input
Input 1:-
    -6 -6
   -29 -8
A =  3 -8
   -15  2
    25 25
    20 -5
Input 2:-
A = -17 -2
     20 10


Example Output
Output 1:-
65
Output 2:-
30


Example Explanation
Explanation 1:-
The submatrix 
25 25
20 -5
has the highest submatrix sum 65.
Explanation 2:-
The submatrix 
20 10
has the highest sub matrix sum 30.
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
