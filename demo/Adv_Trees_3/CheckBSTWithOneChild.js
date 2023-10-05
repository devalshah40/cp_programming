/*
Q1. Check for BST with One Child

Problem Description

Given preorder traversal of a binary tree, check if it is possible that it is also a preorder traversal of a Binary Search Tree (BST), where each internal node (non-leaf nodes) have exactly one child.



Problem Constraints

1 <= number of nodes <= 100000



Input Format

First and only argument is an integer array denoting the preorder traversal of binary tree.



Output Format

Return a string "YES" if true else "NO".



Example Input

Input 1:

 A : [4, 10, 5, 8]
Input 2:

 A : [1, 5, 6, 4]


Example Output

Output 1:

 "YES"
Output 2:

 "NO"


Example Explanation

Explanation 1:

 The possible BST is:
            4
             \
             10
             /
             5
              \
              8
Explanation 2:

 There is no possible BST which have the above preorder traversal.

 */
function solve(arr) {
  let isSameTraversal = true;
  let i = 0;

  if (arr.length <= 1) {
    return 'YES';
  }
  let left = Number.NEGATIVE_INFINITY,
    right = Number.POSITIVE_INFINITY;

  while (i < arr.length - 1 && isSameTraversal) {
    let cur = arr[i];
    let next = arr[i + 1];
    if (next > cur) {
      left = cur + 1;
    } else if (next < arr[i]) {
      right = cur - 1;
    } 

    if (!(next >= left && next <= right)) {
      isSameTraversal = false;
    }
    i++;
  }
  return isSameTraversal ? 'YES' : 'NO';
}

let arr;
arr = [4, 10, 5, 8];
// arr = [1, 5, 6, 4];
const ans = solve(arr);
console.log(ans);
/*
Hint 1
In Preorder traversal, descendants (or Preorder successors) of every node appear after the node.

We can say, if all internal nodes have only one child in a BST, then all the descendants of every node are either smaller or larger than the node.

We can check this in linear time.

Solution Approach
In Preorder traversal, descendants (or Preorder successors) of every node appear after the node.

We can say, if all internal nodes have only one child in a BST, then all the descendants of every node are either smaller or larger than the node.

To check the above condition:

Scan the last two nodes of preorder & mark them as min & max.

Scan every node down the preorder array. Each node must be either smaller than the min node or larger than the max node. Update min & max accordingly.

module.exports = {
    //param A : array of integers
    //return a strings
    solve: function (pre) {
        let l = -1000000000;
        let r = 1000000000;
        let root = pre[0];
        for (let i = 1; i < pre.length; i++) {
            if (pre[i] > root) {
                l = root;
            } else {
                r = root;
            }
            if (pre[i] < l || pre[i] > r) {
                return "NO";
            }
            root = pre[i];
        }
        return "YES";
    }
};

public class Solution {
    public String solve(int[] A) {
        int n = A.length;

        if (n <= 2) {
            return "YES";
        }
        int mn = Math.min(A[n - 1], A[n - 2]);
        int mx = Math.max(A[n - 1], A[n - 2]);

        for (int i = n - 3; i >= 0; i--) {
            // Each node must be either smaller than the min node or larger than the max node
            if (A[i] > mn && A[i] < mx) {
                return "NO";
            }
            mn = Math.min(mn, A[i]);
            mx = Math.max(mx, A[i]);
        }
        return "YES";
    }
}
*/
