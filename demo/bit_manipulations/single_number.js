/*
Problem Description
Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



Problem Constraints
2 <= |A| <= 2000000

0 <= A[i] <= INTMAX



Input Format
The first and only argument of input contains an integer array A.



Output Format
Return a single integer denoting the single element.



Example Input
Input 1:

 A = [1, 2, 2, 3, 1]
Input 2:

 A = [1, 2, 2]


Example Output
Output 1:

 3
Output 2:

 1


Example Explanation
Explanation 1:

3 occurs once.
Explanation 2:

1 occurs once.
*/
/*

Hint 1
Let us look at every bit’s position.

Every number that occurs twice will either contribute 2 ‘1’s or 2 ‘0’s to the position.

The number that occurs once-‘X’ will contribute exactly one 0 or 1 to the position depending on whether it has 0 or 1 in that position.

So:

If X has 1 in that position, we will have an odd number of 1s in that position.

If X has 0 in that position, we will have an odd number of 0s in that position.

Can you think of a solution using the above observation?
*/
/*
Solution Approach
We have noticed that if X has 1 in that position, we will have an odd number of 1s in that position.

If X has 0 in that position, we will have an odd number of 0 in that position.

Looking at the bit operators, XOR is what we need.

XOR will return 1 only on two different bits. So if two numbers are the same, XOR will return 0.

Finally, there is only one number left.

A ^ A = 0 and A ^ B ^ A = B.

So, all the even occurrences will cancel out using XOR.

Time Complexity : O(n)
Space Complexity(extra) : O(1)
*/

let A = [1, 2, 2, 3, 1];
let i = 1;
let ans = Number(A[0]);
while (i < A.length) {
  ans = ans ^ Number(A[i]);
  i++;
}
console.log(ans);
/*
public class Solution {
    // DO NOT MODIFY THE LIST
    public int singleNumber(final List < Integer > A) {
        int num = 0;
        for (int val: A) {
            // xor of all the elements of the array
            num ^= val;
        }
        return num;
    }
}
*/
