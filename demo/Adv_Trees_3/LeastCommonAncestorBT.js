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
arr = [
  16, 23, 9, -1, 1, 22, 2, 25, 19, 6, 13, -1, 24, 14, -1, 30, 4, 26, 29, -1, -1,
  -1, -1, -1, 3, -1, 8, -1, -1, 12, 18, 28, -1, 10, -1, 5, -1, 17, 11, 21, 7,
  -1, -1, -1, 20, -1, -1, -1, -1, -1, 15, -1, -1, -1, -1, -1, -1, -1, 27, -1,
  -1,
];
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

let left, right;
l = 7;
r = 13;

// assumption both nodes must be present
function lca(root, n1, n2) {
  if (root === null) {
    return -1;
  }
  if (root.data === n1 || root.data === n2) {
    return root.data;
  }
  const lLca = lca(root.left, n1, n2);
  const rLca = lca(root.right, n1, n2);

  if (lLca !== -1 && rLca !== -1) {
    return root.data;
  } else if (lLca === -1) {
    return rLca;
  } else {
    return rLca;
  }
}
let ans;
ans = lca(root, n1, n2);
console.log(ans);
/* 
if both nodes must present condition is not there than check whether both nodes exist 
in tree then do above implementation

module.exports = { 
 //param A : root node of tree
 //param B : integer
 //param C : integer
 //return an integer
    lca : function(root, n1, n2){
        if(!root) return -1;

        //Checking whether both the elements are present in the tree ele returning -1
        if(!find(root, n1) || !find(root, n2)) return -1;

        // If found both the values then return the lowest common ancestor
        else return helper(root);

        function find(root, val) {
            if(!root) return false;
            if(root.data == val) return true;
            return find(root.left, val) || find(root.right, val)
        }

        function helper(root) {
            if(!root) return -1;
            if(root.data == n1 || root.data == n2)  return root.data;

            let left = helper(root.left, n1, n2);
            let right = helper(root.right, n1, n2);

            if(left !== -1 && right !== -1) return root.data
            return left == -1 ? right : left;
        }
    },
};

Hint 1
Bruteforce approach :
Pick every node. For every node, search for val1, val2 in the subtree. If val1 and val2 are found in the subtree, then the current node is definitely one of the ancestors. Also, track the depth of the current node. Pick the qualifying node of the highest depth.

Hint for a better solution :

1) If you had the path from the nodes to the root, what property would the path have? Can the paths be used to determine LCA?
2) If you took a bottom-up approach using recursion, can you think of a simple solution?


Solution Approach
Linear solution using path calculation :

1) Find a path from the root to n1 and store it in a vector or array.
2) Find a path from the root to n2 and store it in another vector or array.
3) Traverse both paths till the values in arrays are the same. Return the common element just before the mismatch

Linear solution using recursion :

We traverse from the bottom, and once we reach a node that matches one of the two nodes, we pass it up to its parent. The parent will then test its left and right subtree if each contains one of the two nodes. If yes, then the parent must be the LCA, and we pass its parent up to the root. If not, we pass the lower node, which contains either one of the two nodes (if the left or right subtree contains either p or q) or NULL 
(if both the left and right subtree does not contain either p or q) up.

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
/**
 * Definition for binary tree
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 
public class Solution {
  public static TreeNode LCA(TreeNode root, int val1, int val2) {
      if (root == null)
          return null;
      if (root.val == val1 || root.val == val2)
          return root;
      TreeNode l = LCA(root.left, val1, val2);
      TreeNode r = LCA(root.right, val1, val2);
      if (l != null && r != null)
          return root;
      if (l != null)
          return l;
      return r;
  }
  public static boolean find(TreeNode root, int val1) {
      if (root == null)
          return false;
      if (root.val == val1)
          return true;
      return (find(root.left, val1) || find(root.right, val1));
  }
  public int lca(TreeNode A, int B, int C) { 
      int val1 = B;
      int val2 = C;
      TreeNode root = A;
      if (find(root, val1) == false || find(root, val2) == false) 
        return -1; 
      TreeNode ans = LCA(root, val1, val2); 
      if (ans == null) return -1;
    return ans.val;  
  }
}
*/
