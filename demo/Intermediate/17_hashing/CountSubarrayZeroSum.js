/*
Problem Description
Given an array A of N integers.

Find the count of the subarrays in the array which sums to zero. Since the answer can be very large, 
return the remainder on dividing the result with 109+7


Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109


Input Format
Single argument which is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:

 A = [1, -1, -2, 2]
Input 2:

 A = [-1, 2, -1]


Example Output
Output 1:

3
Output 2:

1


Example Explanation
Explanation 1:

 The subarrays with zero sum are [1, -1], [-2, 2] and [1, -1, -2, 2].
Explanation 2:

 The subarray with zero sum is [-1, 2, -1].
*/
let arr = [0, 0, 0];

function solve(arr) {
  let n = arr.length;

  let prefixSum = new Array(n);
  let set = new Set();

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      prefixSum[i] = arr[i];
    } else {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    let sum = prefixSum[i];

    if (sum === 0) {
      count = (count % 1_000_000_007) + 1;
    }

    if (set.has(sum)) {
      count = (count % 1_000_000_007) + 1;
    } else {
      set.add(sum);
    }
  }
  console.log(count);
  return count;
}

function solveCarryForward(arr) {
  let n = arr.length;

  let curSum = 0;
  let set = new Set();

  let count = 0;
  for (let i = 0; i < n; i++) {
    curSum += arr[i];

    if (curSum === 0) {
      count = (count % 1_000_000_007) + 1;
    }

    if (set.has(curSum)) {
      count = (count % 1_000_000_007) + 1;
    } else {
      set.add(curSum);
    }
  }
  console.log(count);
  return count;
}
