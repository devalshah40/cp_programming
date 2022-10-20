/*
  Given an array A and an integer B. 
  A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). 
  Check if any good pair exist or not. 
*/
let arr = [1, 2, 5, 8, 3, 4, 8, 6, 8];

function reverseArr(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
