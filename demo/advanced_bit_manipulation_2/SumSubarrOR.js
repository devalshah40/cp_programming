/*
Problem Description
You are given an array of integers A of size N.

The value of a subarray is defined as BITWISE OR of all elements in it.

Return the sum of value of all subarrays of A % 109 + 7.



Problem Constraints
1 <= N <= 105

1 <= A[i] <= 108



Input Format
The first argument given is the integer array A.



Output Format
Return the sum of Value of all subarrays of A % 109 + 7.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [7, 8, 9, 10]


Example Output
Output 1:

 71
Output 2:

 110


Example Explanation
Explanation 1:

 Value([1]) = 1
 Value([1, 2]) = 3
 Value([1, 2, 3]) = 3
 Value([1, 2, 3, 4]) = 7
 Value([1, 2, 3, 4, 5]) = 7
 Value([2]) = 2
 Value([2, 3]) = 3
 Value([2, 3, 4]) = 7
 Value([2, 3, 4, 5]) = 7
 Value([3]) = 3
 Value([3, 4]) = 7
 Value([3, 4, 5]) = 7
 Value([4]) = 4
 Value([4, 5]) = 5
 Value([5]) = 5
 Sum of all these values = 71
Explanation 2:

 Sum of value of all subarray is 110.

 */
/*
 // approach taken from subarrays_with_bitwise_or_1.js
  let last = 0;
  let ans = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] == 1) {
      last = i + 1;
    }
    ans += last;
  }
  return ans;
  */
function subArrSumXor(A) {
  let max = Math.max(...A);
  let N = parseInt(Math.log2(max));

  let mod = 1_000_000_007;
  let finalAns = 0;
  for (let j = 0; j <= N; j++) {
    // let subArrayXor = 0;
    let last = 0;
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] & (1 << j)) {
        last = i + 1;
      }
      ans += last;
    }
    // let tempAns = ((r % mod) * (subArrayXor % mod)) % mod;
    let tempAns = ((ans % mod) * ((1 << j) % mod)) % mod;
    finalAns = ((finalAns % mod) + (tempAns % mod)) % mod;
  }
  if (finalAns < 0) {
    finalAns = (finalAns + mod) % mod;
  }
  return finalAns;
}
let A = [1, 2, 3];
let ans = subArrSumXor(A);
console.log(ans);
