import java.lang.Math;

/*
Problem Description
Given an integer A, find and return the Ath magic number.

A magic number is defined as a number that can be expressed as a power of 5 or a sum of unique powers of 5.

First few magic numbers are 5, 25, 30(5 + 25), 125, 130(125 + 5), ….



Problem Constraints
1 <= A <= 5000



Input Format
The only argument given is integer A.



Output Format
Return the Ath magic number.



Example Input
Example Input 1:

 A = 3
Example Input 2:

 A = 10


Example Output
Example Output 1:

 30
Example Output 2:

 650


Example Explanation
Explanation 1:

 Magic Numbers in increasing order are [5, 25, 30, 125, 130, ...]
 3rd element in this is 30
Explanation 2:

 In the sequence shown in explanation 1, 10th element will be 650.
 */
class NthMagicNumber {
    /*
     * This one is better approach compared to scaler
     */
    public static int solve(int A) {
        int ans = 0;
        int index = 1;
        while (A > 0) {
            if ((A & 1) > 0) {
                ans += Math.pow(5, index);
            }
            A >>= 1;
            index++;
        }
        return ans;
    }

    /*
     * The whole problem could be divided into two steps.
     * 
     * 1) Convert the given number A in Binary.
     * 2) Multiply each binary number in powers of 5.
     * 
     * // * For example.
     * // * A A in Binary Ans in powers of 5
     * // * 1 1 5^1=5
     * // * 2 10 5^2=25
     * // * 3 11 5^2+5^1=30
     * // * 4 100 5^3=125
     * // * 5 101 5^3+5^1=130
     * // * And so on…
     * // * 10 1010 5^4+5^2=650
     */
    /*
     * As we know **5n > 51 + 52 + ... + 5n-1**
     * So, we can find the sum of all subsets of the first 13 power of 5.
     * since no element will overlap, we will have 2^13 - 1 elements or 8000
     * elements.
     * Simply sort them and answer the query in O(1).
     * Time Complexity: O(A*logA).
     * 
     * Else we can use a much faster approach.
     * We can represent A in its binary representation.
     * If the ith bit(1 based indexing) is set we will add 5i to our answer.
     * Time Complexity:- O(log(A))
     * 
     * Approach
     * 5 = 5^1
     * 25 = 5^2
     * 30 = 5^2 + 5^1
     * 125 = 5^3
     * 
     * 1= 2^0
     * 2= 2^1
     * 3= 2^1 + 2^0
     * 4 = 2^2
     */
    public static int solveScaler(int A) {
        int ans = 0, x = 1;
        // converting to binary representation
        while (A > 0) {
            x *= 5;
            if (A % 2 == 1)
                ans += x;
            A /= 2;
        }
        return ans;
    }

    public static void main(String[] args) {
        int A = 10;
        int ans = solve(A);
        System.out.println(ans);
    }
}