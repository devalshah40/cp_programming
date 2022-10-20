/*
Problem Description
Given an array of integers A, of size N.

Return the maximum size subarray of A having only non-negative elements. If there are more than one such subarray, return the one having the smallest starting index in A.

NOTE: It is guaranteed that an answer always exists.



Problem Constraints
1 <= N <= 105

-109 <= A[i] <= 109



Input Format
The first and only argument given is the integer array A.



Output Format
Return maximum size subarray of A having only non-negative elements. If there are more than one such subarrays, return the one having earliest starting index in A.



Example Input
Input 1:

 A = [5, 6, -1, 7, 8]
Input 2:

 A = [1, 2, 3, 4, 5, 6]


Example Output
Output 1:

 [5, 6]
Output 2:

 [1, 2, 3, 4, 5, 6]


Example Explanation
Explanation 1:

 There are two subarrays of size 2 having only non-negative elements.
 1. [5, 6]  starting point  = 0
 2. [7, 8]  starting point  = 3
 As starting point of 1 is smaller, return [5, 6]
Explanation 2:

 There is only one subarray of size 6 having only non-negative elements:
 [1, 2, 3, 4, 5, 6]
 */

// let arr = [5, 6, -1, 7, 8];
let arr = [5, 6, -1, 7, 8, -5];
// let arr = [5, 6, -1, 7, 8, 4];
// let arr = [5, 6, -1, 7, 8, 4, -5];
// let arr = [-5, -6, 1, 7, -8, 4, -3, 1, 6, 7];
// let arr = [
//   8986143, -5026827, 5591744, 4058312, 2210051, 5680315, -5251946, -607433,
//   1633303, 2186575,
// ];

function localApproach(arr) {
  let n = arr.length;
  let maxPositiveLength = 0;
  let maxPositiveIndex = 0;
  let currentPositiveLength = 0;

  let i = 0;
  while (i < n) {
    let value = arr[i];
    if (value < 0) {
      if (!maxPositiveLength || currentPositiveLength > maxPositiveLength) {
        maxPositiveLength = currentPositiveLength;
        maxPositiveIndex = i;
      }
      currentPositiveLength = 0;
    } else {
      currentPositiveLength++;
    }
    i++;
  }
  // console.log(maxPositiveIndex, ' ', maxPositiveLength);
  // console.log(i, ' ', currentPositiveLength);
  let ans = [];
  if (i === n && currentPositiveLength > maxPositiveLength) {
    ans = arr.slice(i - currentPositiveLength);
    // console.log('aa ', arr.slice(i - currentPositiveLength));
  } else {
    ans = arr.slice(maxPositiveIndex - maxPositiveLength, maxPositiveIndex);
    console.log(
      arr.slice(maxPositiveIndex - maxPositiveLength, maxPositiveIndex)
    );
  }
  return ans;
}

function scalerApproach(A) {
  let n = A.length;
  let i = 0;
  let max_count = 0,
    st_point = 0;
  while (i < n) {
    if (A[i] >= 0) {
      let temp = 0;
      let tempst = i;
      while (A[i] >= 0 && i < n) {
        i++;
        temp++;
      }
      if (temp > max_count) {
        max_count = temp;
        st_point = tempst;
      }
    } else {
      i++;
    }
  }
  let ans = [];
  for (let j = st_point; j < st_point + max_count; j++) {
    ans.push(A[j]);
  }
  return ans;
}
let ans = scalerApproach(arr);
// let ans = localApproach(arr);
console.log(ans);
