/*
Problem Description
Given an array of positive integers A, two integers appear only once, and all the other integers appear twice.
Find the two integers that appear only once.

Note: Return the two numbers in ascending order.


Problem Constraints
2 <= |A| <= 100000
1 <= A[i] <= 109



Input Format
The first argument is an array of integers of size N.



Output Format
Return an array of two integers that appear only once.



Example Input
Input 1:
A = [1, 2, 3, 1, 2, 4]
Input 2:

A = [1, 2]


Example Output
Output 1:
[3, 4]
Output 2:

[1, 2]


Example Explanation
Explanation 1:
3 and 4 appear only once.
Explanation 2:

1 and 2 appear only once.
*/
function missingTwoNumbers(A) {
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    ans ^= A[i];
  }

  let maxBitLength = parseInt(Math.log2(ans));
  let setBitPosition = 0;
  for (let i = 0; i <= maxBitLength; i++) {
    if (ans & (1 << i)) {
      setBitPosition = i;
      break;
    }
  }

  let s1 = 0;
  let s2 = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] & (1 << setBitPosition)) {
      s1 = s1 ^ A[i];
    } else {
      s2 = s2 ^ A[i];
    }
  }
  return [s1, s2];
}

// let A = [1, 2, 3, 1, 2, 4];
let A = [770, 290, 609, 373, 478, 174, 290, 478, 609, 373, 71, 174];
let ans = missingTwoNumbers(A);
console.log(ans);
