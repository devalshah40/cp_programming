/*
Problem Description
Given an array of integers A. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. Find the total number of inversions of A modulo (109 + 7).



Problem Constraints
1 <= length of the array <= 100000

1 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return the number of inversions of A modulo (109 + 7).



Example Input
Input 1:

A = [3, 2, 1]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:

3
Output 2:

0


Example Explanation
Explanation 1:

 All pairs are inversions.
Explanation 2:

 No inversions.
 */
// let A = [10, 3, 8, 15, 6, 12, 2, 18, 7, 1];
// let A = [5, 10, 15, 25, 50];
let A = [45, 10, 15, 25, 50];
let mod = 1_000_000_007;
function mergeSort(A, l, r) {
  // Keeps track of the inversion count at a
  // particular node of the recursion
  let count = 0;
  if (l === r) {
    return 0;
  }
  let mid = l + parseInt((r - l) / 2);
  count += mergeSort(A, l, mid);
  count += mergeSort(A, mid + 1, r);
  count += merge(A, l, mid, r);

  // count = ((count % mod) + (mergeSort(A, l, mid) % mod)) % mod;
  // count = ((count % mod) + (mergeSort(A, mid + 1, r) % mod)) % mod;
  // count = ((count % mod) + (merge(A, l, mid, r) % mod)) % mod;
  return count;
}

function merge(A, l, mid, r) {
  let C = Array(r - l + 1);
  let k = 0,
    i = l,
    j = mid + 1,
    inversionCount = 0;

  while (i <= mid && j <= r) {
    if (A[i] > A[j]) {
      inversionCount += mid - i + 1;
      C[k] = A[j];
      k++;
      j++;
    } else {
      C[k] = A[i];
      k++;
      i++;
    }
  }
  while (i <= mid) {
    C[k] = A[i];
    k++;
    i++;
  }
  while (j <= r) {
    C[k] = A[j];
    k++;
    j++;
  }

  for (let x = l; x <= r; x++) {
    A[x] = C[x - l];
  }
  return inversionCount;
}
let ans = mergeSort(A, 0, A.length - 1);
console.log(ans);
