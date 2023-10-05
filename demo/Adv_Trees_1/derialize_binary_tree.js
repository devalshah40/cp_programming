/*
Q5. Deserialize Binary Tree

Problem Description
You are given an integer array A denoting the Level Order Traversal of the Binary Tree.

You have to Deserialize the given Traversal in the Binary Tree and return the root of the Binary Tree.

NOTE:

In the array, the NULL/None child is denoted by -1.
For more clarification check the Example Input.


Problem Constraints
1 <= number of nodes <= 105

-1 <= A[i] <= 105



Input Format
Only argument is an integer array A denoting the Level Order Traversal of the Binary Tree.



Output Format
Return the root node of the Binary Tree.



Example Input
Input 1:

 A = [1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1]
Input 2:

 A = [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1]


Example Output
Output 1:

           1
         /   \
        2     3
       / \
      4   5
Output 2:

            1
          /   \
         2     3
        / \ .   \
       4   5 .   6


Example Explanation
Explanation 1:

 Each element of the array denotes the value of the node. If the val is -1 then it is the NULL/None child.
 Since 3, 4 and 5 each has both NULL child we had represented that using -1.
Explanation 2:

 Each element of the array denotes the value of the node. If the val is -1 then it is the NULL/None child.
 Since 3 has left child as NULL while 4 and 5 each has both NULL child.

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
let arr;
// arr = [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1];
arr = [1, 2, -1, 4, 5, -1, 6, -1, -1, -1, -1];
// arr = [1, 2, 3, 4, 5, -1, -1, -1, -1, -1, 6, -1, -1];

let ans;
// ans = levelOrderTraversalScaler(arr);
// console.log(ans);

// function levelOrderTraversal(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   const root = new TreeNode(arr[0]);
//   const q = new Queue();
//   q.enqueue(root);
//   let secondIndex = 1;
//   let queueSize = 1;
//   while (q.size() > 0) {
//     // let node = q.dequeue();
//     for (let i = 0; i < 1 << queueSize; i++) {
//       if (i % 2 === 0) {
//         node = q.dequeue();
//       }
//       const newIndex = i + secondIndex;
//       const newNode = new TreeNode(arr[newIndex]);
//       if (node && newNode.data !== -1) {
//         if (i % 2 === 0) {
//           node.left = newNode;
//         } else {
//           node.right = newNode;
//         }
//         q.enqueue(newNode);
//       }
//     }
//     secondIndex += 1 << queueSize;
//     queueSize++;
//   }
//   return root;
// }

//Scaler
function levelOrderTraversalScaler(A) {
  let root = new TreeNode(A[0]);
  q = [];
  q.push(root);
  let i = 1;
  while (q.length > 0) {
    let cur = q.shift();

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
    q.push(cur.left);
    q.push(cur.right);
  }
  return root;
}
