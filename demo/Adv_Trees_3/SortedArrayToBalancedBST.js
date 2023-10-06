/*
Q3. Sorted Array To Balanced BST

Problem Description
Given an array where elements are sorted in ascending order, convert it to a height Balanced Binary Search Tree (BBST).

Balanced tree : a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node 
never differ by more than 1.



Problem Constraints
1 <= length of array <= 100000



Input Format
First argument is an integer array A.



Output Format
Return a root node of the Binary Search Tree.



Example Input
Input 1:

 A : [1, 2, 3]
Input 2:

 A : [1, 2, 3, 5, 10]


Example Output
Output 1:

      2
    /   \
   1     3
Output 2:

      3
    /   \
   2     5
  /       \
 1         10


Example Explanation
Explanation 1:

 You need to return the root node of the Binary Tree.
*/

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

// preOrderArr = [6, 9, 4, 8, 3];
// inOrderArr = [9, 6, 8, 3, 4];
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
    

      8
     / \
    3   10
   / \    \ 
  1   6    20
           /
          13  

1 3 6 8 10 20 13
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

class TreeInfo {
  constructor(isBST, min, max) {
    this.isBST = isBST;
    this.min = min;
    this.max = max;
  }
}

function sortedArrayToBST(nums) {
  return buildBST(nums, 0, nums.length - 1);
  function buildBST(nums, low, high) {
    if (low < 0 || high > nums.length - 1 || low > high) {
      return null;
    }
    let mid = low + Math.floor((high - low) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildBST(nums, low, mid - 1);
    root.right = buildBST(nums, mid + 1, high);
    return root;
  }
}
let nums;
nums = [1, 2, 3, 5, 10];
// nums = [];

let ans = sortedArrayToBST(nums);
console.log(ans);

/*
Sure! Here are a few edge cases that you should consider while solving this problem:

1. Empty array: What should be the output if the given array is empty?
2. Single element array: What should be the output if the given array has only one element?
3. Array with duplicate elements: How will you handle an array that contains duplicate elements?
4. Array with negative elements: Can the array contain negative elements? If yes, how will you handle them?
5. Large input size: How efficiently can you handle a large input size, such as an array with 100,000 elements?
6, Randomly sorted array: Can you handle an array that is sorted in a random order, rather than strictly ascending?

Considering these edge cases will help you ensure that your solution is robust and handles all possible scenarios.


Hint 1
What will happen when you choose the middle element of the array as the root?

After that, can you simulate the same thing for the left and right parts of the array?

Solution Approach
For a BST, all values lower than the root go in the left part of the root, and all values higher go in the right part of the root.
To balance the tree, we will need to make sure we distribute the elements almost equally in the left and right parts.
So we choose the mid part of the array as the root and divide the elements around it.

Things to take care of :
1) Are you passing a copy of the array around, or are you only passing around a reference?
2) Are you dividing the array before passing it onto the next function call or are you just specifying the start and end index?

*/
