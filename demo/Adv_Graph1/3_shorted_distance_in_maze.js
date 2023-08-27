/*
Q2. Shortest Distance in a Maze
Unsolved
feature icon
Using hints is now penalty free
Use Hint
Problem Description                   
Given a matrix of integers A of size N x M describing a maze. The maze consists of empty locations and walls.

1 represents a wall in a matrix and 0 represents an empty location in a wall.

There is a ball trapped in a maze. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall (maze boundary is also considered as a wall). When the ball stops, it could choose the next direction.

Given two array of integers of size B and C of size 2 denoting the starting and destination position of the ball.

Find the shortest distance for the ball to stop at the destination. The distance is defined by the number of empty spaces traveled by the ball from the starting position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.



Problem Constraints
2 <= N, M <= 100

0 <= A[i] <= 1

0 <= B[i][0], C[i][0] < N

0 <= B[i][1], C[i][1] < M



Input Format
The first argument given is the integer matrix A.

The second argument given is an array of integer B.

The third argument if an array of integer C.



Output Format
Return a single integer, the minimum distance required to reach destination



Example Input
Input 1:

A = [ [0, 0], 
      [0, 0] ]
B = [0, 0]
C = [0, 1]
Input 2:

A = [ [0, 1], 
      [1, 0] ]
B = [0, 0]
C = [1, 1]


Example Output
Output 1:

 1
Output 2:

 -1

Hint 1

We can observe that the ball will roll until it hits a wall. How can we use this to reach some conclusions?
We can definitely say that ball will roll only in one of 4 directions, this gives us only 4 options for each place.

Solution Approach
The problem is a variation of standard dijkstra algorithm.
Here, suppose the ball is at {x, y}. We will try all possible 4 directions and construct a weighted edge using simple traversal.

Once we have calculated the weighted edge, we can simply use standard dijkstra algorithm to continue.
We will repeat the above procedure until we reach the destination.

For implementation details, kindly refer to complete solution.

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
  isEmpty() {
    return this.frontIndex === this.backIndex;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}

function solve(matrix, B, C) {
  const N = matrix.length;
  const M = matrix[0].length;
  const timeArr = Array.from(Array(N), () =>
    Array.from(Array(M), () => Array(5).fill(0))
  );

  const [startI, startJ] = B;
  const [destI, destJ] = C;
  const q = new Queue();

  let arr = [
    [0, -1, 1],
    [1, 0, 0],
    [0, 1, 3],
    [-1, 0, 2],
  ];
  let arrIndex = {
    1: [0, -1, 1],
    0: [1, 0, 0],
    3: [0, 1, 3],
    2: [-1, 0, 2],
  };
  for (let k = 0; k < arr.length; k++) {
    const newI = startI + arr[k][0];
    const newJ = startJ + arr[k][1];
    const pathIndex = arr[k][2];
    if (
      !(
        newI < 0 ||
        newJ < 0 ||
        newI === N ||
        newJ === M ||
        matrix[newI][newJ] === 1 ||
        timeArr[newI][newJ][pathIndex] === 1
      )
    ) {
      const reversePathIndex = pathIndex >= 2 ? pathIndex - 2 : pathIndex + 2;
      timeArr[startI][startJ][reversePathIndex] = 1;
      timeArr[newI][newJ][pathIndex] = 1;
      timeArr[newI][newJ][4] = timeArr[startI][startJ][4] + 1;
      q.enqueue([newI, newJ, pathIndex]);
    }
  }

  let isBreak = false;
  while (!q.isEmpty() && !isBreak) {
    const [i, j, pathIndex] = q.dequeue();

    const newI = i + arrIndex[pathIndex][0];
    const newJ = j + arrIndex[pathIndex][1];
    if (
      i === destI &&
      j === destJ &&
      ((matrix[newI] && matrix[newI][newJ] === 1) ||
        newI < 0 ||
        newJ < 0 ||
        newI === N ||
        newJ === M)
    ) {
      isBreak = true;
      break;
    } else if (
      !(
        newI < 0 ||
        newJ < 0 ||
        newI === N ||
        newJ === M ||
        matrix[newI][newJ] === 1 ||
        timeArr[newI][newJ][pathIndex] === 1
      )
    ) {
      const reversePathIndex = pathIndex >= 2 ? pathIndex - 2 : pathIndex + 2;
      timeArr[i][j][reversePathIndex] = 1;
      timeArr[newI][newJ][pathIndex] = 1;
      timeArr[newI][newJ][4] = timeArr[i][j][4] + 1;
      q.enqueue([newI, newJ, pathIndex]);
    } else {
      for (let k = 0; k < arr.length; k++) {
        const newI = i + arr[k][0];
        const newJ = j + arr[k][1];
        const pathIndex = arr[k][2];
        if (
          i === destI &&
          j === destJ &&
          ((matrix[newI] && matrix[newI][newJ] === 1) ||
            newI < 0 ||
            newJ < 0 ||
            newI === N ||
            newJ === M)
        ) {
          isBreak = true;
          break;
        } else if (
          !(
            newI < 0 ||
            newJ < 0 ||
            newI === N ||
            newJ === M ||
            matrix[newI][newJ] === 1 ||
            timeArr[newI][newJ][pathIndex] === 1
          )
        ) {
          const reversePathIndex =
            pathIndex >= 2 ? pathIndex - 2 : pathIndex + 2;
          timeArr[i][j][reversePathIndex] = 1;
          timeArr[newI][newJ][pathIndex] = 1;
          timeArr[newI][newJ][4] = timeArr[i][j][4] + 1;
          q.enqueue([newI, newJ, pathIndex]);
        }
      }
    }
  }
  // console.table(timeArr);
  return isBreak === false
    ? -1
    : timeArr[C[0]][C[1]][4] === 0
    ? -1
    : timeArr[C[0]][C[1]][4];
}

let A;
// A = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 0, 0],
// ];
// B = [0, 0];
// C = [2, 2];

// A = [
//   [1, 1, 0, 1],
//   [0, 0, 0, 1],
//   [1, 0, 0, 1],
//   [0, 0, 1, 0],
// ];
// B = [1, 1];
// C = [2, 1];
// A = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [0, 0, 0],
//   [1, 0, 0],
// ];
// B = [1, 0];
// C = [2, 1];

// A = [
//   [1, 0, 1, 1],
//   [0, 1, 0, 0],
//   [1, 0, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ];
// B = [5, 0];
// C = [6, 2];

// A = [
//   [1, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0],
// ];
// B = [3, 1];
// C = [3, 0];

A = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
B = [2, 1];
C = [3, 1];

let ans = solve(A, B, C);

console.table(ans);

/*
Scaler JS solution

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;
class PriorityQueue {
    constructor(comparator = (a, b) => a[0] < b[0]) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}
const maxn = 100009;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function inside(x, y, n, m) {
    return (x >= 0 && x <= n - 1 && y >= 0 && y <= m - 1);
}
module.exports = {
    //param A : array of array of integers
    //param B : array of integers
    //param C : array of integers
    //return an integer
    solve: function (maze, start, destination) {
        let n = maze.length;
        let m = maze[0].length;
        let sx = start[0];
        let sy = start[1];
        let ex = destination[0];
        let ey = destination[1];
        let v = new Array(n);
        for (let i = 0; i < n; i++) {
            v[i] = new Array(m).fill(Infinity);
        }
        let pq = new PriorityQueue();
        let i;
        let d, d1;
        let x, y;
        let x1, y1;
        let x2, y2;
        pq.push([0, sx, sy]);

        while (pq.size() != 0 && v[ex][ey] == Infinity) {
            let temp = pq.pop();
            x = temp[1];
            y = temp[2];
            d = temp[0];
            if (v[x][y] != Infinity) {
                continue;
            } else {
                v[x][y] = d;
            }

            for (i = 0; i < 4; ++i) {
                x1 = x;
                y1 = y;
                d1 = 0;
                while (true) {
                    x2 = x1 + dx[i];
                    y2 = y1 + dy[i];
                    if (inside(x2, y2, n, m) == true && maze[x2][y2] == 0) {
                        x1 = x2;
                        y1 = y2;
                        ++d1;
                    } else {
                        break;
                    }
                }
                if (d1 > 0 && v[x1][y1] == Infinity) {
                    pq.push([d + d1, x1, y1]);
                }
            }
        }
        let res = -1;
        if (v[ex][ey] != Infinity)
            res = v[ex][ey];
        return res;
    }
};

JAVA

public class Solution {
    static int maxn = 100009;
    static int[] dx = new int[] { -1, 1, 0, 0 };
    static int[] dy = new int[] { 0, 0, -1, 1 };
    public static boolean inside(int x, int y, int n, int m) {
        return (x >= 0 && x <= n - 1 && y >= 0 && y <= m - 1);
    }
    public int solve(int[][] A, int[] B, int[] C) {
        return findMinDist(A, B, C);
    }
    public static int findMinDist(int[][] maze, int[] start, int[] destination) {
        int n = maze.length;
        int m = maze[0].length;
        int sx = start[0];
        int sy = start[1];
        int ex = destination[0];
        int ey = destination[1];
        int[][] v = new int[n][m];
        for (int[] row: v)
            Arrays.fill(row, Integer.MAX_VALUE);
        PriorityQueue < Pair > pq = new PriorityQueue < Pair > (new CustomComp());
        int i;
        int d, d1;
        int x, y;
        int x1, y1;
        int x2, y2;
        pq.offer(new Pair(0, sx, sy));
        while (pq.size() != 0 && v[ex][ey] == Integer.MAX_VALUE) {
            Pair temp = pq.poll();
            x = temp.b;
            y = temp.c;
            d = temp.a;
            if (v[x][y] != Integer.MAX_VALUE) {
                continue;
            } else {
                v[x][y] = d;
            }
            for (i = 0; i < 4; ++i) {
                x1 = x;
                y1 = y;
                d1 = 0;
                while (true) {
                    x2 = x1 + dx[i];
                    y2 = y1 + dy[i];
                    if (inside(x2, y2, n, m) == true && maze[x2][y2] == 0) {
                        x1 = x2;
                        y1 = y2;
                        ++d1;
                    } else {
                        break;
                    }
                }
                if (d1 > 0 && v[x1][y1] == Integer.MAX_VALUE) {
                    pq.offer(new Pair(d + d1, x1, y1));
                }
            }
        }
        int res = -1;
        if (v[ex][ey] != Integer.MAX_VALUE)
            res = v[ex][ey];
        return res;
    }
}
class Pair {
    int a, b, c;
    public Pair(int u, int v, int w) {
        this.a = u;
        this.b = v;
        this.c = w;
    }
}
class CustomComp implements Comparator < Pair > {
    @Override
    public int compare(Pair aa, Pair bb) {
        return aa.a - bb.a;
    }
}
*/
