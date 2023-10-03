/*
Q2. Equal Tree Partition

Problem Description
Given a binary tree A. Check whether it is possible to partition the tree to two trees which have equal sum of values after removing exactly one edge on the original tree.



Problem Constraints
1 <= size of tree <= 100000

0 <= value of node <= 109



Input Format
First and only argument is head of tree A.



Output Format
Return 1 if the tree can be partitioned into two trees of equal sum else return 0.



Example Input
Input 1:

 
                5
               /  \
              3    7
             / \  / \
            4  6  5  6
Input 2:

 
                1
               / \
              2   10
                  / \
                 20  2


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Remove edge between 5(root node) and 7: 
        Tree 1 =                                               Tree 2 =
                        5                                                     7
                       /                                                     / \
                      3                                                     5   6    
                     / \
                    4   6
        Sum of Tree 1 = Sum of Tree 2 = 18
Explanation 2:

 The given Tree cannot be partitioned.

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
// arr = [2, 1, 3, -1, -1, -1, -1];
// arr = [5, 3, 7, 4, 6, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1];
arr = [106, -1, 480, 454, 321, -1, -1, 719, -1, -1, -1];
// arr = [375, 112, 267, -1, -1, 632, -1, -1, 157, 596, 633, -1, -1, -1, -1];
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

const set = new Set();
let totalSum = equalTreePartionPost(root);

function equalTreePartionPost(root) {
  if (root === null) {
    return 0;
  }
  let sum =
    root.data +
    equalTreePartionPost(root.left) +
    equalTreePartionPost(root.right);
  set.add(sum);
  return sum;
}
console.log(totalSum);
console.log(set);
if (set.has(totalSum / 2)) {
  console.log(true);
}
console.log(false);
/*
Solution Approach
After removing some edge from parent to child, 
(where the child cannot be the original root) 

the subtree rooted at child must be half the sum of the entire tree.

Let's record the sum of every subtree. We can do this recursively using Depth-First Search. 
After, we should check that half the sum of the entire tree occurs somewhere in our recording 
(and not from the total of the entire tree).

module.exports = {
  solve: function (A) {
    let seen = [];
    let root = A;
    function sum_(node) {
      if (!node) return 0;
      seen.push(sum_(node.left) + sum_(node.right) + node.data);
      return seen[seen.length - 1];
    }

    let total = sum_(root);
    seen.pop();
    let ret = 0;
    seen.forEach((ele) => {
      if (ele == Math.floor(total / 2)) ret = 1;
    });
    return ret;
  },
};

public class Solution {
    public int solve(TreeNode a) {
        Map < Long, Integer > map = new HashMap < > ();
        long tot = populate(a, map);
        // since total sum can also be zero
        if (tot == 0) 
            return map.getOrDefault(tot, 0) > 1 ? 1 : 0;
        return tot % 2 == 0 && map.containsKey(tot / 2) ? 1 : 0;
    }
    public long populate(TreeNode a, Map < Long, Integer > map) {
        if (a == null) 
            return 0;
        long sum = a.val + populate(a.left, map) + populate(a.right, map);
        map.put(sum, map.getOrDefault(sum, 0) + 1);
        return sum;
    }
}
*/
