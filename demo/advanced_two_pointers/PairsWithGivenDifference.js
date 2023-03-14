/*
Problem Description
Given an one-dimensional integer array A of size N and an integer B.

Count all distinct pairs with difference equal to B.

Here a pair is defined as an integer pair (x, y), where x and y are both numbers in the array and their absolute difference is B.



Problem Constraints
1 <= N <= 104

0 <= A[i], B <= 105



Input Format
First argument is an one-dimensional integer array A of size N.

Second argument is an integer B.



Output Format
Return an integer denoting the count of all distinct pairs with difference equal to B.



Example Input
Input 1:

 A = [1, 5, 3, 4, 2]
 B = 3
Input 2:

 A = [8, 12, 16, 4, 0, 20]
 B = 4
Input 3:

 A = [1, 1, 1, 2, 2]
 B = 0


Example Output
Output 1:

 2
Output 2:

 5
Output 3:

 2


Example Explanation
Explanation 1:

 There are 2 unique pairs with difference 3, the pairs are {1, 4} and {5, 2} 
Explanation 2:

 There are 5 unique pairs with difference 4, the pairs are {0, 4}, {4, 8}, {8, 12}, {12, 16} and {16, 20} 
Explanation 3:

 There are 2 unique pairs with difference 0, the pairs are {1, 1} and {2, 2}.

 */

function solveOnePair(A, B) {
  A.sort((a, b) => a - b);
  let p1 = 0,
    p2 = 1;
  let pairCount = 0;
  while (p2 < A.length) {
    const diff = A[p2] - A[p1];
    if (diff === B) {
      pairCount++;
      p2++;
    } else if (diff > B) {
      p1++;
      if (p1 === p2) {
        p2++;
      }
    } else {
      p2++;
    }
  }
  return pairCount;
}

// Count unique pairs
function solve(A, B) {
  A.sort((a, b) => a - b);
  let p1 = 0,
    p2 = 1;
  let pairCount = 0;
  while (p2 < A.length) {
    const diff = A[p2] - A[p1];
    if (diff === B) {
      pairCount++;
      p2++;
      while (A[p2 - 1] === A[p2]) {
        p2++;
      }
      p1++;
      while (A[p1 - 1] === A[p1]) {
        p1++;
      }
    } else if (diff > B) {
      p1++;
      if (p1 === p2) {
        p2++;
      }
    } else {
      p2++;
    }
  }
  return pairCount;
}

// let A = [1, 2, 4, 5, 9];
// let B = 4;
// let A = [
//   8, 5, 1, 10, 5, 9, 9, 3, 5, 6, 6, 2, 8, 2, 2, 6, 3, 8, 7, 2, 5, 3, 4, 3, 3, 2,
//   7, 9, 6, 8, 7, 2, 9, 10, 3, 8, 10, 6, 5, 4, 2, 3,
// ];
// let B = 3;
let A = [1, 1, 1, 2, 2];
let B = 0;
let ans = solve(A, B);
console.log(ans);
