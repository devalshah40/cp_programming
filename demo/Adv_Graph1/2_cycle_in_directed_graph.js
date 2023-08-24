/*
Q3. Cycle in Directed Graph
Unsolved
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given an directed graph having A nodes. A matrix B of size M x 2 is given which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].

Find whether the graph contains a cycle or not, return 1 if cycle is present else return 0.

NOTE:

The cycle must contain atleast two nodes.
There are no self-loops in the graph.
There are no multiple edges between two nodes.
The graph may or may not be connected.
Nodes are numbered from 1 to A.
Your solution will run on multiple test cases. If you are using global variables make sure to clear them.


Problem Constraints
2 <= A <= 105

1 <= M <= min(200000,A*(A-1))

1 <= B[i][0], B[i][1] <= A



Input Format
The first argument given is an integer A representing the number of nodes in the graph.

The second argument given a matrix B of size M x 2 which represents the M edges such that there is a edge directed from node B[i][0] to node B[i][1].



Output Format
Return 1 if cycle is present else return 0.



Example Input
Input 1:

 A = 5
 B = [  [1, 2] 
        [4, 1], 
        [2, 4], 
        [3, 4], 
        [5, 2], 
        [1, 3] ]
Input 2:

 A = 5
 B = [  [1, 2]
        [2, 3] 
        [3, 4] 
        [4, 5] ]


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 The given graph contain cycle 1 -> 3 -> 4 -> 1 or the cycle 1 -> 2 -> 4 -> 1
Explanation 2:

 The given graph doesn't contain any cycle.
 */

//Idea
/*
Do topological sorting. If antany point in time, dependecy isn't resolved to 0 then there is cycle.
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

function solve(N, E) {
  const incomingArr = Array(N + 1).fill(0);
  const g = Array.from(Array(N + 1), () => new Array());
  for (let i = 0; i < E.length; i++) {
    const [u, v] = E[i];
    g[u].push(v);
    incomingArr[v]++;
  }
  const q = new Queue();
  for (let i = 1; i <= N; i++) {
    if (incomingArr[i] === 0) {
      q.enqueue(i);
    }
  }
  while (!q.isEmpty()) {
    const cu = q.dequeue();

    for (let i = 0; i < g[cu].length; i++) {
      const cv = g[cu][i];
      incomingArr[cv]--;

      if (incomingArr[cv] === 0) {
        q.enqueue(cv);
      }
    }
  }
  let isCycle = 0;
  for (let i = 1; i <= N; i++) {
    if (incomingArr[i] > 0) {
      isCycle = 1;
    }
  }
  return isCycle;
}

let N, E;
// N = 5;
// E = [
//   [1, 2],
//   [4, 1],
//   [2, 4],
//   [3, 4],
//   [5, 2],
//   [1, 3],
// ];

N = 2;
E = [[1, 2]];

let ans = solve(N, E);
console.log(ans);
