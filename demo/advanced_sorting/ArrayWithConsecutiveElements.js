/*
Problem Description
Given an array of positive integers A, check and return whether the array elements are consecutive or not.
NOTE: Try this with O(1) extra space.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return 1 if the array elements are consecutive else return 0.



Example Input
Input 1:

 A = [3, 2, 1, 4, 5]
Input 2:

 A = [1, 3, 2, 5]


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 As you can see all the elements are consecutive, so we return 1.
Explanation 2:

 Element 4 is missing, so we return 0.
 */
function isConsecutiveArr(A) {
  let minElement = A[0];
  for (let i = 1; i < A.length; i++) {
    minElement = Math.min(A[i], minElement);
  }
  for (let i = 0; i < A.length; i++) {
    let val = Math.abs(A[i]);
    let destIndex = val - minElement;
    if (A[destIndex]) {
      A[destIndex] = -1 * Math.abs(A[destIndex]);
    }
  }
  let isValid = true;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

let A = [3, 2, 1, 4, 5];
