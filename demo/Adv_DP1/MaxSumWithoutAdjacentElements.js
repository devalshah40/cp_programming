/*
Problem Description

Given a 2 x N grid of integer, A, choose numbers such that the sum of the numbers is maximum and no two chosen numbers are adjacent horizontally, vertically or diagonally, and return it.

Note: You can choose more than 2 numbers.



Problem Constraints

1 <= N <= 20000
1 <= A[i] <= 2000



Input Format

The first and the only argument of input contains a 2d matrix, A.



Output Format

Return an integer, representing the maximum possible sum.



Example Input

Input 1:

 A = [   
        [1]
        [2]    
     ]
Input 2:

 A = [   
        [1, 2, 3, 4]
        [2, 3, 4, 5]    
     ]


Example Output

Output 1:

 2
Output 2:

 8


Example Explanation

Explanation 1:

 We will choose 2.
Explanation 2:

 We will choose 3 and 5.
*/
// 2D arr solution
function adjacent(A) {
  let n = A[0].length;
  let max = -1;

  let i = 0;
  while (true) {
    if (i < n && i <= 1) {
      max = Math.max(max, A[0][i], A[1][i]);
      A[0][i] = max;
      A[1][i] = max;
      i++;
    } else {
      break;
    }
  }
  for (let i = 2; i < n; i++) {
    A[0][i] = Math.max(A[0][i - 2], A[1][i - 2]) + A[0][i];
    A[1][i] = Math.max(A[0][i - 2], A[1][i - 2]) + A[1][i];

    max = Math.max(max, A[0][i - 1], A[1][i - 1], A[0][i], A[1][i]);
    A[0][i] = A[1][i] = max;
  }
  return max;
}

// 1D arr solution
function adjacent1D(A) {
  let n = A[0].length;

  let dp = Array(n);
  if (n >= 1) dp[0] = Math.max(A[0][0], A[1][0]);
  if (n >= 2) dp[1] = Math.max(A[0][1], A[1][1], dp[0]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + A[0][i], dp[i - 2] + A[1][i], dp[i - 1]);
  }
  return dp[n - 1];
}

// SC:- O(1) using variables
function adjacentVariable(A) {
  let n = A[0].length;

  let a, b, c;
  if (n >= 1) a = Math.max(A[0][0], A[1][0]);
  if (n === 1) return a;
  if (n >= 2) b = Math.max(A[0][1], A[1][1], a);
  if (n === 2) return b;

  for (let i = 2; i < n; i++) {
    c = Math.max(a + A[0][i], a + A[1][i], b);
    a = b;
    b = c;
  }
  return c;
}

let A;
A = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
];
// A = [
//   [74, 37, 82, 1],
//   [66, 38, 16, 1],
// ];
// A = [
//   [1, 2],
//   [2, 3],
// ];
// A = [
//   [16, 5, 54, 55],
//   [31, 30, 36, 70],
// ];
A = [
  [2, 6, 6, 1, 16, 6, 15],
  [9, 16, 5, 4, 20, 3, 3],
];
// A = [[28], [10]];
let ans;
// ans = adjacent(A);
// ans = adjacent1D(A);
ans = adjacentVariable(A);

console.log(ans);
