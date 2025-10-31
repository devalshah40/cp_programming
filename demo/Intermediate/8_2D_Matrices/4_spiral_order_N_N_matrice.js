/*
  Problem Description
Given an integer A, generate a square matrix filled with 
elements from 1 to A2 in spiral order and return the generated square matrix.

Problem Constraints
1 <= A <= 1000



Input Format
First and only argument is integer A


Output Format
Return a 2-D matrix which consists of the elements added in spiral order.



Example Input
Input 1:

1
Input 2:

2
Input 3:

5


Example Output
Output 1:

[ [1] ]
Output 2:

[ [1, 2], [4, 3] ]
Output 2:

[ [1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9] ]


Example Explanation
Explanation 1:

Only 1 is to be arranged.
Explanation 2:

1 --> 2
      |
      |
4<--- 3

*/
function spiralPrintN_N() {
  let arr = [
    [4, 3, 1, 7, 8],
    [2, 5, 8, 6, 9],
    [9, 1, 3, 4, 10],
    [1, 5, 8, 6, 11],
    [1, 5, 8, 6, 12],
  ];

  let n = arr.length;

  let r = 0,
    c = 0;
  while (n > 1) {
    for (let k = 0; k < n - 1; k++) {
      console.log(arr[r][c]);
      c++;
    }
    console.log(r, ' ', c);
    for (let k = 0; k < n - 1; k++) {
      console.log(arr[r][c]);
      r++;
    }
    console.log(r, ' ', c);
    for (let k = 0; k < n - 1; k++) {
      console.log(arr[r][c]);
      c--;
    }
    console.log(r, ' ', c);
    for (let k = 0; k < n - 1; k++) {
      console.log(arr[r][c]);
      r--;
    }
    console.log(r, ' ', c);
    r++;
    c++;
    n = n - 2;
  }
  console.log(r, ' ', c);
  if (n === 1) {
    console.log(arr[r][c]);
  }
}
function spiralReturnN_N() {
  let n = 5;

  let ansArr = Array.from(Array(n), () => new Array(n));
  let val = 1;
  let r = 0,
    c = 0;
  while (n > 1) {
    for (let k = 0; k < n - 1; k++) {
      ansArr[r][c] = val;
      val++;
      c++;
    }
    console.log(r, ' ', c);
    for (let k = 0; k < n - 1; k++) {
      ansArr[r][c] = val;
      val++;
      r++;
    }
    console.log(r, ' ', c);
    for (let k = 0; k < n - 1; k++) {
      ansArr[r][c] = val;
      val++;
      c--;
    }
    console.log(r, ' ', c);
    for (let k = 0; k < n - 1; k++) {
      ansArr[r][c] = val;
      val++;
      r--;
    }
    console.log(r, ' ', c);
    r++;
    c++;
    n = n - 2;
  }
  console.log(r, ' ', c);
  if (n === 1) {
    ansArr[r][c] = val;
    val++;
  }
  return ansArr;
}
// spiralPrintN_N();
let arr = spiralReturnN_N();
console.table(arr);
