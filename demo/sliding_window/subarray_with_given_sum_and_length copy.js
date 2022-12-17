/*
Problem Description
Given an array A of length N. Also given are integers B and C.

Return 1 if there exists a subarray with length B having sum C and 0 otherwise



Problem Constraints
1 <= N <= 105

1 <= A[i] <= 104

1 <= B <= N

1 <= C <= 109



Input Format
First argument A is an array of integers.

The remaining arguments B and C are integers



Output Format
Return 1 if such a subarray exist and 0 otherwise


Example Input
Input 1:
A = [4, 3, 2, 6]
B = 2
C = 5
Input 2:

A = [4, 2, 2]
B = 2
C = 8


Example Output
Output 1:
1
Output 2:

0


Example Explanation
Explanation 1:
The subarray [3, 2] is of length 2 and sum 5.
Explanation 2:
There are no such subarray.


Print max subarray sum of length of k.
*/
let arr = [-3, 4, -2, 5, 3, -2, 8, 2, -1, 4];
let k = 2;
let sum = 10;
// let maxSum = prefixSumApproach(arr, k);
let maxSum = slidingWindowApproach(arr, k);
console.log(maxSum);

//Time complexity :- O(n)
// Space complexity :- O(1)
function slidingWindowApproach(arr, k, requiredSum) {
  let n = arr.length;

  let start = 0,
    end = k - 1;

  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    totalSum += arr[i];
  }
  if (totalSum === requiredSum) {
    return 1;
  }

  start++;
  end++;
  while (end < n) {
    totalSum += arr[end];
    totalSum -= arr[start - 1];

    if (totalSum === requiredSum) {
      return 1;
    }
    start++;
    end++;
  }
  return 0;
}

function slidingWindowForLoop(arr, k, requiredSum) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k) {
      sum -= arr[i - k];
    }
    if (sum == requiredSum && i >= k - 1) {
      return 1;
    }
  }
  return 0;
}
