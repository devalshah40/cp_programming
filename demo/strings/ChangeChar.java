
/*
Problem Description
You are given a string A of size N consisting of lowercase alphabets.

You can change at most B characters in the given string to any other lowercase alphabet such that the number of distinct characters in the string is minimized.

Find the minimum number of distinct characters in the resulting string.



Problem Constraints
1 <= N <= 100000

0 <= B < N



Input Format
The first argument is a string A.

The second argument is an integer B.



Output Format
Return an integer denoting the minimum number of distinct characters in the string.



Example Input
A = "abcabbccd"
B = 3



Example Output
2



Example Explanation
We can change both 'a' and one 'd' into 'b'.So the new string becomes "bbcbbbccb".
So the minimum number of distinct character will be 2.
*/
import java.util.*;

public class ChangeChar {
  public static int solve(String A, int B) {

    int[] arr = new int[26];

    int n = A.length();
    int dst = 0;

    for (int i = 0; i < n; i++) {

      arr[A.charAt(i) - 'a']++;

      if (arr[A.charAt(i) - 'a'] == 1) {
        dst++;
      }

    }

    Arrays.sort(arr);

    for (int a : arr) {

      if (a == 0) {
        continue;
      }

      if (a > B) {
        break;
      }

      dst--;
      B = B - a;

    }

    return dst;
  }

  public static void main(String[] args) {
    // // let str = 'aabbbcccd';
    // // let n = 3;
    String str = "a";
    int n = 1;

    int totalUniqChars = solve(str, n);
    System.out.println(totalUniqChars);

  }
}
