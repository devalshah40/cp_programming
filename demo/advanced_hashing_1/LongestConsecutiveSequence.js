/*
Problem Description
Given an unsorted integer array A of size N.

Find the length of the longest set of consecutive elements from array A.



Problem Constraints
1 <= N <= 106

-106 <= A[i] <= 106



Input Format
First argument is an integer array A of size N.



Output Format
Return an integer denoting the length of the longest set of consecutive elements from the array A.



Example Input
Input 1:

A = [100, 4, 200, 1, 3, 2]
Input 2:

A = [2, 1]


Example Output
Output 1:

 4
Output 2:

 2


Example Explanation
Explanation 1:

 The set of consecutive elements will be [1, 2, 3, 4].
Explanation 2:

 The set of consecutive elements will be [1, 2].

 */
/*
Solution Approach
One solution is to sort the elements and then find the longest subarray with consecutive elements. But this will take O(NlogN).

An efficient way is to use hashing.

First, create an empty hash, and for each element, we insert and update the hash table and maxCount.

We only insert the element which is not yet inserted.
Calculate the lcount, i.e., the longest consecutive element till the current element - 1.
Calculate the rcount, i.e., the longest consecutive element from the current element + 1.

Update hMap[ele] (current element) = lcount + 1 + rcount.

Also, update the maxCount.
*/

function solve(A) {
  const set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }
  let ans = 0;
  for (const val of set) {
    let currentVal = val;
    let len = 0;
    if (!set.has(currentVal - 1)) {
      while (set.has(currentVal)) {
        currentVal++;
        len++;
      }
    }
    ans = Math.max(ans, len);
  }
  return ans;
}

function longestConsecutive(A) {
  let mp = new Map();
  let maxCount = 0;
  for (let ele of A) {
    if (!mp.has(ele)) {
      let lCount = 0;
      let rCount = 0;
      // lCount stores longest consecutive element till the current element - 1
      if (mp.has(ele - 1)) {
        lCount = mp.get(ele - 1);
      }
      // rCount stores longest consecutive element from the current element + 1
      if (mp.has(ele + 1)) {
        rCount = mp.get(ele + 1);
      }
      mp.set(ele, lCount + 1 + rCount);
      mp.set(ele - lCount, mp.get(ele));
      mp.set(ele + rCount, mp.get(ele));
      if (maxCount < lCount + 1 + rCount) {
        maxCount = lCount + 1 + rCount;
      }
    }
  }
  return maxCount;
}

let A = [1, 2, 3, 4, 100];
// let ans = solve(A);
let ans = longestConsecutive(A);
console.log(ans);
