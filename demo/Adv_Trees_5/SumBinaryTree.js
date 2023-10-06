/*
Q3. Sum binary tree or not

Problem Description
Given a binary tree. Check whether the given tree is a Sum-binary Tree or not.

Sum-binary Tree is a Binary Tree where the value of a every node is equal to sum of the nodes present in its left subtree and right subtree.

An empty tree is Sum-binary Tree and sum of an empty tree can be considered as 0. A leaf node is also considered as SumTree.

Return 1 if it sum-binary tree else return 0.



Problem Constraints
1 <= length of the array <= 100000

0 <= node values <= 50



Input Format
The only argument given is the root node of tree A.



Output Format
Return 1 if it is sum-binary tree else return 0.



Example Input
Input 1:

       26
     /    \
    10     3
   /  \     \
  4   6      3
Input 2:

       26
     /    \
    10     3
   /  \     \
  4   6      4


Example Output
Output 1:

 1
Output 2:

 0
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
arr = [10, 4, 2, 2, 2, -1, -1, -1, -1, -1, -1];
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

class TreeInfo {
  constructor(isSumTree, sum) {
    this.isSumTree = isSumTree;
    this.sum = sum;
  }
}

function postOrder(root) {
  if (root === null) {
    return new TreeInfo(true, null);
  }
  if (root.left === null && root.right === null) {
    return new TreeInfo(true, root.data);
  }
  const left = postOrder(root.left);
  const right = postOrder(root.right);

  if (left.isSumTree && right.isSumTree && root.data === left.sum + right.sum) {
    return new TreeInfo(true, 2 * root.data);
  } else {
    return new TreeInfo(false, 2 * root.data);
  }
}

let ans;

ans = postOrder(root);
console.log(ans);
/*
Hint 1
A simple solution is to check for every node is their sub-tree sum is equal to value of that node.
But it will take O(n2)

To optimize it, think of storing the sum of subTree at the node. 

Solution Approach
A simple solution is to check for every node is their sub-tree sum is equal to value of that node.

But it will take O(n2)

An efficient approach is to store sum of subtree at the node, so we don’t need to calculate it again and again.

1) If the node is a leaf node then sum of subtree rooted with this node is equal to value of this node.

2) If the node is not a leaf node then sum of subtree rooted with this node is twice the value of this node (Assuming that the tree rooted with this node is SumTree).

If all nodes are sumTree return 1 else return 0.


function sum(node) {
  if (node == null) {
    return 0;
  }
  return sum(node.left) + node.data + sum(node.right);
}

function isSumTree(node) {
  let ls, rs;

  if (node == null || (node.left == null && node.right == null)) {
    return 1;
  }

  ls = sum(node.left);
  rs = sum(node.right);

  if (
    node.data == ls + rs &&
    isSumTree(node.left) != 0 &&
    isSumTree(node.right) != 0
  ) {
    return 1;
  }
  return 0;
}

module.exports = {
  solve: function (A) {
    return isSumTree(A);
  },
};

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
  public int solve(TreeNode A) {
      return checksumtree(A);
  }
  public static int isLeaf(TreeNode node) {
      if (node == null)
          return 0;
      if (node.left == null && node.right == null)
          return 1;
      return 0;
  }
  public static int isSumTree(TreeNode node) {
      int ls, rs;
      if (node == null || isLeaf(node) == 1)
          return 1;

      if (isSumTree(node.left) == 1 && isSumTree(node.right) == 1) {
          if (node.left == null)
              ls = 0;
          else if (isLeaf(node.left) == 1)
              ls = node.left.val;
          else
              ls = 2 * (node.left.val);
          if (node.right == null)
              rs = 0;
          else if (isLeaf(node.right) == 1)
              rs = node.right.val;
          else
              rs = 2 * (node.right.val);
          if (node.val == ls + rs)
              return 1;
          else
              return 0;
      }
      return 0;
  }

  public static int checksumtree(TreeNode root) {
      if (isSumTree(root) == 1)
          return 1;
      return 0;
  }
}
*/
