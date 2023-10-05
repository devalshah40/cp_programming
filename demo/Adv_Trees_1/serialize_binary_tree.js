/*
Q4. Serialize Binary Tree

Problem Description
Given the root node of a Binary Tree denoted by A. You have to Serialize the given Binary Tree in the described format.

Serialize means encode it into a integer array denoting the Level Order Traversal of the given Binary Tree.

NOTE:

In the array, the NULL/None child is denoted by -1.
For more clarification check the Example Input.


Problem Constraints
1 <= number of nodes <= 105



Input Format
Only argument is a A denoting the root node of a Binary Tree.



Output Format
Return an integer array denoting the Level Order Traversal of the given Binary Tree.



Example Input
Input 1:

           1
         /   \
        2     3
       / \
      4   5
Input 2:

            1
          /   \
         2     3
        / \     \
       4   5     6


Example Output
Output 1:

 [1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1]
Output 2:

 [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1]


Example Explanation
Explanation 1:

 The Level Order Traversal of the given tree will be [1, 2, 3, 4, 5 , -1, -1, -1, -1, -1, -1].
 Since 3, 4 and 5 each has both NULL child we had represented that using -1.
Explanation 2:

 The Level Order Traversal of the given tree will be [1, 2, 3, 4, 5, -1, 6, -1, -1, -1, -1, -1, -1].
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
let preOrderArr, inOrderArr;
// preOrderArr = [1, 2, 4, 8, 5, 3, 6, 7];
// inOrderArr = [4, 8, 2, 5, 1, 6, 3, 7];

preOrderArr = [8, 3, 1, 6, 4, 7, 10, 20, 13];
inOrderArr = [1, 3, 4, 6, 7, 8, 10, 13, 20];
/*
      8
     / \
    3   10
   / \    \ 
  1   6    20
     / \   /
    4   7  13  
*/
const n = preOrderArr.length;
const preOrderMap = new Map(),
  inOrderMap = new Map();
for (let i = 0; i < preOrderArr.length; i++) {
  preOrderMap.set(preOrderArr[i], i);
}
for (let i = 0; i < inOrderArr.length; i++) {
  inOrderMap.set(inOrderArr[i], i);
}
let root = constructTreeInPreOrderTraversal(0, n - 1, 0, n - 1);
console.log(root);
let ans;
// ans = levelOrderTraversal(root);
// console.log(ans);

function constructTreeInPreOrderTraversal(sPre, ePre, sIn, eIn) {
  const root = new TreeNode(preOrderArr[sPre]);
  if (sIn > eIn) {
    return null;
  }
  const idX = inOrderMap.get(preOrderArr[sPre]);
  // ePre - sPre -1 + 1 = idX - 1 - sIn + 1;
  // ePre - sPre = idX - sIn;
  // ePre = idX - sIn + sPre;
  const numOfElements = idX - sIn;
  ePre = sPre + numOfElements;
  root.left = constructTreeInPreOrderTraversal(
    sPre + 1,
    sPre + numOfElements,
    sIn,
    idX - 1
  );
  root.right = constructTreeInPreOrderTraversal(
    sPre + numOfElements + 1,
    ePre,
    idX + 1,
    eIn
  );
  return root;
}

function levelOrderTraversal(root) {
  if (root === null) {
    return [];
  }
  const q = new Queue();
  q.enqueue([0, root]);

  const emptyNode = { data: -1 };
  const ans = [];

  while (!q.isEmpty()) {
    const size = q.size();
    for (let i = 0; i < size; i++) {
      const [curIndex, node] = q.dequeue();
      ans.push(node.data);

      if (node.data !== -1) {
        if (node.left) {
          q.enqueue([curIndex * 2 + 1, node.left]);
        } else {
          q.enqueue([curIndex * 2 + 1, emptyNode]);
        }
        if (node.right) {
          q.enqueue([curIndex * 2 + 2, node.right]);
        } else {
          q.enqueue([curIndex * 2 + 2, emptyNode]);
        }
      }
    }
  }
  console.log(ans);
  return ans;
}

function levelOrderTraversalScaler(root) {
  if (root === null) {
    return [];
  }
  const queue = [];
  queue.push(root);

  const ans = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      ans.push(-1);
    } else {
      ans.push(node.data);
      queue.push(node.left, node.right);
    }
  }
  return ans;
}
ans = levelOrderTraversalScaler(root);
console.log(ans);
/*
Hint 1
Think of using queue data structure to do a Level Order Traversal of the Binary Tree.

Solution Approach
We can do this simply by using a queue data structure.

Firstly, we will push the root node in the queue.
Now, run a loop until the queue is empty.
Pop the Node, store the value of the node if it not NULL else store -1 in the output array.

Then push the left child and right child of the node respectively in the queue.

Return the output array.

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of integers
	solve : function(root){
            if (!root) {
                return [];
            }
            let queue = [root] , arr = [];
            while (queue.length > 0) {
                let node = queue.pop();
                if (node == null) {
                    arr.push(-1);
                    continue;
                }
                else{
                    arr.push(node.data);
                }
                queue.unshift(node.right , node.left);
            }
            return arr;
	}
};

*/
