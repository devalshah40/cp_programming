/*
Problem Description
You are given an array A of N integers. 
Return the count of elements with frequncy 1 in the given array.

Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109


Input Format
First argument A is an array of integers.


Output Format
Return an integer.


Example Input
Input 1:
A = [3, 4, 3, 6, 6]
Input 2:
A = [3, 3, 3, 9, 0, 1, 0]


Example Output
Output 1:
1
Output 2:
2


Example Explanation
For Input 1:
Only the element 4 has a frequency 1.
For Input 2:
The elements 9 and 1 has a frequncy 1.
*/
function countUniqueElements2(A) {
  let map = new Map();

  for (let i = 0; i < A.length; i++) {
    let val = A[i];

    let frequency = map.get(val);
    if (frequency) {
      map.set(A[i], frequency + 1);
    } else {
      map.set(A[i], 1);
    }
  }
  let count1s = 0;
  for (const [key, value] of map) {
    if (value === 1) {
      count1s++;
    }
  }
  return count1s;
}

let arr = [3, 3, 3, 9, 0, 1, 0];
let ans = countUniqueElements2(arr);
console.log(ans);
