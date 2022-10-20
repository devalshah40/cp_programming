/*
  How many elements are less than maximnum number
  answer = 6 
*/
let arr = [1, 2, 5, 8, 3, 4, 8, 6, 8];

/*
Approach 1 :- 
  Find max number. 
  Count frequency of max number like = 3
  Subtract max frequence from total array length
*/
let largest = Number.NEGATIVE_INFINITY;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] > largest) {
    largest = arr[index];
  }
}
let frequencyLargest = 0;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] === largest) {
    frequencyLargest++;
  }
}

let answer = arr.length - frequencyLargest;
