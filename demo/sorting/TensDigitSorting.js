/*
Problem Description
Given an array A of N integers. Sort the array in increasing order of the value at the tens place digit of every number.

If a number has no tens digit, we can assume value to be 0.
If 2 numbers have same tens digit, in that case number with max value will come first
Solution should be based on comparator.


Problem Constraints
1 <= N <= 105

1 <= A[i] <= 109



Input Format
First argument A is an array of integers.



Output Format
Return the array after sorting



Example Input
Input 1:
A = [15, 11, 7, 19]
Input 2:
A = [2, 24, 22, 19]


Example Output
Output 1:
[7, 19, 15, 11]
Output 2:
[2, 19, 24, 22]


Example Explanation
For Input 1:
The sorted order is [7, 19, 15, 11]. The tens digit of 7 is 0, 
and that of 19, 15 and 11 is 1.
For Input 2:
The sorted order is [2, 19, 24, 22]. The tens digit of 2 is 0, 
that of 19 is 1 and that of 22 and 24 is 2.
*/
function sortBy10thDigit(A) {
  A.sort((a, b) => {
    let firstTenth = a.toString().slice(-2, -1);
    let secondTenth = b.toString().slice(-2, -1);

    firstTenth = firstTenth === '' ? 0 : +firstTenth;
    secondTenth = secondTenth === '' ? 0 : +secondTenth;

    if (firstTenth === secondTenth) {
      return a > b;
    } else {
      return firstTenth > secondTenth ? 1 : -1;
    }
  });
  return A;
}

function sortBy10thDigitScaler(A) {
  A.sort((a, b) => {
    // (135 / 10) = 13. 13 % 10 = 3.
    let firstTenth = parseInt(a / 10) % 10;
    let secondTenth = parseInt(b / 10) % 10;

    if (firstTenth === secondTenth) {
      return b - a;
    }
    return firstTenth - secondTenth;
  });
  return A;
}
let A = [36, 63, 63, 26, 87, 28, 77, 93, 7];
// let A = [26, 63];
// sortBy10thDigit(A);
sortBy10thDigitScaler(A);
console.log(A);
