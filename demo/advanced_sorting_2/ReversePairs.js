/*
Problem Description
Given an array of integers A, we call (i, j) an important reverse pair if i < j and A[i] > 2*A[j].
Return the number of important reverse pairs in the given array A.



Problem Constraints
1 <= length of the array <= 105

-2 * 109 <= A[i] <= 2 * 109



Input Format
The only argument given is the integer array A.



Output Format
Return the number of important reverse pairs in the given array A.



Example Input
Input 1:

 A = [1, 3, 2, 3, 1]
Input 2:

 A = [4, 1, 2]


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 There are two pairs which are important reverse i.e (3, 1) and (3, 1).
Explanation 2:

 There is only one pair i.e (4, 1).

 */
/*
We can use two loops and calculate the number of pairs that satisfy the condition, but the time complexity will be O(N^2), which will not work in the worst case.

So we can think of a better solution, i.e., using merge sort.
We will do a usual merge sort, but before calling the merge function, we will calculate the number of pairs using two pointers, considering that the two arrays are sorted individually.

Likewise, we will do this till our mergesort ends, i.e., the array becomes sorted.
*/

// let A = [5, 3, 1, 2];
// 4
let A = [1, 3, 2, 3, 1];

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
    if (A[i] > 2 * A[j]) {
      inversionCount += mid - i + 1;
      j++;
    } else {
      i++;
    }
  }

  i = l;
  j = mid + 1;
  while (i <= mid && j <= r) {
    if (A[i] > A[j]) {
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
console.log(A);
console.log(ans);
