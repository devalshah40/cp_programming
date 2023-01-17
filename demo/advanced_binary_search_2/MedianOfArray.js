/*
Problem Description
There are two sorted arrays A and B of sizes N and M respectively.

Find the median of the two sorted arrays ( The median of the array formed by merging both the arrays ).

NOTE:

The overall run time complexity should be O(log(m+n)).
IF the number of elements in the merged array is even, then the median is the average of (n/2)th and (n/2+1)th element. For example, if the array is [1 2 3 4], the median is (2 + 3) / 2.0 = 2.5.


Problem Constraints
1 <= N + M <= 2*106



Input Format
The first argument is an integer array A of size N.
The second argument is an integer array B of size M.



Output Format
Return a decimal value denoting the median of two sorted arrays.



Example Input
Input 1:

 A = [1, 4, 5]
 B = [2, 3]
Input 2:

 A = [1, 2, 3]
 B = [4]


Example Output
Output 1:

 3.0
Output 2:

 2.5


Example Explanation
Explanation 1:

 The median of both the sorted arrays will be 3.0.
Explanation 2:

 The median of both the sorted arrays will be (2+3)/2 = 2.5.
 */
function findMedianSortedArrays(A, B) {
  let totalLength = A.length + B.length;
  let s = 0;
  let e = A.length;
  if (A.length > B.length) return findMedianSortedArrays(B, A);
  while (s <= e) {
    let aLeft = s + ((e - s) >> 1);
    let bLeft = ((totalLength + 1) >> 1) - aLeft;

    let alm1 = aLeft === 0 ? Number.NEGATIVE_INFINITY : A[aLeft - 1];
    let al = aLeft === A.length ? Number.POSITIVE_INFINITY : A[aLeft];
    let blm1 = bLeft === 0 ? Number.NEGATIVE_INFINITY : B[bLeft - 1];
    let bl = bLeft === B.length ? Number.POSITIVE_INFINITY : B[bLeft];

    if (alm1 <= bl && blm1 <= al) {
      if ((totalLength & 1) === 0) {
        let left = Math.max(alm1, blm1);
        let right = Math.min(al, bl);
        return ((left + right) / 2).toFixed(1);
      } else {
        return Math.max(alm1, blm1).toFixed(1);
      }
    } else if (alm1 > bl) {
      e = aLeft - 1;
    } else {
      s = aLeft + 1;
    }
  }
}
let A = [1, 2, 3, 4];
let B = [5, 6, 7, 8];
let ans = findMedianSortedArrays(A, B);
console.log(ans);
