/*
Q1. Common Nodes in Two BST

Problem Description
Given two BST's A and B, return the (sum of all common nodes in both A and B) % (109 +7) .

In case there is no common node, return 0.

NOTE:

Try to do it one pass through the trees.



Problem Constraints
1 <= Number of nodes in the tree A and B <= 105

1 <= Node values <= 106



Input Format
First argument represents the root of BST A.

Second argument represents the root of BST B.



Output Format
Return an integer denoting the (sum of all common nodes in both BST's A and B) % (109 +7) .



Example Input
Input 1:

 Tree A:
    5
   / \
  2   8
   \   \
    3   15
        /
        9

 Tree B:
    7
   / \
  1  10
   \   \
    2  15
       /
      11
Input 2:

  Tree A:
    7
   / \
  1   10
   \   \
    2   15
        /
       11

 Tree B:
    7
   / \
  1  10
   \   \
    2  15
       /
      11


Example Output
Output 1:

 17
Output 2:

 46


Example Explanation
Explanation 1:

 Common Nodes are : 2, 15
 So answer is 2 + 15 = 17
Explanation 2:

 Common Nodes are : 7, 2, 1, 10, 15, 11
 So answer is 7 + 2 + 1 + 10 + 15 + 11 = 46
 */
/*
Hint 1
Inorder Traversal of BST return an sorted array.

Also think of finding intersection of two sorted arrays using two pointers and try to apply it on this question.
Solution Approach
Method 1 (Linear Time) We can find common elements in O(n) time.

1) Do inorder traversal of first tree and store the traversal in an auxiliary array ar1[].
2) Do inorder traversal of second tree and store the traversal in an auxiliary array ar2[]
3) Find intersection of ar1[] and ar2[].

Time complexity of this method is O(m+n) where m and n are number of nodes in first and second tree respectively.
This solution requires O(m+n) extra space.

Method 2 (Linear Time and limited Extra Space) We can find common elements in O(n) time and O(h1 + h2) extra space where h1 and h2 are heights of first and second BSTs respectively.

The idea is to use iterative inorder traversal. We use two auxiliary stacks for two BSTs. Since we need to find common elements, whenever we get same element, we add it to the sum .
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
arr = [27, 19, 44, 10, 24, 36, -1, -1, -1, -1, -1, -1, -1];
let root1 = levelOrderTraversalScaler(arr);
arr = [8, 3, 10, 1, 6, -1, 20, -1, -1, 4, 7, 13, -1, -1, -1, -1, -1, -1, -1];
let root2 = levelOrderTraversalScaler(arr);
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

function commonNodesInBST(root1, root2) {
  let obj = {};
  helper(root1);
  helper(root2);

  function helper(root) {
    let stack = [],
      curr = root;
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      obj[curr.data] ? obj[curr.data]++ : (obj[curr.data] = 1);
      curr = curr.right;
    }
  }
  let sum = 0,
    mod = Math.pow(10, 9) + 7;
  for (let key in obj) {
    if (obj[key] > 1) {
      sum += +key;
      sum %= mod;
    }
  }
  return sum;
}
//param A : root node of tree
//param B : root node of tree
//return an integer
function scaler(A, B) {
  var sum = 0;
  const M = 1000000007;

  let stackA = [];
  let currentA = A;

  let stackB = [];
  let currentB = B;

  while (stackA.length > 0 || currentA || stackB.length > 0 || currentB) {
    if (currentA || currentB) {
      if (currentA) {
        stackA.push(currentA);
        currentA = currentA.left;
      }
      if (currentB) {
        stackB.push(currentB);
        currentB = currentB.left;
      }
    } else {
      if (stackA.length == 0 || stackB.length == 0) break;

      let nodeA = stackA[stackA.length - 1];
      let nodeB = stackB[stackB.length - 1];

      if (nodeA.data == nodeB.data) {
        sum = (sum + nodeB.data) % M;
        stackA.pop();
        currentA = nodeA.right;
        stackB.pop();
        currentB = nodeB.right;
      } else if (nodeA.data < nodeB.data) {
        stackA.pop();
        currentA = nodeA.right;
      } else {
        stackB.pop();
        currentB = nodeB.right;
      }
    }
  }

  return sum;
}
