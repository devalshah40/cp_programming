/*
Problem Description
Given two integer arrays, A and B of size N and M, respectively. Your task is to find all the common elements in both the array.

NOTE:

Each element in the result should appear as many times as it appears in both arrays.
The result can be in any order.


Problem Constraints
1 <= N, M <= 105

1 <= A[i] <= 109



Input Format
First argument is an integer array A of size N.

Second argument is an integer array B of size M.



Output Format
Return an integer array denoting the common elements.



Example Input
Input 1:

 A = [1, 2, 2, 1]
 B = [2, 3, 1, 2]
Input 2:

 A = [2, 1, 4, 10]
 B = [3, 6, 2, 10, 10]


Example Output
Output 1:

 [1, 2, 2]
Output 2:

 [2, 10]


Example Explanation
Explanation 1:

 Elements (1, 2, 2) appears in both the array. Note 2 appears twice in both the array.
Explantion 2:

 Elements (2, 10) appears in both the array.

 */
function commonElements(A, B) {
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    let val = A[i];
    let frequency = map.get(val);
    if (frequency) {
      map.set(val, frequency + 1);
    } else {
      map.set(val, 1);
    }
  }
  let commonMap = new Map();
  for (let i = 0; i < B.length; i++) {
    let val = B[i];
    let frequency = map.get(val);
    let commonFrequency = commonMap.get(val);
    if (frequency) {
      map.set(val, frequency - 1);
      if (commonFrequency) {
        commonMap.set(val, commonFrequency + 1);
      } else {
        commonMap.set(val, 1);
      }
    }
  }
  for (const [key, value] of commonMap) {
    for (let i = 0; i < value; i++) {
      console.log(key);
    }
  }
}

function commonElements2(A, B) {
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    let val = A[i];
    let frequency = map.get(val);
    if (frequency) {
      map.set(val, frequency + 1);
    } else {
      map.set(val, 1);
    }
  }
  for (let i = 0; i < B.length; i++) {
    let val = B[i];
    let frequency = map.get(val);
    if (frequency) {
      map.set(val, frequency - 1);
      console.log(val);
    }
  }
}

let A = [1, 2, 2, 1];
let B = [2, 3, 1, 2];
// let ans = commonElements(A, B);
let ans = commonElements2(A, B);
