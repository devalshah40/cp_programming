/*
Q5. Subarray Sum Equals K

Given an array of integers A and an integer B.

Find the total number of subarrays having sum equals to B.


Input Format

The first argument given is the integer array A.
The second argument given is integer B.
Output Format

Return the total number of subarrays having sum equals to B.
Constraints

1 <= length of the array <= 50000
-1000 <= A[i] <= 1000 
For Example

Input 1:
    A = [1, 0, 1]
    B = 1
Output 1:
    4
    Explanation 1:
        [1], [1, 0], [0, 1] and [1] are four subarrays having sum 1.

Input 2:
    A = [0, 0, 0]
    B = 0
Output 2:
    6
 */

// let arr = [1, 2, 3, 4, 5];
// let requiredSum = 5;
// let arr = [15, 2, 5, 6, 9];
// let requiredSum = 7;
// let arr = [15, 2];
// let requiredSum = 2;

// let arr = [1, 0, 1];
// let requiredSum = 1;
// let arr = [
//   -14, -9, 12, 7, -12, -4, 7, 25, -5, 48, 33, -49, 36, -31, -48, 36, 36, 17, 13,
//   -47, -39, 37, -20, 35, 38, 26, -40, -43, 36, -48, -33, -30, 6, -28, 11, 27,
//   22, 18, -21, -11, -50, 34, -21, 44, -25, 17, 34, -12, 14, 26, 30,
// ];
// let requiredSum = 16;
let arr = [1, -1, 1, 2];
// 1, 0 ,1 ,3
let requiredSum = 3;

// function findSubArraWithSum(arr, requiredSum) {
//   let start = 0;
//   let end = 0;
//   let curSum = 0;
//   for (; end < arr.length; end++) {
//     // console.log(start, ' ', end, ' ', curSum);
//     if (arr[end] > requiredSum) {
//       start++;
//     } else {
//       curSum += arr[end];
//     }
//     if (curSum > requiredSum) {
//       break;
//     } else if (curSum === requiredSum) {
//       return arr.slice(start, end + 1);
//     }
//   }
//   // console.log(curSum);
//   while (start < arr.length && end < arr.length) {
//     // console.log(start, ' ', end);
//     if (curSum > requiredSum) {
//       curSum -= arr[start];
//       start++;
//     } else if (curSum < requiredSum) {
//       curSum += arr[end + 1];
//       end++;
//     }
//     if (curSum === requiredSum) {
//       // console.log(start, ' ', end);
//       // console.log(arr.slice(start, end + 1));
//       // break;
//       return arr.slice(start, end + 1);
//     }
//   }
//   return [-1];
// }

/*
We can use 2 pointer technique to solve this problem efficiently.
We can keep pointers left and right.
we move right if our sum is < target.
we move left when sum > target. using left and right, we get our subarray.
*/
function findSubArraWithSumEfficient(A, B) {
  // instead of prefix sum, we can use carry forward currentSum
  let n = A.length;
  let count = 0;

  let prefixSum = [];
  for (let i = 0; i < n; i++) {
    prefixSum[i] = i === 0 ? A[i] : A[i] + prefixSum[i - 1];
  }

  let map = new Map();
  for (let i = 0; i < n; i++) {
    // A[i];
    if (prefixSum[i] === B) {
      count++;
    }
    let requiredVal = prefixSum[i] - B;
    if (map.has(requiredVal)) {
      count += map.get(requiredVal);
    }

    let frequencyVal = map.get(prefixSum[i]);
    if (!frequencyVal) {
      map.set(prefixSum[i], 1);
    } else {
      map.set(prefixSum[i], frequencyVal + 1);
    }
  }
  return count;
}
function findSubArraWithSumCarryForward(A, B) {
  let n = A.length;
  let count = 0;

  let currentSum = 0;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (currentSum === B) {
      count++;
    }
    let requiredVal = currentSum - B;
    if (map.has(requiredVal)) {
      count += map.get(requiredVal);
    }

    let frequencyVal = map.get(currentSum);
    map.set(currentSum, frequencyVal ? frequencyVal + 1 : 1);
  }
  return count;
}
let ans = findSubArraWithSumEfficient(arr, requiredSum);
console.log(ans);
