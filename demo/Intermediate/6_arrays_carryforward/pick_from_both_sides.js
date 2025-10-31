/*
Problem Description
You are given an integer array A of size N.

You have to pick B elements in total. Some (possibly 0) elements from left end of array A and some (possibly 0) from the right end of array A to get the maximum sum.

Find and return this maximum possible sum.

NOTE: Suppose B = 4, and array A contains 10 elements, then

You can pick the first four elements or can pick the last four elements, or can pick 1 from front and 3 from the back, etc. You need to return the maximum possible sum of elements you can pick.


Problem Constraints
1 <= N <= 105

1 <= B <= N

-103 <= A[i] <= 103



Input Format
First argument is an integer array A.

Second argument is an integer B.



Output Format
Return an integer denoting the maximum possible sum of elements you picked.



Example Input
Input 1:

 A = [5, -2, 3 , 1, 2]
 B = 3
Input 2:

 A = [1, 2]
 B = 1


Example Output
Output 1:

 8
Output 2:

 2


Example Explanation
Explanation 1:

 Pick element 5 from front and element (1, 2) from back so we get 5 + 1 + 2 = 8
Explanation 2:

 Pick element 2 from end as this is the maximum we can get
 */

//param A : array of integers
//return an integer
// Optimized version
function pickMaxElements(A, B) {
  let maxSum = 0;
  let curSum = 0;
  let indexCount = 0;

  let n = A.length;

  for (let i = B - 1; i >= 0; i--) {
    const element = A[i];
    curSum = curSum + element;
  }

  maxSum = curSum;

  for (let i = n - 1; i >= n - B; i--) {
    const element = A[i];
    curSum = curSum + element - A[B - indexCount - 1];
    maxSum = Math.max(curSum, maxSum);
    indexCount++;
  }
  return maxSum;
}

//param A : array of integers
//return an integer
function pickMaxElementsScalerApproach(A, B) {
  let sum = 0,
    ans = 0;
  for (let i = 0; i < B; i++) sum += A[i];

  ans = sum;
  let ri = A.length - 1,
    le = B - 1;
  while (le >= 0) {
    sum -= A[le];
    sum += A[ri];
    ans = Math.max(ans, sum);
    le--;
    ri--;
  }
  return ans;
}

// let A = [0, 1, 0, 1];
// let A = [5, 4, 3, 2, 1, 0];
let A = [5, -2, 1, 4, 3, 1, 2];
// let A = [0, 1, 2, 3, 4, 5];

let maxElements = 3;
// console.log(pickMaxElements(A, maxElements));
console.log(pickMaxElementsScalerApproach(A, maxElements));
