/*
Problem Description
You are given a number A. You are also given a base B. A is a number on base B.
You are required to convert the number A into its corresponding value in decimal number system.


Problem Constraints
0 <= A <= 109
2 <= B <= 9


Input Format
First argument A is an integer.
Second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:
A = 1010
B = 2
Input 2:
A = 22 
B = 3


Example Output
Output 1:
10
Output 2:
8


Example Explanation
For Input 1:
The decimal 10 in base 2 is 1010.
For Input 2:
The decimal 8 in base 3 is 22.
*/
/*
We extract 1 digit from the end of the number A and 
multiply it with the respective power of the given base 
B and finally add it to the answer. This process continues 
until the number A becomes 0, i.e. all the digits of A have 
been extracted.

Time Complexity : O(logA)
Space Complexity : O(1)
*/
// let number = 101;
// let baseValue = 2;
let number = 22;
let baseValue = 3;

let ans = 0;
let multiplier = 1;

while (number > 0) {
  const lastDigit = number % 10;
  ans += lastDigit * multiplier;

  multiplier *= baseValue;
  number = parseInt(number / 10);
}
console.log(ans);
/*
public class Solution {
    public int solve(int A, int B) {
        int res = 0 , multiplier = 1;
        while(A > 0){
            int digit = A % 10;
            res += multiplier * digit;
            multiplier *= B;
            A /= 10;
        }
        return res;
    }
}
*/
