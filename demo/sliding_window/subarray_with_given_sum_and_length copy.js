/*
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
