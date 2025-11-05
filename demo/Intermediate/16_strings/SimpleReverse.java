/*
Problem Description
Given a string A, you are asked to reverse the string and return the reversed string.



Problem Constraints
1 <= |A| <= 105

String A consist only of lowercase characters.



Input Format
First and only argument is a string A.



Output Format
Return a string denoting the reversed string.



Example Input
Input 1:

 A = "scaler"
Input 2:

 A = "academy"


Example Output
Output 1:

 "relacs"
Output 2:

 "ymedaca"


Example Explanation
Explanation 1:

 Reverse the given string.
 */

public class SimpleReverse {
  public static String solve(String A) {
    // Two pointer swap solution
    // converting string to char array because swap will be easy
    char[] charArr = A.toCharArray();
    int start = 0;
    int end = A.length() - 1;

    while (start < end) {
      char temp = charArr[start];
      charArr[start] = charArr[end];
      charArr[end] = temp;
      start++;
      end--;
    }
    return (new String(charArr));
  }

  public String solve1(String A) {
    StringBuilder sb = new StringBuilder();
    for (int i = A.length() - 1; i >= 0; i--) {
      sb.append(A.charAt(i));
    }
    return sb.toString();
  }

  public String solve2(String A) {
    StringBuilder sb = new StringBuilder(A);
    return sb.reverse().toString();
  }

  public static void main(String args[]) {
    String str = "Hello";

    String ans = solve(str);
    System.out.println(ans);
  }
}