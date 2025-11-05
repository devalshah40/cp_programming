/*
Problem Description
Given an integer array A of size N. Return 1 if the array can be arranged to form an arithmetic progression, otherwise return 0.

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.



Problem Constraints
2 <= N <= 105

-109 <= A[i] <= 109



Input Format
The first and only argument is an integer array A of size N.



Output Format
Return 1 if the array can be rearranged to form an arithmetic progression, otherwise return 0.



Example Input
Input 1:

 A = [3, 5, 1]
Input 2:

 A = [2, 4, 1]


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
Explanation 2:

 There is no way to reorder the elements to obtain an arithmetic progression.
*/
function isArithmeticProgression(arr) {
  if (arr.length <= 2) {
    return 1;
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
  let diff = arr[1] - arr[0];
  console.log(diff);
  for (let i = 2; i < arr.length; i++) {
    let currentDiff = arr[i] - arr[i - 1];
    console.log(currentDiff, arr[i], arr[i - 1]);
    if (currentDiff !== diff) {
      return 0;
    }
  }
  return 1;
}
// let arr = [3, 5, 1];
let arr = [
  -251, -305, -323, -53, -215, -143, -107, -161, -179, -431, -449, -17, -341,
  -413, -35, -125, -197, -377, -269, -71, -359, -89, -233, -287, -395,
];
let ans = isArithmeticProgression(arr);
console.log(ans);
