/*
Q1. Stairs
Unsolved
Hint bulb icon
Stuck somewhere?
Using hints is now penalty free
Check Now
Problem Description
You are climbing a staircase and it takes A steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Return the number of distinct ways modulo 1000000007



Problem Constraints
1 <= A <= 105



Input Format
The first and the only argument contains an integer A, the number of steps.



Output Format
Return an integer, representing the number of ways to reach the top.



Example Input
Input 1:

 A = 2
Input 2:

 A = 3


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Distinct ways to reach top: [1, 1], [2].
Explanation 2:

 Distinct ways to reach top: [1 1 1], [1 2], [2 1].
 */
/*
Hint 1
Think of DP.

You need to come up with O(n) solution.
*/

/*
Solution Approach
This is the most basic dynamic programming problem.
We know that we can take 1 or 2 step at a time. So, to take n steps,
we must have arrived at it immediately from (n-1) or (n-2) step.
If we knew the number of ways to reach (n-1) and (n-2) step,
our answer would be the summation of their number of ways.

Time Complexity : O(n)

BONUS: Can you come up with O(logn) solution?
*/

function climbStairs(n) {
  let dp = Array(n + 1);

  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

function climbStairsDpIterativeSpace(n) {
  let dp = Array(n + 1);

  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
