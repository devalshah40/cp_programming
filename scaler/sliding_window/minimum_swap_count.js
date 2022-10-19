/*
minimum number of swaps required to take elements together where value <= K
*/
let arr = [19, 11, 3, 9, 7, 25, 6, 20, 4];
let k = 10;

let swapCount = slidingWindowApproach(arr, k);
console.log(swapCount);

//Time complexity :- O(n)
// Space complexity :- O(1)
function slidingWindowApproach(arr, k) {
  let n = arr.length;

  let smallElementsWindow = 0;
  // find small elements count less than k
  for (let i = 0; i < n; i++) {
    if (arr[i] <= k) {
      smallElementsWindow++;
    }
  }
  if (smallElementsWindow === 0 || smallElementsWindow === 1) {
    return 0;
  }
  let start = 0,
    end = smallElementsWindow - 1;

  let swapCount = 0;
  let minimumSwapCount = 0;
  for (let i = start; i <= end; i++) {
    if (arr[i] > k) {
      swapCount++;
    }
  }
  minimumSwapCount = swapCount;

  start++;
  end++;

  while (end < n) {
    if (arr[end] > k) {
      swapCount++;
    }

    if (arr[start - 1] > k) {
      swapCount--;
    }
    // console.log(start, '-', end);
    // console.log(swapCount);
    minimumSwapCount = Math.min(swapCount, minimumSwapCount);
    start++;
    end++;
  }
  // console.log(end);
  return minimumSwapCount;
}
