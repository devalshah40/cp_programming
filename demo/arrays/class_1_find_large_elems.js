/*
Problem Description
Given an array A of N integers. 
Count the number of elements that have at least 1 elements greater than itself.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109


Input Format
First and only argument is an array of integers A.


Output Format
Return the count of elements.


Example Input
Input 1:
A = [3, 1, 2]
Input 2:
A = [5, 5, 3]


Example Output
Output 1:
2
Output 2:
1


Example Explanation
Explanation 1:
The elements that have at least 1 element greater than itself are 1 and 2
Explanation 2:
The elements that have at least 1 element greater than itself is 3
*/
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
  // 2N iterations so 
  // TC :- O(N)
  // SC :- O(1)
*/
function findLargeElement(arr) {
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

  return arr.length - frequencyLargest;
}

/*
Approach 2 :- 
  Find max number and frequency in single loop
  // TC :- O(N)
  // SC :- O(1)
*/
function findLargeElementSingleLoop(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let frequencyLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      frequencyLargest = 1;
    } else if (arr[i] === largest) {
      frequencyLargest++;
    }
  }

  return arr.length - frequencyLargest;
}

// let ans = findLargeElement(arr);
let ans = findLargeElementSingleLoop(arr);
console.log(ans);
