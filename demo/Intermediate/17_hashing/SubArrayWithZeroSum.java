import java.util.*;

public class SubArrayWithZeroSum {
  public static int solve(ArrayList<Integer> A) {
    int[] prefixSum = new int[A.size()];

    HashSet<Integer> set = new HashSet<Integer>();

    for (int i = 0; i < A.size(); i++) {
      int val = A.get(i);
      if (val == 0) {
        return 1;
      }
      prefixSum[i] = (i == 0) ? val : prefixSum[i - 1] + val;
      if (prefixSum[i] == 0) {
        return 1;
      }

      if (set.contains(prefixSum[i])) {
        return 1;
      } else {
        set.add(prefixSum[i]);
      }
    }
    return -1;
  }

  public static int solveWithoutPrefixSum(ArrayList<Integer> A) {
    int[] prefixSum = new int[A.size()];

    int carrySum = 0;
    HashSet<Integer> set = new HashSet<Integer>();

    for (int i = 0; i < A.size(); i++) {
      int val = A.get(i);
      if (val == 0) {
        return 1;
      }
      carrySum = (i == 0) ? val : carrySum + val;
      if (carrySum == 0) {
        return 1;
      }

      if (set.contains(carrySum)) {
        return 1;
      } else {
        set.add(carrySum);
      }
    }
    return -1;
  }
  
  public static void main(String args[]) {
    int[] numbers = { 1, -1 };
    // ans = 1

    ArrayList<Integer> numberList = new ArrayList<Integer>();
    for (int i : numbers) {
      numberList.add(i);
    }

    int ans = solve(numberList);
    System.out.println(ans);
  }
}
