/*
Problem Description
You are given an integer array A. You have to find the second largest element/value in the array or report that no such element exists.


Problem Constraints
1 <= |A| <= 105

0 <= A[i] <= 109



Input Format
The first argument is an integer array A.



Output Format
Return the second largest element. If no such element exist then return -1.



Example Input
Input 1:

 A = [2, 1, 2] 
Input 2:

 A = [2]


Example Output
Output 1:

 1 
Output 2:

 -1 


Example Explanation
Explanation 1:

 First largest element = 2
 Second largest element = 1
Explanation 2:

 There is no second largest element in the array.
*/

let A = [13, 7, 16, 18, 14, 17, 18, 8, 10];
let secondLargest = -1;
let largest = -1;
for (let i = 0; i < A.length; i++) {
  if (A[i] > largest) {
    secondLargest = largest;
    largest = A[i];
  }
  if (A[i] < largest && A[i] > secondLargest) {
    secondLargest = A[i];
  }
}
console.log(largest, ' ', secondLargest);
