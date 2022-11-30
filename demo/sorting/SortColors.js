/*
Problem Description
Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent red, white, and blue, respectively.

Note: Using the library sort function is not allowed.



Problem Constraints
1 <= N <= 1000000
0 <= A[i] <= 2


Input Format
First and only argument of input contains an integer array A.


Output Format
Return an integer array in asked order


Example Input
Input 1 :
    A = [0 1 2 0 1 2]
Input 2:

    A = [0]


Example Output
Output 1:
    [0 0 1 1 2 2]
Output 2:

    [0]


Example Explanation
Explanation 1:
    [0 0 1 1 2 2] is the required order.

    */

let A = [0];

let ans = [0, 0, 0];

for (let i = 0; i < A.length; i++) {
  if (A[i] === 0) {
    ans[0]++;
  } else if (A[i] === 1) {
    ans[1]++;
  } else if (A[i] === 2) {
    ans[2]++;
  }
}
console.log(ans);
let ansArr = [];
for (let i = 0; i < ans.length; i++) {
  for (let j = 0; j < ans[i]; j++) {
    ansArr.push(i);
  }
}
console.log(ansArr);
