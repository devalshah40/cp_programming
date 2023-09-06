/*
Q3. Postorder Traversal
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Given a binary tree, return the Postorder traversal of its nodes values.

NOTE: Using recursion is not allowed.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the Postorder traversal of the given binary tree.



Example Input
Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [3, 2, 1]
Output 2:

 [6, 3, 2, 1]


Example Explanation
Explanation 1:

 The Postorder Traversal of the given tree is [3, 2, 1].
Explanation 2:

 The Postorder Traversal of the given tree is [6, 3, 2, 1].
 */

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }
const Stack = require('../data-structures/Stack');

// leetcode.com/problems/binary-tree-postorder-traversal/solutions/45648/three-ways-of-iterative-postorder-traversing-easy-explanation/
function postOrderTraversalScaler(root) {
  let ans = [];
  let stack = new Stack();
  let currNode = root;
  let pre = null;

  while (currNode != null || !stack.isEmpty()) {
    if (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      currNode = stack.peek();
      if (currNode.right == null || currNode.right == pre) {
        ans.push(currNode.data);
        stack.pop();
        pre = currNode;
        currNode = null;
      } else if (currNode.right) {
        currNode = currNode.right;
      }
    }
  }
  return ans;
}

function postOrderTraversal(A) {
  let ans = [];
  // Two stacks as used in explanation
  // Create two stacks
  let s1 = [];
  let s2 = [];

  if (root == null) return;

  // Push root to first stack
  s1.push(root);

  // Run while first stack is not empty
  while (s1.length > 0) {
    // Pop an item from s1 and Push it to s2
    let temp = s1.pop();
    s2.push(temp);

    // Push left and right children of
    // removed item to s1
    if (temp.left != null) s1.push(temp.left);
    if (temp.right != null) s1.push(temp.right);
  }

  // Print all elements of second stack
  while (s2.length > 0) {
    let temp = s2.pop();
    ans.push(temp.data);
  }
  return ans;
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
let ans = postOrderTraversalScaler(root);
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
