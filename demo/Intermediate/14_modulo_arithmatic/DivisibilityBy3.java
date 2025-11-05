
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
import java.util.ArrayList;

class DivisibilityBy3 {
    /*
     * one way
     * Use long ans and covert int to (int) when return
     */
    public static int solve(ArrayList<Integer> A) {
        int sum = 0;
        for (int i = 0; i < A.size(); i++) {
            sum += A.get(i);
        }
        
        if (sum % 3 == 0) {
            return 1;
        }
        return 0;
    }

    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);

        int ans = solve(numbers);

        System.out.println(ans);
    }
}