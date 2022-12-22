/*
Problem Description

Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.

Find the maximum value of GCD.



Problem Constraints

2 <= N <= 105
1 <= A[i] <= 109



Input Format

First argument is an integer array A.



Output Format

Return an integer denoting the maximum value of GCD.



Example Input

Input 1:

 A = [12, 15, 18]
Input 2:

 A = [5, 15, 30]


Example Output

Output 1:

 6
Output 2:

 15


Example Explanation

Explanation 1:

 
 If you delete 12, gcd will be 3.
 If you delete 15, gcd will be 6.
 If you delete 18, gcd will 3.
 Maximum vallue of gcd is 6.
Explanation 2:

 If you delete 5, gcd will be 15.
 If you delete 15, gcd will be 5.
 If you delete 30, gcd will be 5.

*/
function solve(A) {
  let N = A.length;

  let suffixGCD = Array(N + 1);
  suffixGCD[N] = 0;
  // console.log(suffixGCD);
  for (let i = N - 1; i >= 0; i--) {
    suffixGCD[i] = gcd(A[i], suffixGCD[i + 1]);
  }
  // console.log(suffixGCD);
  let currentGCD = 0;
  let maxGCD = 0;
  for (let i = 0; i < N; i++) {
    // console.log(suffixGCD[i + 1], '---', currentGCD);
    let gcdVal = gcd(suffixGCD[i + 1], currentGCD);
    maxGCD = Math.max(gcdVal, maxGCD);
    currentGCD = gcd(A[i], currentGCD);
  }
  return maxGCD;
}
function gcd(A, B) {
  console.log(A, '---', B);
  if (A === 0) return B;
  return gcd(B % A, A);
}

let A = [12, 15, 18];
// let A = [3, 9, 6, 8, 3];
let ans = solve(A);
console.log(ans);
