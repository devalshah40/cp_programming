/*
Problem Description
You are given two integers A and B.
Return 1 if B-th bit in A is set
Return 0 if B-th bit in A is unset


Problem Constraints
1 <= A <= 109
0 <= B <= 30


Input Format
First argument A is an integer.
Second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:
A = 4
B = 1
Input 2:
A = 5
B = 2


Example Output
Output 1:
0
Output 2:
1


Example Explanation
For Input 1:
Given N = 4 which is 100 in binary. The 1-st bit is unset
so we return 0
For Input 2:
 
Given N = 5 which is 101 in binary. The 2-nd bit is set
so we return 1

Hint 1
The value of the i-th bit is 2^i

Solution Approach
The value of the B-th bit is 2^B
To find the B-th bit in A, we can directly
perform bitwise AND operation between A and 2^B.
If the bit was unset we get 0 as the result of the
biwise AND and if the bit was set then the result is
2^B

Time Complexity : O(1)
Space Complexity : O(1)
*/
let A = 4;
let B = 1;
// let ans = (A >> B) & 1;
let ans = A & (1 << B);
console.log(ans);
