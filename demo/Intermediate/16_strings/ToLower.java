
/*
 * Problem Description
You are given a function to_lower() which takes a character array A as an argument.

Convert each character of A into lowercase characters if it exists. If the lowercase of a character does not exist, it remains unmodified.
The uppercase letters from A to Z are converted to lowercase letters from a to z respectively.

Return the lowercase version of the given character array.



Problem Constraints
1 <= |A| <= 105



Input Format
The only argument is a character array A.



Output Format
Return the lowercase version of the given character array.



Example Input
Input 1:

 A = ['S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm', 'y']
Input 2:

 A = ['S', 'c', 'a', 'L', 'e', 'r', '#', '2', '0', '2', '0']


Example Output
Output 1:

 ['s', 'c', 'a', 'l', 'e', 'r', 'a', 'c', 'a', 'd', 'e', 'm', 'y']
Output 2:

 ['s', 'c', 'a', 'l', 'e', 'r', '#', '2', '0', '2', '0']


Example Explanation
Explanation 1:

 All the characters in the returned array are in lowercase alphabets.
 */
import java.util.*;

public class ToLower {
  public static ArrayList<Character> solve(ArrayList<Character> A) {
    for (int i = 0; i < A.size(); i++) {
      char c = A.get(i);
      if (c >= 'A' && c <= 'Z') {
        // int asciiVal = (int) c;
        // int newAsciiVal = asciiVal + (1 << Math.abs('a' - 'A'));
        // // c = c - 32;
        // c = (char) newAsciiVal;
        A.set(i, (char) (c + 32));
      }
    }
    return A;
  }

  public static ArrayList<Character> solveScaler(ArrayList<Character> A) {
    for (int i = 0; i < A.size(); i++) {
      char c = A.get(i);
      if (c >= 'A' && c <= 'Z') {
        // all three are valid statements
        // c = (char) (c + Math.abs('a' - 'A'));
        // c = (char) (c + (1 << 5));
        // c += 32;
        c += (1 << 5);
        A.set(i, c);
      }
    }
    return A;
  }

  public static void demo() {
    char c = 'A';
    System.out.println("cast to int " + (int) (c + 32));
    System.out.println("cast to char " + (char) (c + 32));

    char newC = 'A' + 32;
    System.out.println(newC);
    newC = (char) (c + 32);
    System.out.println(newC);

    int i = 'A';
    System.out.println(i);
    i = i + 32;
    System.out.println(i);
    newC = (char) i;
    System.out.println(newC);

    int j = 'A';
    System.out.println(j);
    System.out.println(1 << (Math.abs('a' - 'A')));
    System.out.println(1 << 32);
    j = j + (1 << 5);
    System.out.println(j);
  }

  public static void main(String args[]) {
    // char[] chars = { 'S', 'c', 'A', 'l', 'e', 'r', 'A', 'c', 'a', 'D', 'e', 'm',
    // 'y' };
    char[] chars = { 'A' };

    ArrayList<Character> charList = new ArrayList<Character>();
    for (char i : chars) {
      charList.add(i);
    }

    // demo();
    // ArrayList<Character> ansList = solve(charList);
    ArrayList<Character> ansList = solveScaler(charList);
    for (char c : ansList) {
      System.out.println(c);
    }
  }
}
