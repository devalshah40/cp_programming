
/*
 * Problem Description
Given an integer array A, find if an integer p exists in the array 
such that the number of integers less than p in the array equals p.

Problem Constraints
1 <= |A| <= 2*105
1 <= A[i] <= 107

Input Format
First and only argument is an integer array A.

Output Format
Return 1 if any such integer p is present else, return -1.

Example Input
Input 1:
 A = [-1, 2, 1, 3]

Example Output
Output 1:
 2

Example Explanation
  Explanation 1:
    For integer 2, there are 2 lesser elements  -1, 1 in the array..

 */
import java.util.*;

class NobelIntegerAscending {

  public static int solve(ArrayList<Integer> A) {

    Collections.sort(A);
    int count = 0;
    int currentValue = A.get(0);
    int previousValue = Integer.MAX_VALUE;

    int i = 0;
    if (currentValue == 0) {
      while (currentValue == 0 && i < A.size()) {
        currentValue = A.get(i);
        count++;
        i++;
      }
      previousValue = A.get(i - 1);
    }

    while (i < A.size()) {
      int val = A.get(i);
      if (val == i) {
        if (previousValue < val) {
          count++;
        }
      } else if (previousValue == val) {
        count++;
      }
      i++;
    }

    return (count == 0) ? -1 : count;
    // int previousValue = Integer.MAX_VALUE;

    // // if (previousValue == 0) {
    // // count++;
    // // }

    // for (int i = 0; i < A.size(); i++) {
    // // for (int i = A.size(); i > 0; i--) {
    // int val = A.get(i);

    // // if (smallerValue == val) {
    // // count++;
    // // } else
    // if (smallerValue <= val && val == i) {
    // previousValue = val;
    // smallerValue = val;
    // count++;
    // } else if (previousValue == val) {
    // count++;
    // }
    // }
    // return (count == 0) ? -1 : count;
  }

  public static void main(String[] args) {
    int[] numbers = { 1, -5, 3, 5, -10, 4 };
    // int[] numbers = { -10, 1, 1, 3, 100 };
    // int[] numbers = { -1, 1, 2, 3, 3 };
    // int[] numbers = { 0, 0, 2, 2 };
    // int[] numbers = { 2, 2, 2 };
    ArrayList<Integer> nuberList = new ArrayList<Integer>();
    for (int i : numbers) {
      nuberList.add(i);
    }

    int ans = solve(nuberList);

    System.out.println(ans);
  }
}
