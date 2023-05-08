/*
Q2. Fibonacci Number
Solved
Hint bulb icon
Stuck somewhere?
Using hints is now penalty free
Check Now
Problem Description
Given a positive integer A, write a program to find the Ath Fibonacci number.

In a Fibonacci series, each term is the sum of the previous two terms and the first two terms of the series are 0 and 1. i.e. f(0) = 0 and f(1) = 1. Hence, f(2) = 1, f(3) = 2, f(4) = 3 and so on.

NOTE: 0th term is 0. 1th term is 1 and so on.



Problem Constraints
0 <= A <= 44



Input Format
First and only argument is an integer A.



Output Format
Return an integer denoting the Ath Fibonacci number.



Example Input
Input 1:

 A = 4
Input 2:

 A = 6


Example Output
Output 1:

 3
Output 2:

 8


Example Explanation
Explanation 1:

 Terms of Fibonacci series are: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on.
 0th term is 0 So, 4th term of Fibonacci series is 3. 
Explanation 2:

 6th term of Fibonacci series is 8.

 */

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

let n = 5;
let ans;
// ans = fib(n);
console.log(ans);

let dp = Array(n + 1);
//recursion + memoziation
function fibDp(n) {
  if (n <= 1) {
    return n;
  }

  if (!dp[n]) {
    dp[n] = fibDp(n - 1) + fibDp(n - 2);
  }
  return dp[n];
}

// iterative + dp table = tabulisation
function fibDpIterative(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return c;
}

ans = fibDp(n);
console.log(ans);
console.log(dp);
