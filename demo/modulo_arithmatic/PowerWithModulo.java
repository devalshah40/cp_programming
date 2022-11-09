/*
Problem Description
You are given A, B and C .
Calculate the value of (A ^ B) % C


Problem Constraints
1 <= A <= 109
0 <= B <= 105
1 <= C <= 109


Input Format
Given three integers A, B and C.


Output Format
Return an integer.


Example Input
Input 1:
A = 2
B = 3
C = 3
Input 2:
A = 5
B = 2
C = 4


Example Output
Output 1:
2
Output 2:
1


Example Explanation
For Input 1:
(2 ^ 3) % 3 = 8 % 3 = 2
For Input 2:
(5 ^ 2) % 4 = 25 % 4 = 1
 */
class PowerWithModulo {
    /*
     * one way
     * Use long ans and covert int to (int) when return
     */
    public static int solve(int number, int n, int mod) {
        long ans = 1;

        for (int i = 0; i < n; i++) {
            // int ansMod = ans % mod;
            // int numberMod = number % mod;

            ans = (ans * number) % mod;

            // ans = (int) (multiplication % (long) mod);
            // ((long) ansMod * numberMod) % mod;
            // ans = (int) ((long) (ans % mod) * (number % mod)) % mod;
        }
        return (int) ans;
    }

    /*
     * second way
     * Use typecasting to long from int
     */
    public static int solveSecondWay(int number, int n, int mod) {
        int ans = 1;

        for (int i = 0; i < n; i++) {
            // int ansMod = ans % mod;
            // int numberMod = number % mod;
            // ans = (int) (((long) ansMod * numberMod) % mod);

            // ans = (ans * number) % mod;
            // ans = (ans%mod * number%mod) % mod;
            ans = (int) (((long) (ans % mod) * (number % mod)) % mod );

        }
        return (int) ans;
    }

    public static void main(String[] args) {
        // int number = 2;
        // int n = 3;
        // int mod = 3;
        int number = 55711;
        int n = 284;
        int mod = 64649;
        // ans = 45880

        // int ans = solve(number, n, mod);
        int ans = solveSecondWay(number, n, mod);

        System.out.println(ans);
    }
}