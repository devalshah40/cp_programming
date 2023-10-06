/*
Q2. Distance between Nodes of BST
Problem Description
Given a binary search tree.
Return the distance between two nodes with given two keys B and C. It may be assumed that both keys exist in BST.

NOTE: Distance between two nodes is number of edges between them.



Problem Constraints
1 <= Number of nodes in binary tree <= 1000000

0 <= node values <= 109



Input Format
First argument is a root node of the binary tree, A.

Second argument is an integer B.

Third argument is an integer C.



Output Format
Return an integer denoting the distance between two nodes with given two keys B and C



Example Input
Input 1:

    
         5
       /   \
      2     8
     / \   / \
    1   4 6   11
 B = 2
 C = 11
Input 2:

    
         6
       /   \
      2     9
     / \   / \
    1   4 7   10
 B = 2
 C = 6


Example Output
Output 1:

 3
Output 2:

 1


Example Explanation
Explanation 1:

 Path between 2 and 11 is: 2 -> 5 -> 8 -> 11. Distance will be 3.
Explanation 2:

 Path between 2 and 6 is: 2 -> 6. Distance will be 1

*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

class TreeInfo {
  constructor(n1Found, n2Found, height) {
    this.n1Found = n1Found;
    this.n2Found = n2Found;
    this.height = height;
  }
}          
module.exports = {
  //param A : root node of tree
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (root, n1, n2) {
    const ans = distanceBetweenTwoNodes(root, n1, n2);
    return ans.height;
    function distanceBetweenTwoNodes(root, n1, n2) {
      if (root === null) {
        return new TreeInfo(false, false, 0);
      }
      let left = new TreeInfo(false, false, 0);
      let right = new TreeInfo(false, false, 0);
      if (root.data > n1 && root.data > n2) {
        left = distanceBetweenTwoNodes(root.left, n1, n2);
      } else if (root.data < n1 && root.data < n2) {
        right = distanceBetweenTwoNodes(root.right, n1, n2);
      } else {
        left = distanceBetweenTwoNodes(root.left, n1, n2);
        right = distanceBetweenTwoNodes(root.right, n1, n2);
      }
      let n1Found = false,
        n2Found = false;
      if (root.data === n1) {
        n1Found = true;
      } else if (root.data === n2) {
        n2Found = true;
      }
      if (n1Found && !left.n2Found && !right.n2Found) {
        return new TreeInfo(true, false, 0);
      } else if (n2Found && !left.n1Found && !right.n1Found) {
        return new TreeInfo(false, true, 0);
      } else if (n1Found && (left.n2Found || right.n2Found)) {
        return new TreeInfo(
          true,
          true,
          Math.max(left.height, right.height) + 1
        );
      } else if (n2Found && (left.n1Found || right.n1Found)) {
        return new TreeInfo(
          true,
          true,
          Math.max(left.height, right.height) + 1
        );
      }
      if (left.n1Found && left.n2Found) {
        return new TreeInfo(true, true, left.height);
      } else if (right.n1Found && right.n2Found) {
        return new TreeInfo(true, true, right.height);
      } else if (left.n1Found && right.n2Found) {
        return new TreeInfo(true, true, left.height + right.height + 2);
      } else if (left.n2Found && right.n1Found) {
        return new TreeInfo(true, true, left.height + right.height + 2);
      } else if (left.n1Found && !right.n2Found) {
        return new TreeInfo(true, false, left.height + 1);
      } else if (left.n2Found && !right.n1Found) {
        return new TreeInfo(false, true, left.height + 1);
      } else if (right.n1Found && !left.n2Found) {
        return new TreeInfo(true, false, right.height + 1);
      } else if (right.n2Found && !left.n1Found) {
        return new TreeInfo(false, true, right.height + 1);
      } else {
        return new TreeInfo(false, false, 0);
      }
    }
  },
};

/*
Hint 1
This problem can be easily solved in O(n).

Think of optimizing, as we sometime need only to go on the left side or right side.
                           
Solution Approach
An efficient way to solve the above problem:

We start from the root and for every node, we do following.

If both keys are greater than the current node, we move to the right child of the current node.
If both keys are smaller than current node, we move to left child of current node.
If one keys is smaller and other key is greater, current node is Lowest Common Ancestor (LCA) of two nodes. We find distances of current node from two keys and return sum of the distances.

Time Complexity : O(h) (height of Tree)
function lca(root, node1, node2) {
  while (true) {
    if (root.data > node1 && root.data > node2) {
      root = root.left;
    } else if (root.data < node1 && root.data < node2) {
      root = root.right;
    } else {
      return root;
    }
  }
}
function getDistance(src, dest) {
  if (src.data == dest) return 0;
  let node = src.left;
  if (src.data < dest) {
    node = src.right;
  }
  return 1 + getDistance(node, dest);
}

module.exports = {
  solve: function (root, node1, node2) {
    if (root == null) return -1;
    let la = lca(root, node1, node2);
    return getDistance(la, node1) + getDistance(la, node2);
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
    public int solve(TreeNode root, int a, int b) {
        int temp = 0;
        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
        return distanceBetween2(root, a, b);
    }
    public static int distanceFromRoot(TreeNode root, int x) {
        if (root.val == x)
            return 0;
        else if (root.val > x)
            return 1 + distanceFromRoot(root.left, x);
        return 1 + distanceFromRoot(root.right, x);
    }
    public static int distanceBetween2(TreeNode root, int a, int b) {
        if (root == null)
            return 0;
        if (root.val > a && root.val > b)
            return distanceBetween2(root.left, a, b);
        if (root.val < a && root.val < b)
            return distanceBetween2(root.right, a, b);
        if (root.val >= a && root.val <= b)
            return distanceFromRoot(root, a) + distanceFromRoot(root, b);
        return 0;
    }
}
*/
