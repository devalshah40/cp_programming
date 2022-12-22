/*
Problem Description
Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.



Problem Constraints
1 <= |A| <= 100000



Input Format
First and only argument is the vector A



Output Format
Return one integer, the answer to the question



Example Input
Input 1:

A = [0, 1, 0, 2]
Input 2:

A = [1, 2]


Example Output
Output 1:

1
Output 2:

0


Example Explanation
Explanation 1:

1 unit is trapped on top of the 3rd element.
Explanation 2:

No water is trapped.
*/
function rainWaterTrapped(A) {
  let N = A.length;

  let leftMax = Array(N);
  leftMax[0] = 0;
  for (let i = 1; i < A.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], A[i - 1]);
  }
  let rightMax = Array(N);
  rightMax[N - 1] = 0;
  for (let i = N - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], A[i + 1]);
  }

  let ans = 0;
  for (let i = 1; i < A.length - 1; i++) {
    let leftSideMax = leftMax[i];
    let rightSideMax = rightMax[i];

    let val = Math.min(leftSideMax, rightSideMax) - A[i];
    if (val > 0) {
      ans += val;
    }
  }
  return ans;
}

// let A = [0, 1, 0, 2];
// 1
let A = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// 6
let ans = rainWaterTrapped(A);
console.log(ans);
