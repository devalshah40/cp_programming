/*
Q1. Inorder Traversal

Problem Description
Given a binary tree, return the inorder traversal of its nodes' values.

NOTE: Using recursion is not allowed.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the inorder traversal of the given binary tree.



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

 [1, 3, 2]
Output 2:

 [6, 1, 3, 2]


Example Explanation
Explanation 1:

 The Inorder Traversal of the given tree is [1, 3, 2].
Explanation 2:

 The Inorder Traversal of the given tree is [6, 1, 3, 2].
 */

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }
const Stack = require('../data-structures/Stack');

function inorderTraversal(A) {
  let ans = [];
  const stack = new Stack();
  let currNode = A;

  while (stack.length() > 0 || currNode) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    currNode = stack.pop();
    ans.push(currNode.data);
    currNode = currNode.right;
  }
  return ans;
}

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

// module.exports = {
//   //param A : root node of tree
//   //return a array of integers
//   inorderTraversal: function (A) {
//     if (!A) {
//       return [];
//     }
//     const arrI = [];
//     const stack = [];
//     let curr = A;
//     while (curr || stack.length > 0) {
//       while (curr) {
//         stack.push(curr);
//         curr = curr.left;
//       }
//       curr = stack.pop();
//       arrI.push(curr.data);
//       curr = curr.right;
//     }
//     return arrI;
//   },
// };
