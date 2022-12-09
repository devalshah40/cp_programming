/*
Problem Description
You are given two integers A and B.
If B-th bit in A is set, make it unset
If B-th bit in A is unset, leave it as it is
Return the updated A value


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
4
Output 2:
1


Example Explanation
For Input 1:
Given N = 4 which is 100 in binary. The 1-st bit is already unset
For Input 2:
 
Given N = 5 which is 101 in binary. We unset the 2-nd bit


*/
let A = 5;
let B = 2;

// 1st approach
function unsetIthBit(A, B) {
  let isBitSet = A & (1 << B);
  // console.log(isBitSet);

  if (!isBitSet) {
    return A;
  } else {
    return A ^ (1 << B);
  }
}

/*
Solution Approach

We can find if the B-th bit is set in A by performing
bitwise AND of A and 2^B. If the result is non-zero then
we subtract 2^B from A. If the bitwise AND is zero that means
the B-th bit is already unset. So, then we return A as it is.

Time Complexity : O(1)
Space Complexity : O(1)
*/

function unsetIthBitScaler(A, B) {
  let num = 1 << B;
  if ((A & num) > 0) {
    A = A - num;
  }
  return A;
}

// let ans = unsetIthBit(A, B);
let ans = unsetIthBitScaler(A, B);
console.log(ans);
