public class PickFromBothSides {
  public int solve(int[] A, int B) {
    int n = A.length;
    int[] suff = new int[n + 1];
    suff[n] = 0;
    suff[n - 1] = A[n - 1];
    for (int i = n - 2; i >= 0; i--) {
      suff[i] = A[i] + suff[i + 1];
    }
    int pref_sum = 0;
    int ans = suff[n - B];
    for (int i = 0; i < B; i++) {
      pref_sum = pref_sum + A[i];
      int suff_sum = suff[n - B + (i + 1)];
      ans = Math.max(ans, pref_sum + suff_sum);
    }
    return ans;
  }

  public static void main(String[] args) {
    PickFromBothSides pickFromBothSides = new PickFromBothSides();
    int[] myNum = {
        5, -2, 1, 4, 3, 1, 2
    };
    int maxSum = pickFromBothSides.solve(myNum, 3);
    System.out.println(maxSum);
  }
}