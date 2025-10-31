/*
Problem Description
Given an array A of N non-negative numbers and a non-negative number B,
you need to find the number of subarrays in A with a sum less than B.
We may assume that there is no overflow.



Problem Constraints
1 <= N <= 103

1 <= A[i] <= 1000

1 <= B <= 107



Input Format
First argument is an integer array A.

Second argument is an integer B.



Output Format
Return an integer denoting the number of subarrays in A having sum less than B.



Example Input
Input 1:

 A = [2, 5, 6]
 B = 10
Input 2:

 A = [1, 11, 2, 3, 15]
 B = 10


Example Output
Output 1:

 4
Output 2:

 4


Example Explanation
Explanation 1:

 The subarrays with sum less than B are {2}, {5}, {6} and {2, 5},
Explanation 2:

 The subarrays with sum less than B are {1}, {2}, {3} and {2, 3}

*/
// let arr = [1, 2, 3, 4, 5];
// let k = 7;
// let arr = [2, 5, 6];
// let k = 10;
let arr = [15, 8, 16];
let k = 242;

let n = arr.length;

let prefixSum = [arr[0]];
for (let i = 1; i < n; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}
console.log(prefixSum);

let ans = 0;
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
    console.log(i, ' ', j, ' ', sum);
    if (sum < k) {
      ans++;
    }
  }
}
console.log(ans);
