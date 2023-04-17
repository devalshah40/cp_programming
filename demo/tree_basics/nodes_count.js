/*
Q5. Nodes Count
Solved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
You are given the root node of a binary tree A. You have to find the number of nodes in this tree.



Problem Constraints
1 <= Number of nodes in the tree <= 105

0 <= Value of each node <= 107



Input Format
The first and only argument is a tree node A.



Output Format
Return an integer denoting the number of nodes of the tree.



Example Input
Input 1:

 Values =  1 
          / \     
         4   3                        
Input 2:

 
 Values =  1      
          / \     
         4   3                       
        /         
       2                                     


Example Output
Output 1:

 3 
Output 2:

 4 


Example Explanation
Explanation 1:

Clearly, there are 3 nodes 1, 4 and 3.
Explanation 2:

Clearly, there are 4 nodes 1, 4, 3 and 2.


*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  solve: function (A) {
    let count = 0;

    function preOrderTraversal(A) {
      if (A === null) {
        return;
      }
      count++;

      preOrderTraversal(A.left);
      preOrderTraversal(A.right);
    }
    preOrderTraversal(A);

    return count;
  },
};
/*
Hint 1
Just do BFS or DFS over the tree.
Solution Approach
Run a recursive function, call left and right children if they exist, and increase the answer variable accordingly.  
*/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

// function count(A, ans) {
//   if (A === null) return;
//   ans.value++;
//   count(A.left, ans);
//   count(A.right, ans);
// }
// module.exports = {
//   //param A : root node of tree
//   //return an integer
//   solve: function (A) {
//     const ans = { value: 0 };
//     count(A, ans);
//     return ans.value;
//   },
// };
