
/*
 * Problem Description
 *  * Given an array A of non-negative integers, arrange them such that they f
 *orm
 *  * the largest number.
 *  * 
 *
 *  * Note: The result may be very large, so you need to return a string instead of
 *  * an integer.
 *  * 
 *  * 
 *  * 
 *  * Problem Constraints
 *  * 1 <= len(A) <= 100000
 *  * 0 <= A[i] <= 2*109
 *  * 
 *  * 
 *  * 
 *  * Input Format
 *  * The first argument is an array of integers.
 *  * 
 *  * 
 *  * 
 *  * Output Format
 *  * Return a string representing the largest number.
 *  * 
 *  * 
 *  * 
 *  * Example Input
 * * Input 1:
 *  * 
 *  * A = [3, 30, 34, 5, 9]
 * * Input 2:
 *  * 
 *  * A = [2, 3, 9, 0]
 *  * 
 *  * 
 *  * Example Output
 * * Output 1:
 *  * 
 *  * "9534330"
 * * Output 2:
 *  * 
 *  * "9320"
 *  * 
 *  * 
 *  * Example Explanation
 *  * Explanation 1:
 *  * 
 *  * Reorder the numbers to [9, 5, 34, 3, 30] to form the largest number.
 *  * Explanation 2:
 * 
 * Reorder the numbers to [9, 3, 2, 0] to form the largest number 9320.
 */
import java.util.*;

public class LargestNumber {
  public static String solve(ArrayList<Integer> A) {
    A.sort((o1, o2) -> {
      String first = Integer.toString(o1);
      String second = Integer.toString(o2);

      String firstStr = first + second;
      String secondStr = second + first;

      return secondStr.compareTo(firstStr);
    });
    if (A.get(0) == 0) {
      return "0";
    }
    return Arrays.toString(A.toArray()).replace("[", "").replace("]", "").replace(", ", "");
  }

  public static String largestNumber(final int[] A) {
    int N = A.length;

    StringBuilder sb = new StringBuilder();
    String[] str = new String[N];

    for (int i = 0; i < N; i++) {
      str[i] = Integer.toString(A[i]); // Converting the integer elements of array A to string elements.
    }

    // Custom sorting needs to be written using java comparator
    Arrays.sort(str, new Comparator<String>() {
      @Override
      public int compare(String A, String B) {
        String C = A.concat(B);
        String D = B.concat(A);

        return D.compareTo(C); // Custom sorting lexicographically
      }
    });

    // Edge case ( Eg:- "0000" should be returned as "0")
    if (str[0].equals("0") && str[N - 1].equals("0")) {
      return "0";
    }

    for (int i = 0; i < N; i++) {
      sb.append(str[i]);
    }
    return sb.toString();
  }

  public static void main(String args[]) {
    int[] numbers = { 3, 30, 34, 5, 9 };
    // ans = 5
    // int[] numbers = { 0, 0, 0, 0, 0 };
    ArrayList<Integer> numberList = new ArrayList<Integer>();
    for (int i : numbers) {
      numberList.add(i);
    }

    // ArrayList<Integer> ans = solve(numberList);
    // for (int i : ans) {
    // System.out.println(i);
    // }
    String ans = solve(numberList);
    System.out.println(ans);
  }
}
