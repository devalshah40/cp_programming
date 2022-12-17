/*
Problem Description
Given an array of integers A and multiple values in B, which represents the number of times array A needs to be left rotated.

Find the rotated array for each value and return the result in the from of a matrix where ith row represents the rotated array for the ith value in B.


Problem Constraints
1 <= length of both arrays <= 2000 -10^9 <= A[i] <= 10^9 0 <= B[i] <= 2000


Input Format
The first argument given is the integer array A.
The second argument given is the integer array B.


Output Format
Return the resultant matrix.


Example Input
Input 1:
 
    A = [1, 2, 3, 4, 5]
    B = [2, 3]

Input 2:

  
    A = [5, 17, 100, 11]
    B = [1]




Example Output
Output 1:
 
    [ [3, 4, 5, 1, 2]
     [4, 5, 1, 2, 3] ]


Output 2:

    
    [ [17, 100, 11, 5] ]



Example Explanation
for input 1 -> B[0] = 2 which requires 2 times left rotations

1: [2, 3, 4, 5, 1]

2: [3, 4, 5, 1, 2]

B[1] = 3 which requires 3 times left rotation

1: [2, 3, 4, 5, 1]

2: [3, 4, 5, 1, 2]

2: [4, 5, 1, 2, 4]
*/

// Time : O(m*2n) -> O(m*n)
// Space :- O(1)
let obj = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  reverseArr: function (arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  },
  solve: function (arr, rotationArr) {
    let ansArr = [];
    let n = arr.length;
    let m = rotationArr.length;
    for (let i = 0; i < rotationArr.length; i++) {
      let tempArr = [...arr];
      let rotateValue = rotationArr[i];
      rotateValue = rotateValue % n;

      // n iteration
      this.reverseArr(tempArr, 0, n - 1);
      console.log(tempArr);

      // n-rotate interations
      this.reverseArr(tempArr, n - rotateValue, n - 1);
      console.log(tempArr);
      // 0-rotate interations -> total n interation
      this.reverseArr(tempArr, 0, n - rotateValue - 1);
      console.log(tempArr);
      ansArr.push(tempArr);
    }

    return ansArr;
  },
};
let arr = [1, 2, 3, 4, 5];
let rotationArr = [2, 3];
// let ansArr = obj.solve(arr, rotationArr);
let ansArr = efficientSolution(arr, rotationArr);
console.log(ansArr);

// Time : O(m*n)
// Space :- O(n)
function efficientSolution(A, B) {
  let ans = [];
  let m = B.length;
  let n = A.length;
  for (let i = 0; i < m; i++) {
    let index = B[i] % n;
    let temp = [];

    for (let j = index; j < n; j++) temp.push(A[j]);
    for (let j = 0; j < index; j++) temp.push(A[j]);
    ans.push(temp);
  }
  return ans;
}
