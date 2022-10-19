/*
https://www.geeksforgeeks.org/maximum-subarray-sum-modulo-m/

Maximum subarray sum modulo m

Given an array of n elements and an integer m. The task is to find the maximum value of the sum of its subarray modulo m i.e find the sum of each subarray mod m and print the maximum value of this modulo operation.
Examples: 
 

Input : arr[] = { 3, 3, 9, 9, 5 }
        m = 7
Output : 6
All sub-arrays and their value:
{ 9 } => 9%7 = 2
{ 3 } => 3%7 = 3
{ 5 } => 5%7 = 5
{ 9, 5 } => 14%7 = 2
{ 9, 9 } => 18%7 = 4
{ 3, 9 } => 12%7 = 5
{ 3, 3 } => 6%7 = 6
{ 3, 9, 9 } => 21%7 = 0
{ 3, 3, 9 } => 15%7 = 1
{ 9, 9, 5 } => 23%7 = 2
{ 3, 3, 9, 9 } => 24%7 = 3
{ 3, 9, 9, 5 } => 26%7 = 5
{ 3, 3, 9, 9, 5 } => 29%7 = 1

Input : arr[] = {10, 7, 18}
        m = 13
Output : 12
The subarray {7, 18} has maximum sub-array
sum modulo 13.
*/
// let arr = [3, 3, 9, 9, 5];
// let m = 7;
let arr = [1, 2, 3, 4];
let m = 8;
// let arr = [10, 7, 18];
// let m = 13;
let n = arr.length;

let res = maxSubarrayUsingPrefixSum(arr, n, m);
// let res = maxSubarray(arr, n, m);
console.log(res);

// Solution 1
function maxSubarrayUsingPrefixSum(arr, n, m) {
  let prefixSum = new Array(n);

  for (let i = 0; i < n; ++i) {
    if (i === 0) {
      prefixSum[i] = arr[i];
    } else {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(prefixSum[i] + ' ');
  }

  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i == 0) {
        console.log(prefixSum[j]);
        let modVal = prefixSum[j] % m;
        console.log('modVal ', modVal);
        if (modVal > maxSum) {
          maxSum = modVal;
        }
      } else {
        console.log(prefixSum[j] - prefixSum[i - 1]);
        let modVal = (prefixSum[j] - prefixSum[i - 1]) % m;
        console.log('modVal ', modVal);
        if (modVal > maxSum) {
          maxSum = modVal;
        }
      }
    }
  }
  console.log(maxSum);
  return maxSum;
}

// Javascript program to find sub-array
// having maximum sum of elements modulo m.

// Return the maximum sum subarray mod m.
function maxSubarray(arr, n, m) {
  let x = 0;
  let prefix = 0;
  let maxim = 0;
  let S = new Set();
  S.add(0);

  // Traversing the array.
  for (let i = 0; i < n; i++) {
    // Finding prefix sum.
    prefix = (prefix + arr[i]) % m;

    // Finding maximum of prefix sum.
    maxim = Math.max(maxim, prefix);

    // Finding iterator pointing to the first
    // element that is not less than value
    // "prefix + 1", i.e., greater than or
    // equal to this value.
    let it = 0;

    for (let j of S.values()) {
      if (j >= prefix + 1) {
        it = j;
      }
    }
    if (it != 0) {
      maxim = Math.max(maxim, prefix - it + m);
    }

    // adding prefix in the set.
    S.add(prefix);
  }
  return maxim;
}
