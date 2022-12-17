/*
Problem Description

Given an integer array arr containing N distinct integers, you have to find all the leaders in array arr.

An element is arr leader if it is strictly greater than all the elements to its right side.

NOTE:The rightmost element is always arr leader.



Problem Constraints

1 <= N <= 105

1 <= arr[i] <= 108



Input Format

First and only argument is an integer array arr.



Output Format

Return an integer array denoting all the leader elements of the array.

NOTE: Ordering in the output doesn't matter.



Example Input

Input 1:

 arr = [16, 17, 4, 3, 5, 2]
Input 2:

 arr = [1, 2]


Example Output

Output 1:

 [17, 2, 5]
Output 2:

 [2]


Example Explanation

Explanation 1:

 Element 17 is strictly greater than all the elements on the right side to it.
 Element 2 is strictly greater than all the elements on the right side to it.
 Element 5 is strictly greater than all the elements on the right side to it.
 So we will return this three elements i.e [17, 2, 5], we can also return [2, 5, 17] or [5, 2, 17] or any other ordering.
Explanation 2:

 Only 2 the rightmost element is the leader in the array.
*/

let arr = [16, 17, 4, 3, 5, 2];
// let n = arr.length;

// let answerArr = [arr[n - 1]];

// for (let i = n - 2; i >= 0; i--) {
//   const element = arr[i];

//   if (element > answerArr[0]) {
//     answerArr.unshift(element);
//   }
// }
let ans = [];
let n = arr.length;
ans.push(arr[n - 1]);

let max = arr[n - 1];

for (let i = n - 2; i >= 0; i--) {
  if (arr[i] > max) {
    max = arr[i];
    ans.push(arr[i]);
  }
}
console.log(ans);
