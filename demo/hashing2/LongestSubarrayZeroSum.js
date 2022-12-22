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

/*
Approach:

There are two steps:
1. Create cumulative sum array where ith index in this array represents total sum from 1 to ith index element.
2. Iterate all elements of cumulative sum array and use hashing to find two elements where value at ith index == value at jth index but i != j.
3. IF element is not present in hash in fill hash table with current element.


Time Complexity : O(N)
Space Complexity : O(N)

*/
function currentApproach(arr) {
  let n = arr.length;
  let windowSize = 0;
  let zeroIndexCount = 0;
  let currentWindowSize = 0;

  let prefixSum = new Array(n);
  let map = new Map();
  map.set(0, -1);

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

    // this condition is for 1st 0 sum like [16, -16] but its not required as I have added map.set(0, -1); in declaration.
    // if (sum === 0 && zeroIndexCount === 0) {
    //   windowSize = i + 1;
    //   zeroIndexCount++;
    // }

    if (map.has(sum)) {
      let previousIndex = map.get(sum);
      currentWindowSize = i - previousIndex;
      windowSize = Math.max(currentWindowSize, windowSize);
    } else {
      map.set(sum, i);
    }
  }
  return windowSize;
}

function currentApproachWithoutPrefixSum(arr) {
  let n = arr.length;
  let windowSize = 0;
  let currentWindowSize = 0;

  let currentSum = 0;
  let map = new Map();
  map.set(0, -1);

  for (let i = 0; i < n; ++i) {
    if (i === 0) {
      currentSum = arr[i];
    } else {
      currentSum = currentSum + arr[i];
    }

    if (map.has(currentSum)) {
      let previousIndex = map.get(currentSum);
      currentWindowSize = i - previousIndex;
      windowSize = Math.max(currentWindowSize, windowSize);
    } else {
      map.set(currentSum, i);
    }
  }
  return windowSize;
}
// let windowSize = currentApproach(arr);
let windowSize = currentApproachWithoutPrefixSum(arr);
console.log(windowSize);
