/*
Problem Description

Given a binary sorted matrix A of size N x N. Find the row with the maximum number of 1.

NOTE:

If two rows have the maximum number of 1 then return the row which has a lower index.
Rows are numbered from top to bottom and columns are numbered from left to right.
Assume 0-based indexing.
Assume each row to be sorted by values.
Expected time complexity is O(rows).


Problem Constraints

1 <= N <= 1000

0 <= A[i] <= 1



Input Format

The only argument given is the integer matrix A.



Output Format

Return the row with the maximum number of 1.



Example Input

Input 1:

 A = [   [0, 1, 1]
         [0, 0, 1]
         [0, 1, 1]   ]
Input 2:

 A = [   [0, 0, 0, 0]
         [0, 1, 1, 1]    ]


Example Output

Output 1:

 0
Output 2:

 1


Example Explanation

Explanation 1:

 Row 0 has maximum number of 1s.
Explanation 2:

 Row 1 has maximum number of 1s.
 */

/*
Solution Approach

 We will start iterating from the top-right of the matrix.
We check for all rows from top to bottom and store the maximum
answer so far.
For every row, we only search from the left of the index of maximum answer so far. 

Time Complexity : O(M + N)
Space Complexity : O(1)

since the matrix is sorted in ascending order we will
transverse first row from last and only if we find a 0 we shall move on
to next row, otherwise check for previous column for the same row.
Basically we will transverse in a stair-case manner!

*/
function maxOnesOptimized(A) {
  let N = A.length;
  let row = 0;
  let col = N - 1;

  let ans = 0;
  while (row < N && col >= 0) {
    if (A[row][col] === 1) {
      ans = row;
      col--;
    } else {
      row++;
    }
  }
  return ans;
}

//Brutforce
function maxOnes(A) {
  let N = A.length;
  let max1s = 0;
  let rowNumber = 0;
  for (let i = 0; i < N; i++) {
    let current1s = 0;
    for (let j = N - 1; j >= 0; j--) {
      if (A[i][j] === 1) {
        current1s++;
      }
    }
    if (current1s > max1s) {
      rowNumber = i;
      max1s = current1s;
    }
  }
  return rowNumber;
}
let A = [
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
let ans = maxOnes(A);
console.log(ans);
