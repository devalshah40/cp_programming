/*
Print max subarray sum of length of k.
*/
let arr = [-3, 4, -2, 5, 3, -2, 8, 2, -1, 4];
let k = 5;
// let maxSum = prefixSumApproach(arr, k);
let maxSum = slidingWindowApproach(arr, k);
console.log(maxSum);

//Time complexity :- O(n2)
// Space complexity :- O(1)
function brutForce(arr, k) {
  let n = arr.length;
  let start = 0,
    end = k - 1;

  let maxSum = 0;
  while (end < n) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += arr[i];
    }
    // console.log(start, '-', end);
    // console.log(sum);
    maxSum = Math.max(sum, maxSum);
    start++;
    end++;
  }
  // console.log(maxSum);
  // console.log(end);
  return maxSum;
}

//Time complexity :- O(n)
// Space complexity :- O(1)
function slidingWindowApproach(arr, k) {
  let n = arr.length;

  let maxSum = 0;
  let start = 0,
    end = k - 1;

  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    totalSum += arr[i];
  }
  maxSum = Math.max(totalSum, maxSum);

  console.log(start, '-', end);
  console.log(totalSum);

  start++;
  end++;
  while (end < n) {
    totalSum += arr[end];
    totalSum -= arr[start - 1];
    maxSum = Math.max(totalSum, maxSum);
    console.log(start, '-', end);
    console.log(totalSum);
    start++;
    end++;
  }
  // console.log(maxSum);
  // console.log(end);
  return maxSum;
}

//Time complexity :- O(n)
// Space complexity :- O(n)
function prefixSumApproach(arr, k) {
  let n = arr.length;

  let prefixSum = Array(n);
  prefixSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  let maxSum = 0;
  let start = 0,
    end = k - 1;
  while (end < n) {
    let sum =
      start === 0 ? prefixSum[end] : prefixSum[end] - prefixSum[start - 1];
    // console.log(start, '-', end);
    // console.log(sum);
    maxSum = Math.max(sum, maxSum);
    start++;
    end++;
  }
  // console.log(maxSum);
  // console.log(end);
  return maxSum;
}
