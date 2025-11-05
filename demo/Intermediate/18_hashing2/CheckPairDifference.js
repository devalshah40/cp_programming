/*
Problem Description

Given an one-dimensional unsorted array A containing N integers.

You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.

Return 1 if any such pair exists else return 0.



Problem Constraints

1 <= N <= 105
-103 <= A[i] <= 103
-105 <= B <= 105


Input Format

First argument is an integer array A of size N.

Second argument is an integer B.



Output Format

Return 1 if any such pair exists else return 0.



Example Input

Input 1:

 A = [5, 10, 3, 2, 50, 80]
 B = 78
Input 2:

 A = [-10, 20]
 B = 30


Example Output

Output 1:

 1
Output 2:

 1


Example Explanation

Explanation 1:

 Pair (80, 2) gives a difference of 78.
Explanation 2:

 Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30

*/
// let arr = [5, 10, 3, 2, 50, 80];
// let k = 78;
// let arr = [-76, 2];
// let k = 78;

let arr = [1, 5, 2, 6];
let k = 4;
/*
Solution Approach
Method 1: Brute Force
The simplest method is to run two loops, the outer loop picks the first element (smaller element) and the inner loop looks for the element picked by outer loop plus B.
Time complexity of this method is O(N2). This wil not work lets us look on an optimized method.

Method 2: Sorting + Binary Search
We can use sorting and Binary Search to improve time complexity to O(NLogN).

The first step is to sort the array in ascending order.
Once the array is sorted, traverse the array from left to right, and for each element A[i], binary search for A[i] + B in A[i+1..n-1]. If the element is found, return 1.
Both first and second steps take O(NLogN). So overall complexity is O(NLogN).
Time Complexity : O(NlogN + NlogN)

Method 3: Sorting + Two Pointers
The second step of the above algorithm can be improved to O(N). The first step remain same.
The idea for second step:

Take two index variables i and j, initialize them as 0 and 1 respectively.
Now run a linear loop. If A[j] – A[i] is smaller than B, we need to look for greater A[j], so increment j.
If A[j] – A[i] is greater than B, we need to look for greater A[i], so increment i.
Time Complexity : O(NlogN + N)

Methos 4: Hashing
Create an empty hash table HT. Traverse the array, use array elements as hash keys and enter them in HT.
Traverse the array again look for value B + A[i] or B - A[i] in HT.
Time Complexity: O(N) if we use unordered_map
*/

function checkPairDifference(arr, k) {
  let s = new Set();
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    let requiredVal;
    let requiredVal1;

    /*
      A - B = k, A = k + B; B = A - k
      if value = -10 and required sum = 10.
      case 1) k = 10, B = -10
        so A = k + B = 10 - 10 = 0
      case 2) k = 10, A = -10
        so B = A - k = - 10 - 10 = -20
    */

    requiredVal = val - k;
    requiredVal1 = val + k;

    if (requiredVal && s.has(requiredVal)) {
      return 1;
    } else if (requiredVal1 && s.has(requiredVal1)) {
      return 1;
    } else {
      s.add(val);
    }
  }
  return 0;
}

let ans = checkPairDifference(arr, k);
console.log(ans);
