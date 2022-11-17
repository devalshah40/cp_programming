/*
Problem Description
You are given a string A of size N.

Return the string A after reversing the string word by word.

NOTE:

A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.


Problem Constraints
1 <= N <= 3 * 105



Input Format
The only argument given is string A.



Output Format
Return the string A after reversing the string word by word.



Example Input
Input 1:
    A = "the sky is blue"
Input 2:
    A = "this is ib"


Example Output
Output 1:
    "blue is sky the"
Output 2:
    "ib is this"    


Example Explanation
Explanation 1:
    We reverse the string word by word so the string becomes "blue is sky the".
Explanation 2:
    We reverse the string word by word so the string becomes "ib is this".

 */

public class ReverseStringByWord {
  // public static String solve(String A) {

  // StringBuilder sb = new StringBuilder(A);
  // sb.reverse();

  // for (int i = 0; i < sb.length(); i++) {
  // A.charAt(i);
  // }

  // return A;
  // }

  public static String solve(String s) {
    StringBuilder res = new StringBuilder();
    StringBuilder buf = new StringBuilder();

    for (int i = s.length() - 1; i >= 0; i--) {
      char c = s.charAt(i);
      if (c != ' ')
        buf.append(c);
      else
        create(res, buf);
    }

    create(res, buf);
    return res.toString();
  }

  private static void create(StringBuilder res, StringBuilder buf) {
    int i = buf.length() - 1;

    while (i >= 0) {
      if (i == buf.length() - 1 && res.length() > 0)
        res.append(' ');
      res.append(buf.charAt(i));
      i--;
    }
    buf.setLength(0);
  }

  public static void main(String args[]) {
    String str = "Hello World";

    String ans = solve(str);
    System.out.println(ans);
  }
}