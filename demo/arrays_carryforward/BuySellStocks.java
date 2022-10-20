public class BuySellStocks {
	public int maxProfit(int[] A) {

		int n;
		int array[];

		n = A.length;

		if (A == null || n <= 1)
			return 0;

		array = new int[n - 1];

		int profit = 0;
		int prev = 0;

		for (int i = 1; i < n; i++) {
			array[i - 1] = A[i] - A[i - 1];
		}

		for (int i = 0; i < n - 1; i++) {
			prev += array[i];
			profit = Math.max(profit, prev);
			if (prev < 0)
				prev = 0;
		}

		return profit;

	}

	public static void main(String[] args) {
		BuySellStocks buySellStocks = new BuySellStocks();
		int[] myNum = {
				4, 2, 3, 5, 1
		};
		int profit = buySellStocks.maxProfit(myNum);
		System.out.println(profit);
	}
}