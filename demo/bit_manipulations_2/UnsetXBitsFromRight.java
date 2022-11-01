/*
 Problem Description
Given an integer A. Unset B bits from the right of A in binary.
For eg:-
A = 93, B = 4
A in binary = 1011101
A should become = 1010000 = 80. Therefore return 80.


Problem Constraints
1 <= A <= 1018
1 <= B <= 60


Input Format
The first argument is a single integer A.
The second argument is a single integer B.


Output Format
Return the number with B unset bits from the right.


Example Input
Input 1:-
A = 25
B = 3
Input 2:-
A = 37
B = 3


Example Output
Output 1:-
24
Output 2:-
32


Example Explanation
Explanation 1:-
A = 11001 to 11000
Explantio 2:-
A = 100101 to 100000
 */
class UnsetXBitsFromRight {
    public static Long solve(long N, int i) {

        long lastIbitVal = 0;
        for (int j = 0; j < i; j++) {
            long lastBit = N & (1 << j);
            lastIbitVal += lastBit;
        }
        return N - lastIbitVal;
    }

    /*
     Try using for loops iterate from 0 to B-1 and do the needful.
        Initialise a variable ans = A. 
        Iterate from i = 0 to i = B - 1. 
        If ith bit was set in A that is (A & (1<<i)) != 0, ans -= (1<<i), 
        unset it from the answer. 
     */
    public static Long solveScaler(long N, int i) {

        // long ans = N;
        for (int j = 0; j < i; j++) {
            long lastBit = N & (1 << j);
            if (lastBit != 0) {
                N -= (1 << j);
            }
        }
        return N;
    }

    public static void main(String[] args) {
        long A = 53;
        int B = 5;
        // long ans = solve(A, B);
        long ans = solveScaler(A, B);
        System.out.println(ans);
    }
}