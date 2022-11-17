/*
Problem Description
Given an array A of N integers.

Find the length of the longest subarray in the array which sums to zero.


Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109


Input Format
Single argument which is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:

 A = [1, -2, 1, 2]
Input 2:

 A = [3, 2, -1]


Example Output
Output 1:

3
Output 2:

0


Example Explanation
Explanation 1:

 [1, -2, 1] is the largest subarray which sums up to 0.
Explanation 2:

 No subarray sums up to 0.
*/
// let arr = [5, 1, -2, 1, 1, 0, 1, -2];
// let arr = [1, -1, 2, -1, -1];
// let arr = [3, -1, -1, -1, 0];
let arr = [-16, 16, 3];

let n = arr.length;

let windowSize = 0;
let zeroIndexCount = 0;
let currentWindowSize = 0;

let prefixSum = new Array(n);
let map = new Map();
// map.set(0, 0);

for (let i = 0; i < n; ++i) {
  // if (arr[i] === 0) {
  // windowSize++;
  // }

  if (i === 0) {
    prefixSum[i] = arr[i];
  } else {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  let sum = prefixSum[i];

  if (sum === 0 && zeroIndexCount === 0) {
    windowSize = i + 1;
    zeroIndexCount++;
  }
  if (map.has(sum)) {
    let previousIndex = map.get(sum);
    currentWindowSize = i - previousIndex;
    windowSize =
      currentWindowSize > windowSize ? currentWindowSize : windowSize;
  } else {
    map.set(sum, i);
  }
}
console.log(windowSize);
