import java.util.*;

public class FirstRepeatingElement {
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
