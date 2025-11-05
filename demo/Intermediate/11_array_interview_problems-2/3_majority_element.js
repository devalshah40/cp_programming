/*
Q4. Majority Element

Problem Description
Given an array of size N, find the majority element. The majority element is the element that appears more than floor(n/2) times.
You may assume that the array is non-empty and the majority element always exists in the array.

Problem Constraints
1 <= N <= 5*105
1 <= num[i] <= 109

Input Format
Only argument is an integer array.

Output Format
Return an integer.

Example Input
[2, 1, 2]

Example Output
2

Example Explanation
2 occurs 2 times which is greater than 3/2.
*/

// let arr = [2, 1, 6, 4];
let arr = [1, 2, 1, 7, 1, 1, 3];
// let arr = [1, 1, 1];

let n = arr.length;
let majorityElement = arr[0];
let frequency = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === majorityElement) {
    frequency++;
  } else {
    if (frequency === 0) {
      majorityElement = arr[i];
      frequency++;
    } else {
      frequency--;
    }
  }
}

let count = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] === majorityElement) {
    count++;
  }
}

if (count > n / 2) {
  console.log(majorityElement);
} else {
  console.log(-1);
}
