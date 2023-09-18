/*
Q3. Odd and Even Levels

Problem Description
Given a binary tree of integers. Find the difference between the sum of nodes at odd level and sum of nodes at even level.

NOTE: Consider the level of root node as 1.



Problem Constraints
1 <= Number of nodes in binary tree <= 100000

0 <= node values <= 109



Input Format
First and only argument is a root node of the binary tree, A



Output Format
Return an integer denoting the difference between the sum of nodes at odd level and sum of nodes at even level.



Example Input
Input 1:

        1
      /   \
     2     3
    / \   / \
   4   5 6   7
  /
 8 
Input 2:

        1
       / \
      2   10
       \
        4


Example Output
Output 1:

 10
Output 2:

 -7

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
let ans = levelOrderTraversal(root);
console.log(ans);
/*
      8
     / \
    3   10
   / \    \ 
  1   6    20
     / \   /
    4   7  13  
*/
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
  const q = [];
  q.push(root);
  let ans = 0;
  let isOdd = true;
  while (q.length > 0) {
    const size = q.length;

    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (isOdd) {
        ans += node.data;
      } else {
        ans -= node.data;
      }
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    isOdd = !isOdd;
  }
  console.log(ans);
  return ans;
}

/*
Hint 1
There are 2 approaches possible here.

1) Can you modify the level order approach to take care of this problem ? Reversing the entries in alternate row ?
2) If you don’t prefer reversing after the initial pass, can you instead use 2 stacks instead of queue to solve this problem ?


Solution Approach
We will be using 2 stacks to solve this problem. One for the current layer and other one for the next layer. Also keep a flag which indicates the direction of traversal on any level.

You need to pop out the elements from current layer stack and depending upon the value of flag push the childs of current element in next layer stack. You should maintain the output sequence in the process as well. Remember to swap the stacks before next iteration.

When should you terminate this algorithm?


// Definition for a  binary tree node
//    function TreeNode(data) {
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return a array of array of integers
	zigzagLevelOrder : function(A){
    	    var curr = [A];
    	    var rtl = false;
    	    var ans = [];
    	    while(curr.length > 0) {
    	        let new_stack = [];
                let temp = [];
    	        for(let i = curr.length-1; i >= 0; i--){
                    if(!rtl){
        	            if(curr[i].left) new_stack.push(curr[i].left);
        	            if(curr[i].right) new_stack.push(curr[i].right);
                    }
                    else {
        	            if(curr[i].right) new_stack.push(curr[i].right);
        	            if(curr[i].left) new_stack.push(curr[i].left);
                    }
    	            temp.push(curr[i].data);
                }
            	rtl = !rtl;
        	ans.push(temp);
        	curr = new_stack;
    	    }
            return ans;
	}
};
*/
