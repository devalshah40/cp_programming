/*Q3. Level Order
Unsolved
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return a 2D integer array denoting the level order traversal of the given binary tree.



Example Input
Input 1:

    3
   / \
  9  20
    /  \
   15   7
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [
   [3],
   [9, 20],
   [15, 7]
 ]
Output 2:

 [ 
   [1]
   [6, 2]
   [3]
 ]


Example Explanation
Explanation 1:

 Return the 2D array. Each row denotes the traversal of each level.
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
  size() {
    return this.backIndex - this.frontIndex;
  }
  peek() {
    return this.items[this.frontIndex];
  }
  get printQueue() {
    return this.items;
  }
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let preOrderArr, inOrderArr;
// preOrderArr = [1, 2, 4, 8, 5, 3, 6, 7];
// inOrderArr = [4, 8, 2, 5, 1, 6, 3, 7];

preOrderArr = [8, 3, 1, 6, 4, 7, 10, 20, 13];
inOrderArr = [1, 3, 4, 6, 7, 8, 10, 13, 20];

const n = preOrderArr.length;
const preOrderMap = new Map(),
  inOrderMap = new Map();
for (let i = 0; i < preOrderArr.length; i++) {
  preOrderMap.set(preOrderArr[i], i);
}
for (let i = 0; i < inOrderArr.length; i++) {
  inOrderMap.set(inOrderArr[i], i);
}
let root = constructTreeInPreOrderTraversal(0, n - 1, 0, n - 1);
console.log(root);
let ans = levelOrderTraversal(root);
console.log(ans);

function constructTreeInPreOrderTraversal(sPre, ePre, sIn, eIn) {
  const root = new TreeNode(preOrderArr[sPre]);
  if (sIn > eIn) {
    return null;
  }
  const idX = inOrderMap.get(preOrderArr[sPre]);
  // ePre - sPre -1 + 1 = idX - 1 - sIn + 1;
  // ePre - sPre = idX - sIn;
  // ePre = idX - sIn + sPre;
  const numOfElements = idX - sIn;
  ePre = sPre + numOfElements;
  root.left = constructTreeInPreOrderTraversal(
    sPre + 1,
    sPre + numOfElements,
    sIn,
    idX - 1
  );
  root.right = constructTreeInPreOrderTraversal(
    sPre + numOfElements + 1,
    ePre,
    idX + 1,
    eIn
  );
  return root;
}

function levelOrderTraversal(root) {
  if (root === null) {
    return [];
  }
  const q = new Queue();
  q.enqueue(root);
  const ans = [];
  while (!q.isEmpty()) {
    const level = [];
    const size = q.size();

    for (let i = 0; i < size; i++) {
      const node = q.dequeue();
      level.push(node.data);

      if (node.left) {
        q.enqueue(node.left);
      }
      if (node.right) {
        q.enqueue(node.right);
      }
    }
    ans.push(level);
  }
  console.log(ans);
  return ans;
}
