/*
Problem Description
You are given an array A of N integers and an integer B. Count the number of pairs (i,j) such that A[i] - A[j] = B and i ≠ j. Since the answer can be very large, return the remainder after dividing the count with 109+7.


Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109
1 <= B <= 109


Input Format
First argument A is an array of integers and second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:

A = [3, 5, 1, 2]
B = 4
Input 2:

A = [1, 2, 1, 2]
B = 1


Example Output
Output 1:

1
Output 2:

4


Example Explanation
Example 1:

The only pair is (2, 3) which gives difference as 4
Example 2:

The pair which gives difference as 3 are (2, 1), (4, 1), (2, 3) and (4, 3). 

*/
// let arr = [3, 5, 1, 2];
// let k = 8;
// let arr = [9, 18, 17, 17, 6, 16, 13, 11, 15, 7];
// let k = 15;
// let arr = [2, 3, 2, 3, 2];
// let k = 1;
let arr = [1, 2, 1, 2];
let k = 1;

function countPairSumDifference(A, B) {
  console.log(A);
  let frequencyMap = new Map();
  for (let i = 0; i < A.length; i++) {
    let val = Number(A[i]);
    let frequencyCount = frequencyMap.get(val);
    if (frequencyCount) {
      frequencyMap.set(val, frequencyCount + 1);
    } else {
      frequencyMap.set(val, 1);
    }
  }

  console.log(frequencyMap);

  let count = 0;
  let mod = 1_000_000_007;
  for (let i = 0; i < A.length; i++) {
    let val = Number(A[i]);
    let requiredVal = B - val;

    //2nd point
    let frequency = frequencyMap.get(val);
    let frequencyCount = frequencyMap.get(requiredVal);
    if (frequencyCount) {
      //2nd point
      if (val === requiredVal) {
        frequencyCount--;
      }
      count = ((count % mod) + (frequencyCount % mod)) % mod;

      //2nd point
      frequencyMap.set(val, frequency - 1);
    }
  }

  return count;
}

/*
We can use a hash-map and store the elements of the array
as the key and its frequency as the value. 
We traverse the array from left to right.
Now, for every element we count the number of occurences of 
A[i] + B and A[i] - B to its left side and increment that to our answer.

Time Complexity : O(N)
Space Complexity : O(N)
*/

function countPairSumDifferenceEfficient(A, B) {
  // console.log(A);
  let count = 0;
  let mod = 1_000_000_007;

  let frequencyMap = new Map();
  for (let i = 0; i < A.length; i++) {
    let val = Number(A[i]);

    let requiredVal1 = val - B;
    let requiredFreqCount = frequencyMap.get(requiredVal1);
    if (requiredFreqCount) {
      count = ((count % mod) + (requiredFreqCount % mod)) % mod;
    }

    let requiredVal2 = val + B;
    requiredFreqCount = frequencyMap.get(requiredVal2);
    if (requiredFreqCount) {
      count = ((count % mod) + (requiredFreqCount % mod)) % mod;
    }

    let frequencyCount = frequencyMap.get(val);
    frequencyMap.set(val, frequencyCount ? frequencyCount + 1 : 1);
  }
  return count;
}
// let ans = countPairSumDifference(arr, k);
let ans = countPairSumDifferenceEfficient(arr, k);
console.log(ans);

// Java
// public class Solution {
//     public int solve(int[] A, int B) {
//         Map<Integer, Integer> freq = new HashMap<Integer, Integer>();
//         final int mod = (int)(1e9 + 7);
//         long ans = 0;
//         for(int i = 0 ; i < A.length ; i++){
//             ans += freq.getOrDefault(A[i] - B, 0) + freq.getOrDefault(A[i] + B, 0);
//             freq.put(A[i], freq.getOrDefault(A[i], 0) + 1);
//         }
//         return (int)(ans % mod);
//     }
// }
