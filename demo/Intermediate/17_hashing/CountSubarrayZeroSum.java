
/*
Problem Description
Given an array A of N integers.

Find the count of the subarrays in the array which sums to zero. Since the answer can be very large, 
return the remainder on dividing the result with 109+7


Problem Constraints
1 <= N <= 105
-109 <= A[i] <= 109


Input Format
Single argument which is an integer array A.


Output Format
Return an integer.


Example Input
Input 1:

 A = [1, -1, -2, 2]
Input 2:

 A = [-1, 2, -1]


Example Output
Output 1:

3
Output 2:

1


Example Explanation
Explanation 1:

 The subarrays with zero sum are [1, -1], [-2, 2] and [1, -1, -2, 2].
Explanation 2:

 The subarray with zero sum is [-1, 2, -1].
*/
import java.util.*;

public class CountSubarrayZeroSum {
  public static int solve(ArrayList<Integer> A) {
    int[] prefixSum = new int[A.size()];

    HashSet<Integer> set = new HashSet<Integer>();
    int count = 0;
    for (int i = 0; i < A.size(); i++) {
      int val = A.get(i);
      prefixSum[i] = (i == 0) ? val : prefixSum[i - 1] + val;
      if (prefixSum[i] == 0) {
        count = (count + 1) % 1000000007;
      }

      if (set.contains(prefixSum[i])) {
        count = (count + 1) % 1000000007;
      } else {
        set.add(prefixSum[i]);
      }
    }
    return count;
  }

  public static void main(String args[]) {
    int[] numbers = { 1, -1, 1, -1 };
    // ans = 1

    ArrayList<Integer> numberList = new ArrayList<Integer>();
    for (int i : numbers) {
      numberList.add(i);
    }

    int ans = solve(numberList);
    System.out.println(ans);
  }
}
