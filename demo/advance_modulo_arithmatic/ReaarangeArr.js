/*
Given an array A of size N. Rearrange the given array so that A[i] becomes A[A[i]] with O(1) extra space.

Constraints:

1 <= N <= 5×104

0 <= A[i] <= N - 1

The elements of A are distinct

Input Format

The argument A is an array of integers

Example 1:

Input : [1, 0]
Return : [0, 1]
Example 2:

Input : [0, 2, 1, 3]
Return : [0, 1, 2, 3]
*/
/*
Solution Approach
If you had extra space to do it, the problem will be very easy.
Store a copy of Arr in B.

And then for every element, do Arr[i] = B[B[i]]

Lets restate what we just said for extra space :

If we could somehow store 2 numbers in every index ( that is, Arr[i] can contain the old value and the new value somehow ), then the problem becomes very easy.
NewValue of Arr[i] = OldValue of Arr[OldValue of Arr[i]]

Now, we will do a slight trick to encode 2 numbers in one index.
This trick assumes that N * N does not overflow.

1) Increase every Array element Arr[i] by (Arr[Arr[i]] % n)*n.
2) Divide every element by N.
Given a number as

   A = B + C * N   if ( B, C < N )
   A % N = B
   A / N = C
We use this fact to encode 2 numbers into each element of Arr.
*/
function reArrangeArr(A) {
  let N = A.length;
  for (let i = 0; i < N; i++) {
    A[i] = A[i] * N;
  }
  for (let i = 0; i < N; i++) {
    let index = A[i] / N;
    let destinationVal = A[index] / N;
    A[i] += destinationVal;
  }
  for (let i = 0; i < N; i++) {
    A[i] = parseInt(A[i] % N);
  }
  return A;
}

let A = [0, 2, 1, 3];
let ans = reArrangeArr(A);
console.log(ans);
