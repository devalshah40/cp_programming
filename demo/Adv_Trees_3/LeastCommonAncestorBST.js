/*Q4. LCA in BST
Problem Description
Given a Binary Search Tree A. Also given are two nodes B and C. Find the lowest common ancestor of the two nodes.
Note 1 :- It is guaranteed that the nodes B and C exist.
Note 2 :- The LCA of B and C in A is the shared ancestor of B and C that is located farthest from the root.


Problem Constraints1 <= Number of nodes in binary tree <= 105
1 <= B , C <= 105


Input FormatFirst argument is a root node of the binary tree, A.
Second argument is an integer B.
Third argument is an integer C.


Output FormatReturn the LCA of the two nodes


Example InputInput 1:
 15 / \ 12 20 / \ / \ 10 14 16 27 / 8
 B = 8 C = 20Input 2:
 8 / \ 6 21 / \ 1 7
 B = 7 C = 1

Example OutputOutput 1:
 15Output 2:
 6

Example ExplanationExplanation 1:
 The LCA of node 8 and 20 is the node 15.Explanation 2:
 The LCA of node 7 and 1 is the node 6.
 */

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
// arr = [8, 3, 10, 1, 6, -1, 20, -1, -1, 4, 7, 13, -1, -1, -1, -1, -1, -1, -1];
arr = [27, 19, 44, 10, 24, 36, -1, -1, -1, -1, -1, -1, -1];
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

// assumption both nodes must be present
function lca(root, n1, n2) {
  if (root === null) {
    return -1;
  }
  let lLca, rLca;
  if (root.data > n1 && root.data > n2) {
    return lca(root.left, n1, n2);
  } else if (root.data < n1 && root.data < n2) {
    return lca(root.right, n1, n2);
  } else if (root.data === n1 || root.data === n2) {
    return root.data;
  } else {
    lLca = lca(root.left, n1, n2);
    rLca = lca(root.right, n1, n2);
  }
  if (lLca !== -1 && rLca !== -1) {
    return root.data;
  } else if (lLca === -1) {
    return rLca;
  } else {
    return lLca;
  }
}

// assumption both nodes must be present
function lcaScaler(root, n1, n2) {
  if (root === null) {
    return -1;
  }
  if (root.data > n1 && root.data > n2) {
    return lcaScaler(root.left, n1, n2);
  } else if (root.data < n1 && root.data < n2) {
    return lcaScaler(root.right, n1, n2);
  } else {
    return root.data;
  }
}
let ans;

let n1, n2;
(n1 = 10), (n2 = 44);

ans = lca(root, n1, n2);
console.log(ans);
/* 
Hint 1
For a node in BST, the values of all the nodes in the right subtree are greater and 
those in the left subtree are lesser than its own value.

Solution Approach
For Binary search tree, while traversing the tree from top to bottom the first node whose value 
lies in the range [min(B, C), max(B, C)] is the LCA of B and C.

So just recursively traverse the BST , if current node value is greater than both B and C, then the LCA lies in the left subtree of the current node. If it is smaller than both B and C, then the LCA lies on the right subtree. Otherwise, the current node is the LCA
Time Complexity : O(H)
Space Complexity : O(H) 
where H is the height of the BST


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
  public int solve(TreeNode A, int B, int C) {
      if (A.val > B && A.val > C)
      return solve(A.left, B, C);

      if (A.val < B && A.val < C)
          return solve(A.right, B, C);
   
      return A.val;
  }
}
*/
