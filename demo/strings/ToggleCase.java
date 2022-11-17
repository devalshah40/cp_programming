
/*
Problem Description

You are given a character string A having length N, consisting of only lowercase and uppercase latin letters.

You have to toggle case of each character of string A. For e.g 'A' is changed to 'a', 'e' is changed to 'E', etc.



Problem Constraints

1 <= N <= 105

A[i] ∈ ['a'-'z', 'A'-'Z']



Input Format

First and only argument is a character string A.



Output Format

Return a character string.



Example Input

Input 1:

 A = "Hello" 
Input 2:

 A = "tHiSiSaStRiNg" 


Example Output

Output 1:

 hELLO 
Input 2:

 ThIsIsAsTrInG 


Example Explanation

Explanation 1:

 'H' changes to 'h'
 'e' changes to 'E'
 'l' changes to 'L'
 'l' changes to 'L'
 'o' changes to 'O'
Explanation 2:

 "tHiSiSaStRiNg" changes to "ThIsIsAsTrInG".
 */

public class ToggleCase {
  public static String solve(String s) {
    StringBuilder sb = new StringBuilder();
    // for (int i = 0; i < s.length(); i++) {
    // char c = s.charAt(i);
    // c ^= (1 << 5);
    // sb.append(c);
    // }
    // return sb.toString();

    for (char c : s.toCharArray()) {
      c ^= (1 << 5);
      sb.append(c);
    }
    return sb.toString();
  }

  public static void main(String args[]) {
    String str = "Hello";

    String ans = solve(str);
    System.out.println(ans);
  }
}
