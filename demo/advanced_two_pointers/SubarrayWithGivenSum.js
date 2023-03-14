/*
Problem Description
Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

If the answer does not exist return an array with a single element "-1".

First sub-array means the sub-array for which starting index in minimum.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 109
1 <= B <= 109



Input Format
The first argument given is the integer array A.

The second argument given is integer B.



Output Format
Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single element "-1".



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
 B = 5
Input 2:

 A = [5, 10, 20, 100, 105]
 B = 110


Example Output
Output 1:

 [2, 3]
Output 2:

 -1


Example Explanation
Explanation 1:

 [2, 3] sums up to 5.
Explanation 2:

 No subarray sums up to required number.

 */
function solve(A, B) {
  let s = 0;
  let e = 0;
  let sum = A[s];

  while (e < A.length) {
    if (sum === B) {
      return A.slice(s, e + 1);
    } else if (sum < B) {
      e++;
      if (e < A.length) {
        sum += A[e];
      }
    } else {
      sum -= A[s];
      s++;
      if (s === e) {
        e++;
        if (e < A.length) {
          sum += A[e];
        } else {
          e--;
        }
      }
    }
  }
  return -1;
}

// let A = [1, 2, 3, 4, 5];
// let B = 5;
// let A = [5, 10, 20, 100, 105];
// let B = 110;
// let A = [
//   15, 2, 48, 19, 28, 22, 44, 2, 32, 46, 46, 24, 1, 23, 49, 26, 23, 17, 17, 46,
//   4, 30, 40, 36, 20, 5,
// ];
// let B = 82;
let A = [1, 10];
let B = 10;
let ans = solve(A, B);
console.log(ans);
