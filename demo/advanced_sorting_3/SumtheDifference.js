/*
Problem Description
Given an integer array, A of size N.
You have to find all possible non-empty subsequences of the array of numbers and then, for each subsequence, find the difference between the largest and smallest numbers in that subsequence. Then add up all the differences to get the number.

As the number may be large, output the number modulo 1e9 + 7 (1000000007).

NOTE: Subsequence can be non-contiguous.



Problem Constraints
1 <= N <= 10000

1<= A[i] <=1000



Input Format
First argument is an integer array A.



Output Format
Return an integer denoting the output.



Example Input
Input 1:

A = [1, 2] 
Input 2:

A = [1]


Example Output
Output 1:

 1 
Output 2:

 0


Example Explanation
Explanation 1:

All possible non-empty subsets are:
[1]    largest-smallest = 1 - 1 = 0
[2]    largest-smallest = 2 - 2 = 0
[1 2]  largest-smallest = 2 - 1 = 1
Sum of the differences = 0 + 0 + 1 = 1
So, the resultant number is 1 
Explanation 2:

 Only 1 subsequence of 1 element is formed.

 */
/*
Solution Approach
It can be seen that if elements are sorted, then taking any two indexes,
there will be a fixed number of K elements in between then.
So you can take any number of K elements that are in between those two elements.
So the difference of the values of those two indexes will contribute 2 to the power of K (subsets) to the answer.
So we will take all possible pairs of elements.

Example:
1 2 3 4
If we take indexes 0 and 3, i.e., elements 1 and 4. There are two elements between them (2, 3).
So 1 and 4 are in 4 subsets which are
a) 1 4
b) 1 2 4
c) 1 3 4
d) 1 2 3 4
Which is 2 to the power of 2.
The complexity if O(N^2)

If we take a close look at the approach above,
we can solve it in O(N) also.
After sorting the array,
Answer is {A[N-1]2^(N-1) +A[N-2]2^(N-2) +…..+A[0]2^0} - {A[0]2^(N-1) + A[1]2^(N-2) +……+ A[0]2^0}
*/
function solve(A) {
  // Sort the array
  A.sort((a, b) => a - b);
  let MOD = 1000000007;
  let n = A.length;
  let pow2 = Array(n).fill(0);
  pow2[0] = 1;

  for (let i = 1; i < n; ++i) pow2[i] = (pow2[i - 1] * 2) % MOD;

  let ans = 0;

  for (let i = 0; i < n; ++i)
    ans = (ans + (pow2[i] - pow2[n - 1 - i]) * A[i]) % MOD;

  return ans;
}

function solveEfficient(A) {
  // Sort the array
  A.sort((a, b) => a - b);
  let MOD = 1000000007;
  let n = A.length;
  let pow2 = 1;

  let ans = 0;

  for (let i = 0; i < n; ++i) {
    ans = (ans + (A[i] - A[n - 1 - i]) * pow2) % MOD;
    pow2 = (pow2 << 1) % MOD;
  }

  return ans;
}

let A = [1, 2, 3, 4];
let ans = solve(A);
console.log(ans);
