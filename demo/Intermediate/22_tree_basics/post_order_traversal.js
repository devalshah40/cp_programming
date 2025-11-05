/*
Q3. Postorder Traversal
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Given a binary tree, return the Postorder traversal of its nodes values.

NOTE: Using recursion is not allowed.



Problem Constraints
1 <= number of nodes <= 105



Input Format
First and only argument is root node of the binary tree, A.



Output Format
Return an integer array denoting the Postorder traversal of the given binary tree.



Example Input
Input 1:

   1
    \
     2
    /
   3
Input 2:

   1
  / \
 6   2
    /
   3


Example Output
Output 1:

 [3, 2, 1]
Output 2:

 [6, 3, 2, 1]


Example Explanation
Explanation 1:

 The Preoder Traversal of the given tree is [3, 2, 1].
Explanation 2:

 The Preoder Traversal of the given tree is [6, 3, 2, 1].

 */

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }
/*
Hint 1
You can do this problem easily with recursion, but recursion is not allowed here.

Stack can help you to avoid recursion. How?

Solution Approach
Think about using Stack. 

Recursive call would look something like this : 

  postorderprint(root->left);
  postorderprint(root->right);
  print(root->val);


Instead of calling the functions, can you put the nodes on a stack and process them? 
Would the solution be easier to print the reverse of the asked?
*/

function postorderTraversal(A) {
  let arr = [];
  function postorderTraverse(A) {
    if (A === null) {
      return;
    }
    postorderTraverse(A.left);
    postorderTraverse(A.right);
    arr.push(A.data);
  }
  postorderTraverse(A);
  return arr;
}
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

// module.exports = {
//   //param A : root node of tree
//   //return a array of integers
//   postorderTraversal: function (A) {
//     if (!A) return [];
//     const stack1 = [];
//     const stack2 = [];
//     const arr = [];
//     stack1.push(A);
//     while (stack1.length > 0) {
//       // push left, right..
//       let curr = stack1.pop();
//       stack2.push(curr);
//       if (curr.left) {
//         stack1.push(curr.left);
//       }
//       if (curr.right) {
//         stack1.push(curr.right);
//       }
//     }
//     while (stack2.length > 0) {
//       let tmp = stack2.pop();
//       arr.push(tmp.data);
//     }

//     return arr;
//   },
// };
