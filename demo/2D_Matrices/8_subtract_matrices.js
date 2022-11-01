/*
Problem Description

You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M). You have to subtract matrix B from A and return the resultant matrix. (i.e. return the matrix A - B).

If A and B are two matrices of the same order (same dimensions). Then A - B is a matrix of the same order as A and B and its elements are obtained by doing an element wise subtraction of A from B.


Problem Constraints

1 <= N, M <= 103

-109 <= A[i][j], B[i][j] <= 109



**Input Format**
There are 2 lines in the input
Line 1 ( Corresponds to arg 1 ) : 2 D array. First 2 integers R, C are the number of rows and columns. Then R * C integers follow corresponding to the rowwise numbers in the 2D array.
Line 2 ( Corresponds to arg 2 ) : 2 D array. First 2 integers R, C are the number of rows and columns. Then R * C integers follow corresponding to the rowwise numbers in the 2D array.


Output Format

Return a 2D matrix denoting A - B.



Example Input

Input 1:

3 3 1 2 3 4 5 6 7 8 9
3 3 9 8 7 6 5 4 3 2 1
Input 2:

1 2 1 1 
1 2 2 


Example Output

Output 1:

 [[-8, -6, -4],
  [-2, 0, 2],
  [4, 6, 8]]
Output 2:

 [[-1, -2]]


Example Explanation

Explanation 1:

 https://s3.ap-south-1.amazonaws.com/scaler-production-domestic/public_assets/assets/000/000/015/original/11463.png?1614376240
Explanation 2:

 [[1, 1]] - [[2, 3]] = [[1 - 2, 1 - 3]] = [[-1, -2]]
// */
// let sourceArr = [[2, 3, 1, 2, 3, 4, 5, 6]];
// let destinationArr = [[2, 3, 7, 8, 9, 10, 11, 12]];
let sourceArr = [[2, 1, 1, 2]];
let destinationArr = [[2, 1, 7, 8]];
function subtractMatrices(sourceArr, destinationArr) {
  sourceArr = sourceArr[0];
  destinationArr = destinationArr[0];
  let rows = sourceArr[0];
  let columns = sourceArr[1];
  let ansArr = Array.from(Array(rows), () => new Array(columns));
  let k = 2;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      ansArr[i][j] = sourceArr[k] - destinationArr[k];
      k++;
    }
  }
  return ansArr;
}
let ansArr = subtractMatrices(sourceArr, destinationArr);
console.table(ansArr);
