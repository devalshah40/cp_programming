/*
Problem Description
You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.



Problem Constraints
1 <= A.size() <= 103

1 <= A[i].size() <= 103

0 <= A[i][j] <= 103



Input Format
First argument is a vector of vector of integers.(2D matrix).



Output Format
Return a vector of vector after doing required operations.



Example Input
Input 1:

[1,2,3,4]
[5,6,7,0]
[9,2,0,4]


Example Output
Output 1:

[1,2,0,0]
[0,0,0,0]
[0,0,0,0]


Example Explanation
Explanation 1:

A[2][4] = A[3][3] = 0, so make 2nd row, 3rd row, 3rd column and 4th column zero.

// */
let arr = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 0],
  [10, 11, 12, 13],
];
function makeRowColumnsZero(arr) {
  let i = 0;

  let rowLength = arr.length,
    columnLength = arr[0].length;
  let ansArr = Array.from(Array(rowLength), () => new Array(columnLength));
  while (i < rowLength) {
    let j = 0;
    while (j < columnLength) {
      if (arr[i][j] === 0) {
        let rows = i;
        let columns = j;
        for (let k = 0; k < rowLength; k++) {
          ansArr[k][columns] = 0;
        }
        for (let l = 0; l < columnLength; l++) {
          ansArr[rows][l] = 0;
        }
      } else {
        if (ansArr[i][j] !== 0) {
          ansArr[i][j] = arr[i][j];
        }
      }
      j++;
    }
    i++;
  }
  return ansArr;
}

function makeRowColumnsZeroEfficient(arr) {
  let rowLength = arr.length,
    columnLength = arr[0].length;
  for (let i = 0; i < rowLength; i++) {
    let flag = 0;
    for (let j = 0; j < columnLength; j++) {
      if (arr[i][j] == 0) flag = 1;
    }
    if (flag == 1) {
      for (let j = 0; j < columnLength; j++) {
        if (arr[i][j] != 0) arr[i][j] = -1;
      }
    }
  }
  for (let j = 0; j < columnLength; j++) {
    let flag = 0;
    for (let i = 0; i < rowLength; i++) {
      if (arr[i][j] == 0) flag = 1;
    }
    if (flag == 1) {
      for (let i = 0; i < rowLength; i++) {
        if (arr[i][j] != 0) arr[i][j] = -1;
      }
    }
  }
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (arr[i][j] == -1) arr[i][j] = 0;
    }
  }
  return arr;
}

let ansArr = makeRowColumnsZero(arr);
console.table(ansArr);
