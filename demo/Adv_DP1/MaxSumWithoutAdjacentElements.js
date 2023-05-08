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
    max = Math.max(max, A[0][i], A[1][i]);
  }
  return max;
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
let ans = adjacent(A);
console.log(ans);
