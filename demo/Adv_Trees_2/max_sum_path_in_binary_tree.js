/*
Q4. Max Sum Path in Binary Tree
Unsolved
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given a binary tree T, find the maximum path sum.

The path may start and end at any node in the tree.

Note: A maximum sum path is any path which has the maximum sum of the nodes lying on the path.



Problem Constraints
1 <= Number of Nodes <= 7e4

-1000 <= Value of Node in T <= 1000



Input Format
The first and the only argument contains a pointer to the root of T, A.



Output Format
Return an integer representing the maximum sum path.



Example Input
Input 1:

  
    1
   / \
  2   3
Input 2:

       20
      /  \
   -10   20
        /  \
      -10  -50


Example Output
Output 1:

 6
Output 2:

 40


Example Explanation
Explanation 1:

     The path with maximum sum is: 2 -> 1 -> 3
Explanation 2:

     The path with maximum sum is: 20 -> 20

 */

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(currentSum, maxSum) {
    this.maxSum = maxSum;
    this.currentSum = currentSum;
  }
}
//Scaler
function levelOrderTraversal(A) {
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
let arr;
// arr = [20, 10, 20, -1, -1, 10, 50, -1, -1, -1, -1];
// arr = [1, 2, 3, -1, -1, -1, -1];
// arr = [1, 2, -1, 3, 4, -1, -1, -1, -1];
arr = [-100, -200, -1, -300, -400, -1, -1, -1, -1];
let root = levelOrderTraversal(arr);
console.log(root);
let ans = maxSumPathInBinaryTree(root);
console.log(ans);
/*
          1
        /
       2
      / \
     3   4
*/
function maxSumPathInBinaryTree(root) {
  if (root === null) {
    return new TreeInfo(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
  }
  let left = maxSumPathInBinaryTree(root.left);
  let right = maxSumPathInBinaryTree(root.right);

  const currentSum = Math.max(
    root.data,
    root.data + left.currentSum,
    root.data + right.currentSum
  );

  return new TreeInfo(
    currentSum,
    Math.max(
      root.data,
      left.currentSum + root.data + right.currentSum,
      left.maxSum,
      right.maxSum
    )
  );
}

/*
Hint 1
This is a classical DP on tree problem.

Can you try to compute the answer for any vertex if you have answer for their left and right child?

Solution Approach
There are several ways of looking at this problem.
If we knew that root R is going to be a part of the longest path. Then we can look at the longest path to any leaf in the left subtree, longest path in the right subtree, and add them up along with root’s value to get the answer ( Obviously we only consider a path if its value is not negative ). To calculate the longest path till a leaf is O(n) [ Recursive call carrying forward the cumulative sum to a node ].
Given N possible roots, and then the O(n) leaf path calculation, the bruteforce becomes O(n^2).

However, note that the calculation of the longest path to the leaf is very redundant. So, to calculate the result for root R, can you reuse the results you have for R->left / R->right ?

let global_max;
function maxPathAndGlobalUpdate(root) {
  if (root == null) return 0;
  let l = Math.max(0, maxPathAndGlobalUpdate(root.left));
  let r = Math.max(0, maxPathAndGlobalUpdate(root.right));
  global_max = Math.max(global_max, l + r + root.data);
  return root.data + Math.max(l, r);
}

module.exports = {
  maxPathSum: function (root) {
    global_max = -1e9;
    maxPathAndGlobalUpdate(root);
    return global_max;
  },
};


JAVA

// Definition for binary tree
// class TreeNode {
//   int val;
//   TreeNode left;
//   TreeNode right;
//   TreeNode(int x) { val = x; }
// }

public class Solution {
  public int maxPathSum(TreeNode A) {

    Node node = rec(A);

    return node.maxSum;

  }

  public Node rec(TreeNode node) {

    if (node == null)
      return null;

    if (node.left == null && node.right == null) {
      Node n = new Node();
      n.maxSum = node.val;
      n.maxPath = node.val;
      return n;
    }

    Node left, right, n;

    left = rec(node.left);
    right = rec(node.right);
    n = new Node();

    if (left == null) {
      n.maxPath = node.val + right.maxPath;
      n.maxSum = Math.max(n.maxPath, right.maxSum);
    } else if (right == null) {
      n.maxPath = node.val + left.maxPath;
      n.maxSum = Math.max(n.maxPath, left.maxSum);
    } else {
      n.maxPath = Math.max(left.maxPath, right.maxPath) + node.val;
      n.maxSum = Math.max(n.maxPath, left.maxSum);
      n.maxSum = Math.max(n.maxSum, right.maxSum);
      n.maxSum = Math.max(n.maxSum, left.maxPath + right.maxPath + node.val);
    }

    n.maxPath = Math.max(node.val, n.maxPath);
    n.maxSum = Math.max(n.maxSum, n.maxPath);

    return n;

  }

  class Node {
    int maxSum;
    int maxPath;
  }

}
*/
