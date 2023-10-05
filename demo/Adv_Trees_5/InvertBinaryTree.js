/*
Q1. Invert the Binary Tree

Problem Description
Given a binary tree A, invert the binary tree and return it.

Inverting refers to making the left child the right child and vice versa.



Problem Constraints
1 <= size of tree <= 100000



Input Format
First and only argument is the head of the tree A.



Output Format
Return the head of the inverted tree.



Example Input
Input 1:

 
     1
   /   \
  2     3
Input 2:

 
            1
        /         \
      2            3
     /  \        /   \
    4    5      6      7
   / \  / \   /   \  /   \
  8  9 10 11 12  13 14   15

Example Output
Output 1:
 
     1
   /   \
  3     2
Output 2:
 
     1
   /   \
  3     2
 / \   / \
7   6 5   4

              1
         /         \
        3           2
      /    \      /    \
    7      6     5      4
   / \   /  \   / \    / \   
  15 14 13  12 11  10 9   8

  
Example Explanation
Explanation 1:

Tree has been inverted.
Explanation 2:

Tree has been inverted.

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
/*
      8
     / \
    3   10
   / \    \ 
  1   6    20
     / \   /
    4   7  13  
*/
let arr;
arr = [8, 3, 10, 1, 6, -1, 20, -1, -1, 4, 7, 13, -1, -1, -1, -1, -1, -1, -1];
let root = levelOrderTraversalScaler(arr);
console.log(root);

//Scaler
function levelOrderTraversalScaler(A) {
  let root = new TreeNode(A[0]);
  q = [];
  q.push(root);
  let i = 1;
  while (q.length > 0) {
    let cur = q.pop();
    if (cur == null) {
      continue;
    }
    let val_left = A[i];
    let val_right = A[i + 1];
    i += 2;
    if (val_left == -1) {
      cur.left = null;
    } else {
      cur.left = new TreeNode(val_left);
    }
    if (val_right == -1) {
      cur.right = null;
    } else {
      cur.right = new TreeNode(val_right);
    }
    q.unshift(cur.left);
    q.unshift(cur.right);
  }
  return root;
}
let ans;
// let ans = postOrderTraversal(root);
// console.log(ans);

function postOrderTraversal(root) {
  if (root === null) {
    return;
  }

  const left = postOrderTraversal(root.left);
  const right = postOrderTraversal(root.right);

  if (left && right) {
    root.right = left;
    root.left = right;
  } else if (left) {
    root.right = left;
    root.left = null;
  } else if (right) {
    root.left = right;
    root.right = null;
  }
  return root;
}

ans = solveScaler(root);
console.log(ans);

function solveScaler(root) {
  if (root == null) return root;
  // [root.left, root.right] = [solveScaler(root.right), solveScaler(root.left)];
  let left = solveScaler(root.left);
  let right = solveScaler(root.right);
  root.left = right;
  root.right = left;
  return root;
}
/*
Solution Approach
Think recursively.
You need to invert the left and right subtree on every node and then swap them.
Do this for every node.
Edge Cases: Check if the current nodes are not NULL before performing the operation.

function solve(root) {
  if (root == null) return root;
  [root.left, root.right] = [solve(root.right), solve(root.left)];
  return root;
}

/**
 * Definition for binary tree
 * class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) {
 *      val = x;
 *      left=null;
 *      right=null;
 *     }
 * }

public class Solution {
  public TreeNode invertTree(TreeNode A) {
      if (root == null) {
          return null;
      }
      TreeNode right = invertTree(root.right);
      TreeNode left = invertTree(root.left);
      root.left = right;
      root.right = left;
      return root;
  }
}
*/
