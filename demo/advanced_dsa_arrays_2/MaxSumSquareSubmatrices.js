/*
Problem Description
Given a 2D integer matrix A of size N x N, find a B x B submatrix where B<= N and B>= 1, such that the sum of all the elements in the submatrix is maximum.



Problem Constraints
1 <= N <= 103.

1 <= B <= N

-102 <= A[i][j] <= 102.



Input Format
First arguement is an 2D integer matrix A.

Second argument is an integer B.



Output Format
Return a single integer denoting the maximum sum of submatrix of size B x B.



Example Input
Input 1:

 A = [
        [1, 1, 1, 1, 1]
        [2, 2, 2, 2, 2]
        [3, 8, 6, 7, 3]
        [4, 4, 4, 4, 4]
        [5, 5, 5, 5, 5]
     ]
 B = 3
Input 2:

 A = [
        [2, 2]
        [2, 2]
    ]
 B = 2


Example Output
Output 1:

 48
Output 2:

 8


Example Explanation
Explanation 1:

    Maximum sum 3 x 3 matrix is
    8 6 7
    4 4 4
    5 5 5
    Sum = 48
Explanation 2:

 Maximum sum 2 x 2 matrix is
  2 2
  2 2
  Sum = 8

*/
/*
Method 1- Brute Force:
A Simple Solution is to consider all possible sub-squares of size B x B in our input matrix and find the one which has the maximum sum.
Time complexity of above solution is O(N2B2).
This will timeout for the given constraints.


Method 2- Efficient Approach:

The idea is to preprocess the given square matrix. In the preprocessing step, calculate the sum of all vertical strips of size B x 1 in a temporary square matrix stripSum[][].
Once we have the sum of all vertical strips, we can calculate the sum of the first sub-square in a row as the sum of the first B strips in that row, and for the remaining sub-squares, we can calculate the sum in O(1) time by removing the leftmost strip of the previous subsquare and adding the rightmost strip of the new square.
Time complexity of this solution is O(N2).
*/

function maxSumOfAllSqareSubmatrices(A, B) {
  let row = A.length;

  let column = A[0].length;
  let prefixSumArr = Array(row)
    .fill()
    .map(() => Array(column));

  //row wise
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (j > 0) {
        prefixSumArr[i][j] = prefixSumArr[i][j - 1] + A[i][j];
      } else {
        prefixSumArr[i][j] = A[i][j];
      }
    }
  }
  //column wise
  for (let j = 0; j < column; j++) {
    for (let i = 0; i < row; i++) {
      if (i > 0) {
        prefixSumArr[i][j] = prefixSumArr[i - 1][j] + prefixSumArr[i][j];
      } else {
        prefixSumArr[i][j] = prefixSumArr[i][j];
      }
    }
  }

  let ans = Number.NEGATIVE_INFINITY;
  for (let i = B - 1; i < row; i++) {
    for (let j = B - 1; j < column; j++) {
      let a1 = i - B + 1;
      let b1 = j - B + 1;
      let a2 = i;
      let b2 = j;
      let sum = prefixSumArr[a2][b2];
      if (b1 > 0) {
        sum -= prefixSumArr[a2][b1 - 1];
      }
      if (a1 > 0) {
        sum -= prefixSumArr[a1 - 1][b2];
      }
      if (a1 > 0 && b1 > 0) {
        sum += prefixSumArr[a1 - 1][b1 - 1];
      }
      ans = Math.max(ans, sum);
    }
  }
  return ans;
}

function maxSumOfAllSqareSubmatricesEfficient(A, B) {
  function getStripSum(A, B) {
    // let row = A.length;

    // let column = A[0].length;
    // let stripsum = Array(row)
    //   .fill()
    //   .map(() => Array(column));
    let N = A.length;
    let stripsum = [];
    // To store sums of all strips of size B x 1
    for (let i = 0; i < N; i++) {
      let temp = [];
      for (let j = 0; j < N; j++) {
        temp.push(0);
      }
      stripsum.push(temp);
    }
    // Go column by column
    for (let j = 0; j < N; j++) {
      // Calculate sum of first B x 1 rectangle in this column
      let sum = 0;
      for (let i = 0; i < B; i++) sum += A[i][j];
      stripsum[0][j] = sum;

      // Calculate sum of remaining rectangles
      for (let i = 1; i < N - B + 1; i++) {
        sum += A[i + B - 1][j] - A[i - 1][j];
        stripsum[i][j] = sum;
      }
    }
    return stripsum;
  }

  let N = A.length;

  // 1: PREPROCESSING
  let stripsum = getStripSum(A, B);

  console.table(stripsum);
  // max_sum stores maximum sum in matrix
  let max_sum = -100000007;

  // 2: CALCULATE SUM of Sub-Squares using stripSum[][]
  for (let i = 0; i < N - B + 1; i++) {
    // Calculate sum of first subsquare in this row
    let sum = 0;
    for (let j = 0; j < B; j++) sum += stripsum[i][j];
    // Update max_sum
    max_sum = Math.max(max_sum, sum);

    // Calculate sum of remaining squares in current row by removing
    // the leftmost strip of previous sub-square and adding a new strip
    for (let j = 1; j < N - B + 1; j++) {
      sum += stripsum[i][j + B - 1] - stripsum[i][j - 1];
      // Update max_sum
      if (sum > max_sum) max_sum = sum;
    }
  }
  return max_sum;
}
let A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let B = 2;
// let A = [
//   [1, 1, 1, 1, 1],
//   [2, 2, 2, 2, 2],
//   [3, 8, 6, 7, 3],
//   [4, 4, 4, 4, 4],
//   [5, 5, 5, 5, 5],
// ];
// let B = 3;

// let A = [
//   [
//     -50, 73, -34, -56, -41, -8, -61, -47, -76, 54, 10, 45, -51, 86, 13, -26,
//     -78, 68, -82, 87,
//   ],
//   [
//     5, 58, 91, -98, -75, -23, -86, 14, -76, 34, -26, 72, 59, -67, -30, -13, -3,
//     18, 77, 73,
//   ],
//   [
//     -30, 63, -32, 92, 85, 2, -20, -87, -73, -98, -1, 27, -75, 43, 24, -77, 72,
//     -39, 81, -97,
//   ],
//   [
//     -68, 5, 93, 25, -69, -8, 42, -78, -14, -36, 0, 87, 60, -87, 74, -30, 70,
//     -65, -67, 11,
//   ],
//   [
//     60, -4, -33, -15, 50, 40, -6, -5, -76, -81, 25, 76, -6, -42, 2, 71, -34,
//     -22, 93, -49,
//   ],
//   [
//     -16, -82, -36, 19, 52, -100, -13, -40, 26, -90, 57, 70, 15, 76, -73, -57,
//     58, 64, 9, -18,
//   ],
//   [
//     -14, 65, -13, 77, -26, -75, -73, -71, 28, -77, 20, 2, 62, 23, 96, 37, -39,
//     95, 25, -36,
//   ],
//   [
//     -40, -98, 16, -70, 26, -89, 71, -89, 47, 53, 20, 90, 24, 88, 63, 40, -49,
//     -38, -71, 0,
//   ],
//   [
//     13, 58, 78, 65, -93, -23, -100, -42, -61, 3, 60, 57, 24, -23, 8, 13, -13,
//     -99, -50, -40,
//   ],
//   [
//     -72, 93, 84, -95, 40, 11, 4, -65, 56, -28, 50, -77, -15, 56, -84, -74, 57,
//     26, 57, 37,
//   ],
//   [
//     -29, -31, 61, -4, -78, -83, 12, 17, -4, 85, -59, -77, 29, -71, 65, 59, 32,
//     -4, -45, -47,
//   ],
//   [
//     62, 84, 34, -46, 72, -43, 69, 32, 63, -93, -17, 11, -65, -33, -52, -25, 38,
//     -77, 42, 54,
//   ],
//   [
//     11, 41, 75, -41, -75, -79, -30, -74, 34, -95, 83, -50, 98, -21, 1, 93, 34,
//     -63, 34, 56,
//   ],
//   [
//     93, 76, 5, 62, 48, -19, 0, -87, -59, -45, -45, 42, -38, -89, -23, -76, -22,
//     52, -57, -4,
//   ],
//   [
//     -27, -60, 13, -25, -28, -82, -90, -83, 32, 12, -5, 69, -69, -60, -12, -15,
//     -10, -3, 89, 90,
//   ],
//   [
//     45, 53, 14, -49, 40, -56, -42, 35, 59, 92, -95, -36, 81, 3, -71, 75, -92,
//     -8, 97, 49,
//   ],
//   [
//     56, 61, -73, -33, 41, 29, -60, -87, 74, -99, -23, -85, -17, -87, 92, -76,
//     -99, 92, 59, -30,
//   ],
//   [
//     -72, -73, -16, -25, 86, -2, 70, -13, -53, -96, 3, -79, -37, 6, 63, -90, 71,
//     -11, -60, 64,
//   ],
//   [
//     42, -81, 13, 91, 4, -82, -68, 50, -95, 75, 39, 3, -78, -2, -53, 84, -52, 71,
//     -36, 13,
//   ],
//   [
//     -25, 45, 12, 46, -22, 69, -38, 19, 85, -11, 44, -35, 40, -55, 8, 18, -30,
//     -99, 23, 32,
//   ],
// ];
// let B = 13;

// let ans = maxSumOfAllSqareSubmatrices(A, B);
let ans = maxSumOfAllSqareSubmatricesEfficient(A, B);
console.log(ans);
