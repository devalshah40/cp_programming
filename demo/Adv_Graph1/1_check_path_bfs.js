/*
Q1. Path in Directed Graph
Problem Description
Given an directed graph having A nodes labelled from 1 to A containing M edges given by matrix B of size M x 2such that there is a edge directed from node

B[i][0] to node B[i][1].

Find whether a path exists from node 1 to node A.

Return 1 if path exists else return 0.

NOTE:

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
Return 1 if path exists between node 1 to node A else return 0.



Example Input
Input 1:

 A = 5
 B = [  [1, 2], 
        [4, 1], 
        [2, 4], 
        [3, 4], 
        [5, 2], 
        [1, 3], ]
Input 2:

 A = 5
 B = [  [1, 2]
        [2, 3] 
        [3, 4] 
        [4, 5] ]


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 The given doens't contain any path from node 1 to node 5 so we will return 0.
Explanation 2:

 Path from node1 to node 5 is ( 1 -> 2 -> 3 -> 4 -> 5 ) so we will return 1.
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
  const g = Array.from(Array(N + 1), () => new Array());
  for (let i = 0; i < E.length; i++) {
    const [u, v] = E[i];
    g[u].push(v);
  }
  // console.table(g);

  const incoming = new Array(N + 1);

  const q = new Queue();
  q.enqueue(1);
  const vistited = [];

  while (!q.isEmpty()) {
    const cu = q.dequeue();

    for (let i = 0; i < g[cu]?.length; i++) {
      const cv = g[cu][i];
      if (!vistited[cv]) {
        vistited[cv] = true;
        q.enqueue(cv);
      }
    }
  }
  return !!vistited[N];
}

let N, E;
N = 5;
E = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
let ans = solve(N, E);
console.log(ans);
