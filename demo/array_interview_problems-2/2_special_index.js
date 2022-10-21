/*
Problem Description
Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Problem Constraints
1 <= n <= 105
-105 <= A[i] <= 105


Input Format
First argument contains an array A of integers of size N


Output Format
Return the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.



Example Input
Input 1:
A=[2, 1, 6, 4]
Input 2:

A=[1, 1, 1]


Example Output
Output 1:
1
Output 2:

3


Example Explanation
Explanation 1:
Removing arr[1] from the array modifies arr[] to { 2, 6, 4 } such that, arr[0] + arr[2] = arr[1]. 
Therefore, the required output is 1. 
Explanation 2:

Removing arr[0] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[1] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Removing arr[2] from the given array modifies arr[] to { 1, 1 } such that arr[0] = arr[1] 
Therefore, the required output is 3.
*/

// let arr = [2, 1, 6, 4];
let arr = [1, 2, 3, 7, 1, 2, 3];
// let arr = [1, 1, 1];
let specialIndexArr = [];
let n = arr.length;

let prefixSumEven = [arr[0]];
for (let i = 1; i < n; i++) {
  const value = arr[i];
  if (i % 2 === 0) {
    prefixSumEven[i] = prefixSumEven[i - 1] + arr[i];
  } else {
    prefixSumEven[i] = prefixSumEven[i - 1];
  }
}
console.log(prefixSumEven);
// 2,2,8,8

let prefixSumOdd = [0];
for (let i = 1; i < n; i++) {
  if (i % 2 !== 0) {
    prefixSumOdd[i] = prefixSumOdd[i - 1] + arr[i];
  } else {
    prefixSumOdd[i] = prefixSumOdd[i - 1];
  }
}
console.log(prefixSumOdd);
// 0,1,1,5

for (let i = 0; i < n; i++) {
  if (i === 0) {
    //calculate oddSum & evenSum
    oddSum = prefixSumEven[n - 1] - prefixSumEven[0];
    evenSum = prefixSumOdd[n - 1] - prefixSumOdd[0];
  } else if (i === n - 1) {
    //calculate oddSum & evenSum
    oddSum = prefixSumOdd[i - 1];
    evenSum = prefixSumEven[i - 1];
  } else {
    oddSum = prefixSumOdd[i - 1] + (prefixSumEven[n - 1] - prefixSumEven[i]);
    evenSum = prefixSumEven[i - 1] + (prefixSumOdd[n - 1] - prefixSumOdd[i]);
  }
  console.log(i, ' ', oddSum, ' ', evenSum);
  if (oddSum === evenSum) {
    specialIndexArr.push(i);
  }
}
console.log(specialIndexArr);
