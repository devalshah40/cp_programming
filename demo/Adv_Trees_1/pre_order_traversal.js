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
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// leetcode.com/problems/binary-tree-postorder-traversal/solutions/45648/three-ways-of-iterative-postorder-traversing-easy-explanation/
function preOrderTraversalScaler(root) {
  let ans = [];
  let stack = new Stack();
  let currNode = root;

  while (currNode != null || !stack.isEmpty()) {
    if (currNode) {
      ans.push(currNode.data);
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      currNode = stack.peek();
      stack.pop();
      currNode = currNode.right;
    }
  }
  return ans;
}

const root = new TreeNode(1);
const second = new TreeNode(2);
root.left = second;
const fifth = new TreeNode(5);
root.right = fifth;
const third = new TreeNode(3);
second.left = third;
const fourth = new TreeNode(4);
second.right = fourth;
const sixth = new TreeNode(6);
fifth.right = sixth;
let ans = preOrderTraversalScaler(root);
console.log(ans);
