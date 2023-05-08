/*
Q3. Minimum Number of Squares

Problem Description
Given an integer A. Return minimum count of numbers, sum of whose squares is equal to A.



Problem Constraints
1 <= A <= 105



Input Format
First and only argument is an integer A.



Output Format
Return an integer denoting the minimum count.



Example Input
Input 1:

 A = 6
Input 2:

 A = 5


Example Output
Output 1:

 3
Output 2:

 2


Example Explanation
Explanation 1:

 Possible combinations are : (12 + 12 + 12 + 12 + 12 + 12) and (12 + 12 + 22).
 Minimum count of numbers, sum of whose squares is 6 is 3. 
Explanation 2:

 We can represent 5 using only 2 numbers i.e. 12 + 22 = 5
 */
/*
Hint 1
Don’t be greedy. Think of optimality with every possibility.

Take an example with N=12.
*/

/*
Solution Approach
It is always possible to represent a number N as sum of squares i.e.(1^1+1^1+1^1+…..+1^1, N times).
For optimality idea is simple take list of all perfect square numbers ≤ N(i.e. 1,4,9,16….). Now identify from which number we have to make a direct jump to N so that the required answer is minimised.

Take an example of 12 :
List of perfect square numbers ≤12 is 1,4,9.
11+1 = 12, 8+4 = 12, 3+9 = 12.
So to reach 12 we have 3 choices i.e. 11,8,3.

Similarly we will solve for these subproblems with base case as for N=0, ans=0 and for N=1, ans=1.

Hence we can write required recursion as follows :

If n <= 1, 
then return n 
Else
   countMinSquares(n) = min {1 + countMinSquares(n - i*i)} 
                       where i >= 1 and i*i <= n
We can easily transform this exponential solution to DP as below :

dp[0]=0,dp[1]=1; // base cases.
i : [2...N]
{
    dp[i]=i;
    for every x : x>=1 & x*x<=i
    {
        dp[i]=min(dp[i],1+dp[i-x*x]);
    }
}
Time Complexity : O(N*sqrt(N))
Space Complexity : O(N)
*/

function countMinSquares(n) {
  let dp = Array(n + 1);

  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let ans = i;
    for (let j = 1; j * j <= i; j++) {
      ans = Math.min(ans, dp[i - j * j] + 1);
    }
    dp[i] = ans;
  }
  return dp[n];
}

let n = 12;
let ans = countMinSquares(n);
console.log(ans);
