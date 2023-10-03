/*
Q4. Identical Binary Trees
Unsolved
feature icon
Get your doubts resolved blazing fast with Chat GPT Help
Check Chat GPT
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given two binary trees, check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.



Problem Constraints
1 <= number of nodes <= 105



Input Format
The first argument is a root node of the first tree, A.

The second argument is a root node of the second tree, B.



Output Format
Return 0 / 1 ( 0 for false, 1 for true ) for this problem.



Example Input
Input 1:

   1       1
  / \     / \
 2   3   2   3
Input 2:

   1       1
  / \     / \
 2   3   3   3


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Both trees are structurally identical and the nodes have the same value.
Explanation 2:

 Values of the left child of the root node of the trees are different.


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
let arr, arr1;
// arr = [8, 3, 10, 1, 6, -1, 20, -1, -1, 4, 7, 13, -1, -1, -1, -1, -1, -1, -1];
// arr1 = [106, -1, 480, 454, 321, -1, -1, 719, -1, -1, -1];

arr = [5, 10, -1, -1, -1];
arr1 = [5, -1, -1];
let root1 = levelOrderTraversalScaler(arr);
// let root2 = levelOrderTraversalScaler(arr);
let root2 = levelOrderTraversalScaler(arr1);
console.log(root1);
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

function preOrder(root1, root2) {
  // if (root1 === null && root2 === null) {
  //   return true;
  // } else {
  //   return false;
  // }
  if (typeof root1 === typeof root2) {
    if (root1 === null) {
      return true;
    } else if (root1.data === root2.data) {
      let left = preOrder(root1.left, root2.left);
      let right = preOrder(root1.right, root2.right);
      return left && right;
    }
  } else {
    return false;
  }
}

let ans;
ans = preOrder(root1, root2);
console.log(ans);
