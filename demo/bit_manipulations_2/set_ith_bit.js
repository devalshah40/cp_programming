/*
Problem Description
You are given two integers A and B.
Set the A-th bit and B-th bit in 0, and return output in decimal.


Problem Constraints
0 <= A <= 30
0 <= B <= 30


Input Format
First argument A is an integer.
Second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:
A = 3
B = 5
Input 2:
A = 4
B = 4


Example Output
Output 1:
40
Output 2:
16


Example Explanation
For Input 1:
The binary expression is 101000 which is 40 in decimal.
For Input 2:
The binary expression is 10000 which is 16 in decimal
*/
let A = 3;
let B = 5;

/*
Solution approach
The value of the A-th bit is 2^A and that
of the B-th bit is 2^B.
We have to set the A-th bit and the B-th bit
in 0. This is similar to directly adding 2^A 
and 2^B to 0. 
If A = B, then we can just add 2^A to 0.

Time Complexity : O(1)
Space Complexity : O(1)
*/

// 1st approach
// let ans = 0;
// ans = ans | (1 << A);
// console.log(ans);
// if (A !== B) {
//   ans = ans | (1 << B);
// }
// console.log(ans);

// 2nd approach
console.log(0 | (1 << A) | (1 << B));
