/*
Q1. Symmetric Binary Tree

Problem Description
Given a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is the root node of the binary tree.



Output Format
Return 0 / 1 ( 0 for false, 1 for true ).



Example Input
Input 1:

    1
   / \
  2   2
 / \ / \
3  4 4  3
Input 2:

    1
   / \
  2   2
   \   \
   3    3


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 The above binary tree is symmetric. 
Explanation 2:

The above binary tree is not symmetric.

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
arr = [1, 2, 2, 3, 4, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1];
// arr = [1, 2, 2, -1, 3, -1, 3, -1, -1, -1, -1];
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

let ans = levelOrderTraversal(root);
console.log(ans);

function levelOrderTraversal(root) {
  if (root === null) {
    return 1;
  }
  const q = new Queue();
  q.enqueue(root.left);
  q.enqueue(root.right);

  while (!q.isEmpty()) {
    const level = [];
    const size = q.size();

    for (let i = 0; i < size; i++) {
      const node = q.dequeue();
      if (node) level.push(node.data);
      else level.push(null);

      if (node) q.enqueue(node.left);
      else level.push(null);

      if (node) q.enqueue(node.right);
      else level.push(null);
    }

    let start = 0,
      end = level.length - 1;
    while (start < end) {
      if (level[start] !== level[end]) {
        return 0;
      } else {
        start++;
        end--;
      }
    }
  }
  return 1;
}

/*
Hint 1
Think of recursion. How can you use it to simulate the symmetry check of two trees?

Solution Approach
2 trees, T1 and T2, are symmetric if
1) value of T1’s root is the same as T2’s root
2) T1’s left and T2’s right are symmetric.
3) T2’s left and T1’s right are symmetric.

Can you use the above fact to model an easy recursion-based solution?

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }
const helper = function (p, q) {
    if (p == null && q == null)
        return true;
    if (p == null || q == null)
        return false;
    return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left)
}
module.exports = {
    //param A : root node of tree
    //return an integer
    isSymmetric: function (root) {
        if (helper(root, root) == true) {
            return 1;
        }
        return 0;
    }
};

/**
 * Definition for binary tree
 * class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
public class Solution {
  public int isSymmetric(TreeNode A) {
      if (A == null)
          return 0;
      return rec(A.left, A.right) ? 1 : 0;
  }
  public boolean rec(TreeNode node1, TreeNode node2) {
      if (node1 == null && node2 == null)
          return true;
      if (node1 == null || node2 == null)
          return false;
      if (node1.val != node2.val)
          return false;
      return rec(node1.left, node2.right) & rec(node1.right, node2.left);
  }
}
*/
