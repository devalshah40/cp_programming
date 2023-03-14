/*
Problem Description
Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in a 2-D Cartesian plane.

Find and return the number of unordered quadruplet (i, j, k, l) such that (A[i], B[i]), (A[j], B[j]), (A[k], B[k]) and (A[l], B[l]) form a rectangle with the rectangle having all the sides parallel to either x-axis or y-axis.



Problem Constraints
1 <= N <= 2000
0 <= A[i], B[i] <= 109



Input Format
The first argument given is the integer array A.
The second argument given is the integer array B.



Output Format
Return the number of unordered quadruplets that form a rectangle.



Example Input
Input 1:

 A = [1, 1, 2, 2]
 B = [1, 2, 1, 2]
Input 1:

 A = [1, 1, 2, 2, 3, 3]
 B = [1, 2, 1, 2, 1, 2]


Example Output
Output 1:

 1
Output 2:

 3


Example Explanation
Explanation 1:

 All four given points make a rectangle. So, the answer is 1.
Explanation 2:

 3 quadruplets which make a rectangle are: (1, 1), (2, 1), (2, 2), (1, 2)
                                           (1, 1), (3, 1), (3, 2), (1, 2)
                                           (2, 1), (3, 1), (3, 2), (2, 2)
*/
function bruteFroce(A, B) {}

/*
Solution Approach
As mentioned in the hint, run two loops by fixing the two diagonally opposite rectangle ends.

We have fixed the one diagonal of the rectangle and two corner points. From this, we can easily find the other two rectangle points.

Suppose we have two diagonally opposite points: (x1, y1) and (x2, y2). Then the other two points of the rectangle must be (x1, y2) and (x2, y1).

We have to check if these two points (x1, y2) and (x2, y1) are given or not. If present, increment the answer.

We have incremented the answer twice for every rectangle because every rectangle has two diagonals. So, our final answer will be half of the answer obtained after running two loops.
*/

function solve(A, B) {
  let m = new Map();
  // stores all the points
  for (let i = 0; i < A.length; i++) {
    m[[A[i], B[i]]] = (m[[A[i], B[i]]] || 0) + 1;
  }
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      // checks if there exists a rectange such that the i-th and
      // j-th points are the ends of a diagonal
      if (A[i] === A[j] || B[i] === B[j]) {
        continue;
      }
      if ((m[[A[i], B[j]]] || 0) != 0 && (m[[A[j], B[i]]] || 0) != 0) {
        ans = ans + 1;
      }
    }
  }
  let ret = Math.floor(ans / 2);
  return ret;
}
function solve1(A, B) {
  const set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i] + '_' + B[i]);
  }
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < B.length; j++) {
      if (A[i] < A[j] && B[i] > B[j]) {
        const topRight = A[j] + '_' + B[i];
        const bottomLeft = A[i] + '_' + B[j];
        if (set.has(topRight) && set.has(bottomLeft)) {
          count++;
        }
      }
    }
  }
  return count;
}

// let A = [1, 1, 2, 2, 3, 3];
// let B = [1, 2, 1, 2, 1, 2];
let A = [1, 2, 1, 2];
let B = [1, 1, 2, 2];
// let ans = solve(A, B);
let ans = solve1(A, B);
console.log(ans);
