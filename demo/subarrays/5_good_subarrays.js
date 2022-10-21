/*
Problem Description
Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
Your task is to find the count of good subarrays in A.


Problem Constraints
1 <= len(A) <= 103
1 <= A[i] <= 103
1 <= B <= 107


Input Format
The first argument given is the integer array A.
The second argument given is an integer B.


Output Format
Return the count of good subarrays in A.


Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = 4
Input 2:

A = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9]
B = 65


Example Output
Output 1:
6
Output 2:

36


Example Explanation
Explanation 1:
Even length good subarrays = {1, 2}
Odd length good subarrays = {1, 2, 3}, {1, 2, 3, 4, 5}, {2, 3, 4}, {3, 4, 5}, {5} 

*/
let arr = [1, 2, 3, 4, 5];
let k = 4;
// let arr = [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1];
// let k = 1;

let n = arr.length;

let prefixSum = [arr[0]];
for (let i = 1; i < n; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}
console.log(prefixSum);

let ans = 0;

// //Odd length subarr
// for (let i = 0; i < n; i = i + 2) {
//   let start = 0,
//     end = i;
//   while (end < n) {
//     let currentSum = 0;
//     if (start === end) {
//       currentSum = arr[start];
//     } else {
//       currentSum =
//         start === 0 ? prefixSum[end] : prefixSum[end] - prefixSum[start - 1];
//     }
//     console.log(start, ' ', end, ' ', currentSum);
//     if (currentSum > k) {
//       ans++;
//     }
//     start++;
//     end++;
//   }
// }
// //Even length subarr
// for (let i = 1; i < n; i = i + 2) {
//   let start = 0,
//     end = i;
//   while (end < n) {
//     let currentSum = 0;
//     if (start === end) {
//       currentSum = arr[start];
//     } else {
//       currentSum =
//         start === 0 ? prefixSum[end] : prefixSum[end] - prefixSum[start - 1];
//     }
//     console.log(start, ' ', end, ' ', currentSum);
//     if (currentSum < k) {
//       ans++;
//     }
//     start++;
//     end++;
//   }
// }
/*
0 1 2 3  4
1 2 3 4  5
1 3 6 10 15
*/
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    let sum = prefixSum[j];
    if (i > 0) {
      sum -= prefixSum[i - 1];
    }
    // (j - i + 1) is range between [i,j]
    // even sum
    if (sum < k && (j - i + 1) % 2 == 0) {
      ans++;
    }
    if (sum > k && (j - i + 1) % 2 == 1) {
      ans++;
    }
  }
}
console.log(ans);
