
/*
 * Problem Description
Given an integer array A, find if an integer p exists in the array 
such that the number of integers greater than p in the array equals p.

Problem Constraints
1 <= |A| <= 2*105
1 <= A[i] <= 107

Input Format
First and only argument is an integer array A.

Output Format
Return 1 if any such integer p is present else, return -1.

Example Input
Input 1:
 A = [3, 2, 1, 3]

Input 2:
 A = [1, 1, 3, 3]

Example Output
Output 1:
 1

Output 2:
 -1

Example Explanation
  Explanation 1:
    For integer 2, there are 2 greater elements in the array..

  Explanation 2:
    There exist no integer satisfying the required conditions.
 */
import java.util.*;

class NobelIntegerDecending {
  /*
   * Hint 1
   * The straightforward approach is to for every element find how many integers
   * are greater than that.
   * And if that matches our given statement, then we have our answer.
   * 
   * Will sorting the array help?
   * 
   * Solution Approach
   * First, we sort the input array.
   * 
   * Now, all we have to do is to traverse through each element of the array and
   * check whether it matches our given statement.
   * Since the array is sorted, we directly know how many elements are greater
   * than that number in the array.
   ** 
   * Note: Please take care of cases when a certain element repeats many times.**
   */
  // return 1 or -1
  public static int solveScaler(ArrayList<Integer> A) {
    int N = A.size();
    // 3, 3, 2, 2, 1
    Collections.sort(A, Collections.reverseOrder());
    int val = A.get(0);
    if (val == 0) {
      return 1;
    }
    for (int i = 1; i < N; i++) {
      int currentVal = A.get(i);
      int previousVal = A.get(i - 1);
      if (currentVal != previousVal && currentVal == i) {
        return 1;
      }
    }
    return -1;

  }

  public static int solve(ArrayList<Integer> A) {
    // int[] numbers = { 3,3,2,2,1 };
    Collections.sort(A, Collections.reverseOrder());
    // Collections.sort(A);

    int count = 0;
    // int currentValue = A.get(0);
    int previousValue = A.get(0);
    // int previousValue = Integer.MAX_VALUE;

    for (int i = 0; i < A.size(); i++) {
      int val = A.get(i);
      if (val == i) {
        if (previousValue > val) {
          previousValue = val;
          count++;
        }
      } else if (count > 1 && previousValue == val) {
        count++;
      }
    }

    return (count == 0) ? -1 : count;

  }

  public static void main(String[] args) {
    // int[] numbers = { -10, 1, 1, 2, 4, 4, 4, 8, 10 };
    // 5
    // int[] numbers = { 1, 2, 7, 0, 9, 3, 6, 0, 6 };
    // int[] numbers = { 5, 6, 2 };

    // int[] numbers = { 1, 2, 7, 0, 9, 3, 6, 0, 6 };
    // int[] numbers = { -1, -2, 0, 0, 0, -3 };
    // ans = 0

    // int[] numbers = { -4, 7, 5, 3, 5, -4, 2, -1, -9, -8, -3, 0, 9, -7, -4, -10,
    // -4, 2, 6, 1, -2, -3, -1, -8, 0, -8, -7,
    // -3, 5, -1, -8, -8, 8, -1, -3, 3, 6, 1, -8, -1, 3, -9, 9, -6, 7, 8, -6, 5, 0,
    // 3, -4, 1, -10, 6, 3, -8, 0, 6, -9,
    // -5, -5, -6, -3, 6, -5, -4, -1, 3, 7, -6, 5, -8, -5, 4, -3, 4, -6, -7, 0, -3,
    // -2, 6, 8, -2, -6, -7, 1, 4, 9, 2,
    // -10, 6, -2, 9, 2, -4, -4, 4, 9, 5, 0, 4, 8, -3, -9, 7, -8, 7, 2, 2, 6, -9,
    // -10, -4, -9, -5, -1, -6, 9, -10, -1,
    // 1, 7, 7, 1, -9, 5, -1, -3, -3, 6, 7, 3, -4, -5, -4, -7, 9, -6, -2, 1, 2, -1,
    // -7, 9, 0, -2, -2, 5, -10, -1, 6,
    // -7, 8, -5, -4, 1, -9, 5, 9, -2, -6, -2, -9, 0, 3, -10, 4, -6, -6, 4, -3, 6,
    // -7, 1, -3, -5, 9, 6, 2, 1, 7, -2, 5
    // };
    // ans = -1

    // int[] numbers = { 3, 3, 2, 2, 1 };
    // // ans = 1
    // int[] numbers = { 2, 2, 2 };
    // ans = 0
    int[] numbers = { 0, 0, 0 };
    // ans = 1
    ArrayList<Integer> nuberList = new ArrayList<Integer>();
    for (int i : numbers) {
      nuberList.add(i);
    }

    int ans = solve(nuberList);

    System.out.println(ans);
  }
}
