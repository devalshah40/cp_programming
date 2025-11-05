/*
Problem Description
Given a decimal number A and base B.
You are required to change the decimal number A into the corresponding value in base B and return that.


Problem Constraints
0 <= A <= 512
2 <= B <= 10


Input Format
The first argument will be decimal number A.
The second argument will be base B.


Output Format
Return the conversion of A in base B.


Example Input
Input:
A = 4
B = 3


Example Output
Output:
11


Example Explanation
Explanation:
Decimal number 4 in base 3 is 11.


Example Input
Input 1:
A = 10
B = 2
Input 2:
A = 8 
B = 3


Example Output
Output 1:
1010
Output 2:
22

/*
Step 1:- Divide the decimal number to be converted by the value of the new base.

Step 2:- Get the remainder from Step 1 as the rightmost digit (least significant digit) of new base number.

Step 3:− Divide the quotient of the previous divide by the new base.

Step 4 − Record the remainder from Step 3 as the next digit (to the left) of the new base number.
*/
*/
// let number = 11;
// let baseValue = 2;
// let number = 10;
// let baseValue = 2;
let number = 8;
let baseValue = 3;
let ans = 0;
let power = 1;

while (number > 0) {
  let lastDigit = number % baseValue;
  ans += lastDigit * power;
  power *= 10;
  // multiplier *= baseValue;
  number = parseInt(number / baseValue);
}
console.log(ans);

/*
public class Solution {
    public int DecimalToAnyBase(int A, int B) {
        int ans = 0;
        int pow = 1;
        while(A > 0){
            int digit = A%B;
            A /= B;
            ans += digit*pow;
            pow *= 10;
        }
        return ans;
    }
}
*/