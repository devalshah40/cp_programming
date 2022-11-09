
/*
Problem Description
You are given a large number in the form of a array A of size N where each element denotes a digit of the number.
You are also given a number B. You have to find out the value of A % B and return it.



Problem Constraints
1 <= N <= 105
0 <= Ai <= 9
1 <= B <= 109


Input Format
The first argument is an integer array A.
The second argument is an integer B.


Output Format
Return a single integer denoting the value of A % B.


Example Input
Input 1:
A = [1, 4, 3]
B = 2
Input 2:

A = [4, 3, 5, 3, 5, 3, 2, 1]
B = 47


Example Output
Output 1:
1
Output 2:

20


Example Explanation
Explanation 1:
143 is an odd number so 143 % 2 = 1.
Explanation 2:

43535321 % 47 = 20

 */

class ModArray {
    /*
     * We can use the two following properties:
     * 
     * (a * b) mod x = [(a mod x) * (b mod x)] mod x
     * 
     * (a + b) mod x = [(a mod x) + (b mod x)] mod x
     * 
     * 
     * We can represent a number [a, b, c, d] as (a * 1000) + (b * 100) + (c * 10) +
     * (d * 1).
     * We can use the above properties of modular arithmetic to solve the problem.
     * 
     * We will iterate from the end of the array (least significant digit).
     * We will keep a variable that will store the values of powers of 10 modulo B
     * at every step.
     * Then, we will perform the operations accordingly.
     * Be careful of integer overflows.
     * 
     * Refer to the complete solution for more implementation details.
     * 
     * Time Complexity : O(N)
     * Space Complexity : (1)
     */
    public static int solve(int A[], int B) {
        int N = A.length;
        long r = 1;
        long ans = 0;

        for (int i = N - 1; i >= 0; i--) {
            ans = (ans + (((A[i] % B) * (r % B)) % B)) % B;
            r = ((r * 10) % B);
        }
        return (int) ans;
    }

    public static int solveScaler(int[] A, int B) {
        long ans = 0;
        long mod = B;
        int n = A.length;
        long curr = 1;
        for (int i = n - 1; i >= 0; i--) {
            long dig = A[i];
            long term = (dig * curr) % mod;
            ans = (ans + term) % mod;
            curr = (curr * 10) % mod;
        }
        return (int) ans;
    }

    public static void main(String[] args) {
        // int B = 9;
        // int A[] = { 1, 8, 4, 5, 0, 8, 0 };
        // int B = 9;
        int A[] = { 1, 2, 3 };
        int B = 7;
        // int ans = solve(A, B);
        int ans = solveScaler(A, B);

        System.out.println(ans);
    }
}