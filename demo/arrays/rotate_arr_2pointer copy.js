/*
Problem Description
Given an integer array A of size N and an integer B, you have to return the same array after rotating it B times towards the right.


Problem Constraints
1 <= N <= 105
1 <= A[i] <=109
1 <= B <= 109


Input Format
The first argument given is the integer array A.
The second argument given is the integer B.


Output Format
Return the array A after rotating it B times to the right


Example Input
Input 1:

A = [1, 2, 3, 4]
B = 2
Input 2:

A = [2, 5, 6]
B = 1


Example Output
Output 1:

[3, 4, 1, 2]
Output 2:

[6, 2, 5]


Example Explanation
Explanation 1:

Rotate towards the right 2 times - [1, 2, 3, 4] => [4, 1, 2, 3] => [3, 4, 1, 2]
Explanation 2:

Rotate towards the right 1 time - [2, 5, 6] => [6, 2, 5]

*/
let arr = [1, 2, 3, 4, 5, 6];
let rotateValue = 9;
rotateValue = rotateValue % arr.length;
function reverseArr(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
reverseArr(arr, 0, arr.length - 1);
console.log(arr);
reverseArr(arr, 0, rotateValue - 1);
console.log(arr);
reverseArr(arr, rotateValue, arr.length - 1);
console.log(arr);

// let N = 4;

// for (let i = N; i > 0; i /= 2) {
//   console.log(i);
//   let count = 0;
//   for (let j = 0; j < i; j++) {
//     count += 1;
//     console.log(count);
//   }
// }

// let N = 81 * 3;

// let count = 1;
// for (let i = 3; i < N / 3; i += 3) {
//   console.log(i);
//   count++;
//   // for(int j = 2 ; j < n / 2 ; j += 2){
//   //     // O(1) operation
//   // }
// }
// console.log(count);
// // 27 -> 3
// // 81 -> 9
// // 243 -> 27
