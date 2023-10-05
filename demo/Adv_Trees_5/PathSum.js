/*
Q2. Path Sum
Solved
feature icon
Get your doubts resolved blazing fast with Chat GPT Help
Check Chat GPT
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.



Problem Constraints
1 <= number of nodes <= 105

-100000 <= B, value of nodes <= 100000



Input Format
First argument is a root node of the binary tree, A.

Second argument is an integer B denoting the sum.



Output Format
Return 1, if there exist root-to-leaf path such that adding up all the values along the path equals the given sum. Else, return 0.



Example Input
Input 1:

 Tree:    5
         / \
        4   8
       /   / \
      11  13  4
     /  \      \
    7    2      1

 B = 22
Input 2:

 Tree:    5
         / \
        4   8
       /   / \
     -11 -13  4

 B = -1


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 There exist a root-to-leaf path 5 -> 4 -> 11 -> 2 which has sum 22. So, return 1.
Explanation 2:

 There is no path which has sum -1.



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

let totalSum = 0,
  requiredSum = 21,
  isAvailable = false;

postOrder(root);
console.log(isAvailable);

function postOrder(root) {
  if (root === null) {
    return;
  }
  totalSum += root.data;

  postOrder(root.left);
  postOrder(root.right);
  if (root.left === null && root.right === null) {
    if (totalSum === requiredSum) {
      isAvailable = true;
    }
  }
  totalSum -= root.data;
}

/*
Hint 1
Can you traverse the tree while keeping the sum from root to current node?

How can you check if you have reached the leaf or not?

Solution Approach
Recursion might make this problem much easier to solve.
You just need to keep a track of the sum from the root to the current node.
Then it becomes a question of just checking if the current node is a leaf node, and if so, do the sum match.

var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return sum === root.data;
  } else {
    return (
      hasPathSum(root.left, sum - root.data) ||
      hasPathSum(root.right, sum - root.data)
    );
  }
};
module.exports = {
  hasPathSum: function (A, B) {
    return +hasPathSum(A, B);
  },
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
  public int hasPathSum(TreeNode A, int B) {
      boolean status = sum(A, 0, B);
      return status ? 1 : 0;
  }
  public boolean sum(TreeNode A, int curSum, int reqSum) {
      if (A == null) {
          return false;
      }
      if (A.left == null && A.right == null) {
          curSum += A.val;
          if (curSum == reqSum)
              return true;
          return false;
      }
      int sum = curSum + A.val;
      return sum(A.left, sum, reqSum) || sum(A.right, sum, reqSum);
  }
}

*/
