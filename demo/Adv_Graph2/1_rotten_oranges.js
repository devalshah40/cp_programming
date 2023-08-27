/*
Q1. Rotten Oranges
Attempted
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given a matrix of integers A of size N x M consisting of 0, 1 or 2.

Each cell can have three values:

The value 0 representing an empty cell.

The value 1 representing a fresh orange.

The value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (Left, Right, Top, or Bottom) to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1 instead.

Note: Your solution will run on multiple test cases. If you are using global variables, make sure to clear them.



Problem Constraints
1 <= N, M <= 1000

0 <= A[i][j] <= 2



Input Format
The first argument given is the integer matrix A.



Output Format
Return the minimum number of minutes that must elapse until no cell has a fresh orange.

If this is impossible, return -1 instead.



Example Input
Input 1:

A = [   [2, 1, 1]
        [1, 1, 0]
        [0, 1, 1]   ]
Input 2:

 
A = [   [2, 1, 1]
        [0, 1, 1]
        [1, 0, 1]   ]


Example Output
Output 1:

 4
Output 2:

 -1


Example Explanation
Explanation 1:

Minute 0: [ [2, 1, 1]
            [1, 1, 0]
            [0, 1, 1] ]
Minute 1: [ [2, 2, 1]
            [2, 1, 0]
            [0, 1, 1] ]
Minute 2: [ [2, 2, 2]
            [2, 2, 0]
            [0, 1, 1] ]
Minute 3: [ [2, 2, 2]
            [2, 2, 0]
            [0, 2, 1] ]
Minute 4: [ [2, 2, 2]
            [2, 2, 0]
            [0, 2, 2] ]
At Minute 4, all the oranges are rotten.
Explanation 2:

The fresh orange at 2nd row and 0th column cannot be rotten, So return -1.
*/
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
    return item + ' inserted';
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
  /**
   * @return {boolean}
   */
  isEmpty() {
    return Object.keys(this.items).length === 0;
  }
}
function solve(A) {
  const N = A.length;
  const M = A[0].length;
  const newTimeArr = new Array(N).map((_) => new Array(M).fill(-1));

  const q = new Queue();
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      const element = A[row][col];
      if (element === 2) {
        q.enqueue({
          row,
          col,
        });
        newTimeArr[row][col] = 0;
        A[row][col] = 1;
      }
    }
  }

  while (!q.isEmpty()) {
    const { row, col } = q.dequeue();
    dfs(row, col, newTimeArr[row][col]);
  }

  // function dfs(i, j, newTime) {
  //   if (
  //     i === -1 ||
  //     j === -1 ||
  //     i === N ||
  //     j === M ||
  //     A[i][j] === 0 ||
  //     A[i][j] === 2
  //   ) {
  //     return;
  //   }
  //   newTimeArr[i][j] = newTime;
  //   A[i][j] = 2;
  //   const updatedTime = newTime + 1;

  //   dfs(i + 1, j, updatedTime);
  //   dfs(i - 1, j, updatedTime);
  //   dfs(i, j + 1, updatedTime);
  //   dfs(i, j - 1, updatedTime);
  // }
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      const element = A[row][col];
      if (element === 1) {
        return -1;
      }
    }
  }
  let max = -1;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      const element = newTimeArr[row][col];
      max = Math.max(element, max);
    }
  }
  return max;
}
