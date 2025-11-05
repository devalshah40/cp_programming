import java.util.*;

public class FirstRepeatingElement_2 {
  public static int solve(ArrayList<Integer> A) {
    LinkedHashMap<Integer, Integer> map = new LinkedHashMap<Integer, Integer>();
    for (Integer number : A) {
      if (map.containsKey(number)) {
        // int val = map.get(number);
        map.put(number, map.get(number) + 1);
      } else {
        map.put(number, 1);
      }
    }
    for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
      Integer key = entry.getKey();
      Integer frequencyCount = entry.getValue();
      if (frequencyCount > 1) {
        return key;
      }
    }
    return -1;
  }

  // using Hashset
  public int solve(int[] A) {
    HashSet<Integer> set = new HashSet<>();

    int res = -1;
    // traverse from back side array
    for (int i = A.length - 1; i >= 0; i--) {
      if (set.add(A[i]) == false)
        res = A[i];
      set.add(A[i]);
    }
    return res;
  }

  // using Hashmap
  public int solve1(ArrayList<Integer> A) {
    HashMap<Integer, Integer> vis = new HashMap<Integer, Integer>();
    int ans = -1;
    for (int i = A.size() - 1; i >= 0; --i) {
      if (vis.containsKey(A.get(i))) {
        ans = A.get(i);
      } else {
        vis.put(A.get(i), 1);
      }
    }
    return ans;
  }

  public static void main(String args[]) {
    int[] numbers = { 1, 5, 3, 3, 5 };
    // ans = 5

    ArrayList<Integer> numberList = new ArrayList<Integer>();
    for (int i : numbers) {
      numberList.add(i);
    }

    int ans = solve(numberList);
    System.out.println(ans);
  }
}
