/*
Problem Description
Given an array of positive integers A and an integer B, find and return first continuous subarray
 which adds to B.

If the answer does not exist return an array with a single element "-1".

First sub-array means the sub-array for which starting index in minimum.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 109
1 <= B <= 109



Input Format
The first argument given is the integer array A.

The second argument given is integer B.



Output Format
Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single element "-1".



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
 B = 5
Input 2:

 A = [5, 10, 20, 100, 105]
 B = 110


Example Output
Output 1:

 [2, 3]
Output 2:

 -1


Example Explanation
Explanation 1:

 [2, 3] sums up to 5.
Explanation 2:

 No subarray sums up to required number.
 */

// let arr = [1, 2, 3, 4, 5];
// let requiredSum = 5;
// let arr = [15, 2, 5, 6, 9];
// let requiredSum = 7;
// let arr = [15, 2];
// let requiredSum = 2;

let arr = [15];
let requiredSum = 3;

function findSubArraWithSum(arr, requiredSum) {
  let start = 0;
  let end = 0;
  let curSum = 0;
  for (; end < arr.length; end++) {
    // console.log(start, ' ', end, ' ', curSum);
    if (arr[end] > requiredSum) {
      start++;
    } else {
      curSum += arr[end];
    }
    if (curSum > requiredSum) {
      break;
    } else if (curSum === requiredSum) {
      return arr.slice(start, end + 1);
    }
  }
  // console.log(curSum);
  while (start < arr.length && end < arr.length) {
    // console.log(start, ' ', end);
    if (curSum > requiredSum) {
      curSum -= arr[start];
      start++;
    } else if (curSum < requiredSum) {
      curSum += arr[end + 1];
      end++;
    }
    if (curSum === requiredSum) {
      // console.log(start, ' ', end);
      // console.log(arr.slice(start, end + 1));
      // break;
      return arr.slice(start, end + 1);
    }
  }
  return [-1];
}

/*
We can use 2 pointer technique to solve this problem efficiently.
We can keep pointers left and right.
we move right if our sum is < target.
we move left when sum > target. using left and right, we get our subarray.
*/
function findSubArraWithSumEfficient(A, B) {
  let n = A.length;
  let l = 0,
    r = 0;
  let sum = A[l];
  while (r < n) {
    if (sum == B) {
      // current window sum = B
      return A.slice(l, r + 1);
    } else if (sum < B) {
      // current window sum < B
      r++;
      if (r < n) {
        sum += A[r];
      }
    } else {
      // current window sum > B
      sum -= A[l];
      l++;
      if (l > r && l < n) {
        r++;
        sum += A[r];
      }
    }
  }
  return [-1];
}
// let ans = findSubArraWithSum(arr, requiredSum);
// console.log(ans);

let ans = findSubArraWithSumEfficient(arr, requiredSum);
console.log(ans);
