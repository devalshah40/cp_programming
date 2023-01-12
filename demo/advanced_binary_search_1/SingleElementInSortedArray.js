/*
Problem Description
Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

NOTE: Users are expected to solve this in O(log(N)) time.



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return the single element that appears only once.



Example Input
Input 1:

A = [1, 1, 7]
Input 2:

A = [2, 3, 3]


Example Output
Output 1:

 7
Output 2:

 2


Example Explanation
Explanation 1:

 7 appears once
Explanation 2:

 2 appears once
 */
let A = [1, 1, 2, 3, 3, 4, 4, 5, 5];

function singleElementInSortedArr(A) {
  let n = A.length;
  let s = 0;
  let e = n - 1;

  while (s <= e) {
    let mid = s + ((e - s) >>> 1);

    // if (A[mid] === B) {
    //   return mid;
    // } else
    if ((mid & 1) === 0 && A[mid] === A[mid + 1]) {
      s = mid + 2;
    } else if ((mid & 1) === 1 && A[mid] === A[mid - 1]) {
      e = mid - 2;
    }
  }
  return s;
}
let ans = singleElementInSortedArr(A);
