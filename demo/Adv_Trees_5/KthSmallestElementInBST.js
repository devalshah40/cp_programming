/*
Problem Description
Given a binary search tree represented by root A, write a function to find the Bth smallest element in the tree.



Problem Constraints
1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 10^9



Input Format
First and only argument is head of the binary tree A.



Output Format
Return an integer, representing the Bth element.



Example Input
Input 1:

 
            2
          /   \
         1    3
B = 2
Input 2:

 
            3
           /
          2
         /
        1
B = 1



Example Output
Output 1:

 2
Output 2:

 1
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
// arr = [3, -1, 4, -1, -1];
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

let curIndex, searchIndex;

// searchIndex = 10;
curIndex = 1;
searchIndex = 2;
let finalAns;

function inOrderTraversal(root) {
  if (root === null) {
    return;
  }

  inOrderTraversal(root.left);
  if (curIndex === searchIndex) {
    finalAns = root.data;
    curIndex++;
  } else {
    curIndex++;
  }
  inOrderTraversal(root.right);
}

inOrderTraversal(root);
console.log(finalAns);

function inOrderTraversalScaler(root) {
  if (root === null) {
    return;
  }

  inOrderTraversalScaler(root.left);
  if (--curIndex === 0) {
    finalAns = root.data;
  }
  inOrderTraversalScaler(root.right);
}

curIndex = 5;
searchIndex = 5;
inOrderTraversalScaler(root);
console.log(finalAns);

/*
Hint 1
Think about the property of binary search tree and how it can help you.

Do you really need to visit right subtree of any node before visiting entire left subtree of it?

Solution Approach
Note the property of the binary search tree.
All elements smaller than root will be in the left subtree, and all elements greater than root will be in the right subtree.
This means we need not even explore the right subtree till we have explored everything in the left subtree. Or in other words, we go to the right subtree only when the size of left subtree + 1 ( root ) < k.

With that in mind, we can come up with an easy recursive solution which is similar to inorder traversal :

Step 1: Find the kth smallest element in left subtree decrementing k for every node visited. If answer is found, return answer.
Step 2: Decrement k by 1. If k == 0 ( this node is the kth node visited ), return node’s value
Step 3: Find the kth smallest element in right subtree.

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
    //param A : root node of tree
    //param B : integer
    //return an integer
    kthsmallest: function (root, k) {
        let stack = []
        while (root || stack.length) {
            while (root) {
                stack.push(root)
                root = root.left
            }
            root = stack.pop()
            if (--k == 0)
                return root.data
            root = root.right
        }
    }
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
  static int k = 0;
  public int kthsmallest(TreeNode A, int B) {
      k = B;
      return find(A);
  }
  public static int find(TreeNode root) {
      if (root == null)
          return -1;
      // We do an inorder traversal here. 
      int k1 = find(root.left);
      if (k == 0)
          return k1; // left subtree has k or more elements.
      k--;
      if (k == 0)
          return root.val; // root is the kth element.
      return find(root.right); // answer lies in the right node.
  }
}
*/
