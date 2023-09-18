/*
Q5. Boundary Traversal Of Binary Tree
Unsolved
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given a binary tree, return the values of its boundary in anti-clockwise direction starting from the root. Boundary includes left boundary, leaves, and right boundary in order without duplicate nodes.

Left boundary is defined as the path from the root to the left-most node.
Right boundary is defined as the path from the root to the right-most node.

If the root doesn't have left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not applies to any subtrees.

The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if exists. If not, travel to the right subtree. Repeat until you reach a leaf node.

The right-most node is also defined by the same way with left and right exchanged.

Return an array of integers denoting the boundary values of tree in anti-clockwise order.


Problem Constraints
1 <= Number of nodes in binary tree <= 105
0 <= node values <= 109


Input Format
The Only Argument is the Root of the Binary Tree, A.


Output Format
Return an array of integers denoting the boundary values of tree in anti-clockwise order.


Example Input
Input 1:
               _____1_____
              /           \
             2             3
            / \            / 
           4   5          6   
              / \        / \
             7   8      9  10  
Input 2:
                1
               / \
              2   3
             / \  / \
            4   5 6  7 


Example Output
Output 1:
[1, 2, 4, 7, 8, 9, 10, 6, 3]
Output 2:
[1, 2, 4, 5, 6, 7, 3]


Example Explanation
Explanation 1:
The left boundary are node 1, 2, 4. (4 is the left-most node according to definition)
The leaves are node 4, 7, 8, 9, 10.
The right boundary are node 1, 3, 6, 10. (10 is the right-most node).
So order them in anti-clockwise without duplicate nodes we have [1, 2, 4, 7, 8, 9, 10, 6, 3].
Explanation 2:
The left boundary are node 1, 2, 4. (4 is the left-most node according to definition)
The leaves are node 4, 5, 6, 7.
The right boundary are node 1, 3, 7. (7 is the right-most node).
So order them in anti-clockwise without duplicate nodes we have [1, 2, 4, 5, 6, 7, 3].
*/
/*Q3. Level Order
Unsolved
feature icon
Using hints is now penalty free
Use Hint
Problem Description
Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return a 2D integer array denoting the level order traversal of the given binary tree.



Example Input
Input 1:

    3
   / \
  9  20
    /  \
   15   7
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [
   [3],
   [9, 20],
   [15, 7]
 ]
Output 2:

 [ 
   [1]
   [6, 2]
   [3]
 ]


Example Explanation
Explanation 1:

 Return the 2D array. Each row denotes the traversal of each level.
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

class TreeInfo {
  constructor(currentSum, maxSum) {
    this.maxSum = maxSum;
    this.currentSum = currentSum;
  }
}
//Scaler
function buildTree(A) {
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
const lastOrderTraversalArr = [];
let arr;
// arr = [20, 10, 20, -1, -1, 10, 50, -1, -1, -1, -1];
// arr = [1, 2, 3, -1, -1, -1, -1];
// arr = [1, 2, -1, 3, 4, -1, -1, -1, -1];
arr = [
  51, 17, 6, 45, 58, 5, 30, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
];
arr = [2, 1, 32, 36, -1, -1, -1, -1, -1];
let root = buildTree(arr);
console.log(root);
let ans = boundaryTraversal(root);
console.log(ans);
/*
          51
         /  \    
       17    6
      /  \  / \
    45   58 5  30
   /  \  /
  4    8 7
*/

function postOrderTraversal(root) {
  if (root === null) {
    return;
  }
  if (!root.left && !root.right) {
    lastOrderTraversalArr.push(root.data);
  }
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
}

function boundaryTraversal(root) {
  if (root === null) {
    return [];
  }
  const levelOrderTraversalArr = levelOrderTraversal(root);

  console.log(levelOrderTraversalArr);
  postOrderTraversal(root);
  console.log(lastOrderTraversalArr);
  let boundaryArr = [];

  const levelCount = levelOrderTraversalArr.length;
  for (let i = 0; i < levelCount - 1; i++) {
    boundaryArr.push(levelOrderTraversalArr[i][0]);
  }

  boundaryArr = [...boundaryArr, ...lastOrderTraversalArr];

  for (let i = levelCount - 2; i > 0; i--) {
    const val = levelOrderTraversalArr[i][levelOrderTraversalArr[i].length - 1];
    if (val !== boundaryArr[boundaryArr.length - 1]) {
      boundaryArr.push(
        levelOrderTraversalArr[i][levelOrderTraversalArr[i].length - 1]
      );
    }
  }
  return boundaryArr;
}

function levelOrderTraversal(root) {
  if (root === null) {
    return [];
  }
  const q = new Queue();
  q.enqueue(root);
  const ans = [];
  while (!q.isEmpty()) {
    const level = [];
    const size = q.size();

    for (let i = 0; i < size; i++) {
      const node = q.dequeue();
      level.push(node.data);

      if (node.left) {
        q.enqueue(node.left);
      }
      if (node.right) {
        q.enqueue(node.right);
      }
    }
    ans.push(level);
  }
  return ans;
}

/*
Hint 1
How can you approach traversing the binary tree and 
collecting the required nodes to form the boundary using 
a combination of iterative and recursive approaches? 

To break down the boundary, what are the three parts 
you can focus on?

Hint 2
The boundary traversal of a binary tree can be divided into three parts:
* Left boundary
* Leaves
* Right boundary.

For the left boundary, iteratively traverse from the root to the leftmost node, adding each node encountered to the list.

For the right boundary, iteratively traverse from the root to the rightmost node, adding each node encountered to the list.

To collect the leaf nodes, recursively explore the tree using depth-first search (DFS), adding each leaf node (nodes with no left or right child) to the list.

By effectively combining these boundaries in the appropriate order, the anti-clockwise boundary of the binary tree can be formed.

Solution Approach
Find the Leftmost boundary path:
This path can be found in top down manner and store this in temp array.
Find all the leaves from left to right:
Find all leaf nodes using inorder traversal and store them at the end of temp array.
Find the Rightmost boundary path:
This path can be found in bottom up manner and store this at the end of temp array.
Now traverse temp array and remove duplicates.

// /**
//  * Definition for binary tree
//  * class TreeNode {
//  *     int val;
//  *     TreeNode left;
//  *     TreeNode right;
//  *     TreeNode(int x) {
//  *      val = x;
//  *      left=null;
//  *      right=null;
//  *     }
//  * }

public class Solution {
    private void leftMost(TreeNode root, List<TreeNode> list) {
        while (root != null) {
            list.add(root);
            if (root.left != null)
                root = root.left;
            else
                root = root.right;
        }
    }

    private void leaf(TreeNode root, List<TreeNode> list) {
        if (root != null) {
            if (root.left == null && root.right == null)
                list.add(root);
            if (root.left != null)
                leaf(root.left, list);
            if (root.right != null)
                leaf(root.right, list);
        }
    }

    private void rightMost(TreeNode root, List<TreeNode> list) {
        Stack<TreeNode> stack = new Stack<>();
        while (root != null) {
            stack.push(root);
            if (root.right != null)
                root = root.right;
            else
                root = root.left;
        }
        while (!stack.isEmpty()) {
            list.add(stack.peek());
            stack.pop();
        }
    }

    public int[] solve(TreeNode A) {
        List<Integer> ans = new ArrayList<>();
        if (A == null)
            return new int[0];
        List<TreeNode> tmp = new ArrayList<>();
        Set<TreeNode> set = new HashSet<>();
        leftMost(A, tmp);
        leaf(A, tmp);
        rightMost(A, tmp);
        for (TreeNode p : tmp) {
            if (!set.contains(p)) {
                ans.add(p.val);
                set.add(p);
            }
        }

        int[] result = new int[ans.size()];
        for (int i = 0; i < ans.size(); i++) {
            result[i] = ans.get(i);
        }
        return result;
    }
}
*/
