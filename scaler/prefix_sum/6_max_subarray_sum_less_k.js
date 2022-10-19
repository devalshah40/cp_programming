/*
https://www.geeksforgeeks.org/maximum-subarray-size-subarrays-size-sum-less-k/

Maximum subarray size, such that all subarrays of that size have sum less than k

Given an array of n positive integers and a positive integer k, the task is to find the maximum subarray size such that all subarrays of that size have the sum of elements less than or equals to k.

Examples : 

Input : arr[] = {1, 2, 3, 4} and k = 8.
Output : 2
Sum of subarrays of size 1: 1, 2, 3, 4.
Sum of subarrays of size 2: 3, 5, 7.
Sum of subarrays of size 3: 6, 9.
Sum of subarrays of size 4: 10.
So, maximum subarray size such that all subarrays of that size have the sum of elements less than 8 is 2.

Input : arr[] = {1, 2, 10, 4} and k = 8.
Output : -1
There is an array element with value greater than k, so subarray sum cannot be less than k.

*/
// let arr = [1, 2, 3, 4];
// let n = arr.length;
// let prefixSum = new Array(n);

// for (let i = 0; i < n; ++i) {
//   if (i === 0) {
//     prefixSum[i] = arr[i];
//   } else {
//     prefixSum[i] = prefixSum[i - 1] + arr[i];
//   }
// }

// // for (let i = 0; i < n; i++) {
// //   console.log(prefixSum[i] + ' ');
// // }

// let k = 8;
// let maxSubArrayCount = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     if (i == 0) {
//       console.log(prefixSum[j]);
//       if (prefixSum[j] > k) {
//         maxSubArrayCount++;
//       }
//     } else {
//       console.log(prefixSum[j] - prefixSum[i - 1]);
//       if (prefixSum[j] - prefixSum[i - 1] > k) {
//         maxSubArrayCount++;
//       }
//     }
//   }
// }
// console.log(maxSubArrayCount);

// javascript program to find maximum
// subarray size, such that all
// subarrays of that size have
// sum less than K.
// Time Complexity: O(n log n), where N represents the size of the given array.
// Auxiliary Space: O(n), where N represents the size of the given array.

// Search for the maximum length
// of required subarray.
function bsearch(prefixsum, n, k) {
  // Initialize result
  let ans = -1;

  // Do Binary Search for largest
  // subarray size
  let left = 1,
    right = n;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    // Check for all subarrays after mid
    let i;
    for (i = mid; i <= n; i++) {
      // Checking if all the subarrays
      // of a size is less than k.
      if (prefixsum[i] - prefixsum[i - mid] > k) {
        break;
      }
    }

    // All subarrays of size mid have
    // sum less than or equal to k
    if (i == n + 1) {
      left = mid + 1;
      ans = mid;
    }

    // We found a subarray of size mid
    // with sum greater than k
    else {
      right = mid - 1;
    }
  }

  return ans;
}

// Return the maximum subarray size, such
// that all subarray of that size have
// sum less than K.
function maxSize(arr, n, k) {
  // Initialize prefix sum array as 0.
  let prefixsum = Array(n + 1).fill(0);

  // Finding prefix sum of the array.
  for (i = 0; i < n; i++) prefixsum[i + 1] = prefixsum[i] + arr[i];

  return bsearch(prefixsum, n, k);
}

// Function to find the
// largest size subarray efficienct approach sliding window
// Time Complexity: O(N), where N represents the size of the given array.
// Auxiliary Space: O(1), no extra space is required, so it is a constant.

function slidingWindow(arr, k, n) {
  // Variable declaration
  let ans = n;
  let sum = 0;
  let start = 0;

  // Loop till N
  for (let end = 0; end < n; end++) {
    // Sliding window from left
    sum += arr[end];

    while (sum > k) {
      // Sliding window from right
      sum -= arr[start];
      start++;

      // Storing sub-array size - 1
      // for which sum was greater than k
      let subArrLength = end - start + 1;
      ans = Math.min(ans, subArrLength);

      // Sum will be 0 if start>end
      // because all elements are positive
      // start>end only when arr[end]>k i.e,
      // there is an array element with
      // value greater than k, so sub-array
      // sum cannot be less than k.
      if (sum == 0) {
        break;
      }
    }
    if (sum == 0) {
      ans = -1;
      break;
    }
  }

  // Print the answer
  console.log(ans);
}

// Driver code
// let arr = [1, 2, 3, 4];
// let k = 8;
let arr = [4, 5, 1, 2, 3, 5];
let k = 10;
let n = arr.length;
// console.log(maxSize(arr, n, k));
console.log(slidingWindow(arr, k, n));
