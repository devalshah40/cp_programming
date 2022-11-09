import java.util.*;

public class FrequencyOfElementQuery {
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
