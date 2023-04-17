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
let ans = postOrderTraversal(root);
console.log(ans);
