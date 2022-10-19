/*
  Given an array A and an integer B. 
  A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). 
  Check if any good pair exist or not. 
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
