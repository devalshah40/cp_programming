
/*
 * Problem Description
Given an array A. You have some queries given by the array B.

For the i-th query, find the frequency of B[i] in the array A.



Problem Constraints
1 <= |A| <= 105

1 <= |B| <= 105

1 <= A[i] <= 105

1 <= B[i] <= 105



Input Format
First argument A is an array of integers.

Second argument B is an array of integers denoting the queries.



Output Format
Return an array of integers answering each of the queries.



Example Input
Input 1:
A = [1, 2, 1, 1]
B = [1, 2]
Input 2:
A = [2, 5, 9, 2, 8]
B = [3, 2]


Example Output
Output 1:
[3, 1]
Output 2:
[0, 2]


Example Explanation
For Input 1:
The frequency of 1 in the array A is 3.
The frequency of 2 in the array A is 1.
For Input 2:
The frequency of 3 in the array A is 0.
The frequency of 2 in the array A is 2.

 */
import java.util.*;

public class FrequencyOfElementQuery_1 {
  public static ArrayList<Integer> solve(ArrayList<Integer> A, ArrayList<Integer> B) {
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();// Creating
    for (Integer number : A) {
      if (map.containsKey(number)) {
        // int val = map.get(number);
        map.put(number, map.get(number) + 1);
      } else {
        map.put(number, 1);
      }
    }

    ArrayList<Integer> ansList = new ArrayList<Integer>();
    for (Integer number : B) {
      int frequencyCount = 0;
      if (map.containsKey(number)) {
        frequencyCount = map.get(number);
      }
      ansList.add(frequencyCount);
    }
    return ansList;
  }

  public static void main(String args[]) {
    int[] numbers = { 1, 2, 1, 1 };
    int[] queries = { 1, 2 };
    // ans = 1
    ArrayList<Integer> numberList = new ArrayList<Integer>();
    for (int i : numbers) {
      numberList.add(i);
    }

    ArrayList<Integer> queriesList = new ArrayList<Integer>();
    for (int i : queries) {
      queriesList.add(i);
    }

    ArrayList<Integer> ansList = solve(numberList, queriesList);
    for (int i : ansList) {
      System.out.println(i);
    }
  }
}
