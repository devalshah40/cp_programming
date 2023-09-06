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
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const postOrderArr = [8, 4, 5, 2, 6, 7, 3, 1],
  inOrderArr = [4, 8, 2, 5, 1, 6, 3, 7];
const n = postOrderArr.length;
const inOrderMap = new Map();
for (let i = 0; i < inOrderArr.length; i++) {
  inOrderMap.set(inOrderArr[i], i);
}

const root = constructTreeInPostOrderTraversal(0, n - 1, 0, n - 1);
console.log(root);
function constructTreeInPostOrderTraversal(sPost, ePost, sIn, eIn) {
  const root = new TreeNode(postOrderArr[ePost]);
  if (sIn > eIn) {
    return null;
  }
  const idX = inOrderMap.get(postOrderArr[ePost]);

  const numOfElements = idX - sIn;
  root.left = constructTreeInPostOrderTraversal(
    sPost,
    sPost - 1 + numOfElements,
    sIn,
    idX - 1
  );
  root.right = constructTreeInPostOrderTraversal(
    sPost + numOfElements,
    ePost - 1,
    idX + 1,
    eIn
  );
  return root;
}
