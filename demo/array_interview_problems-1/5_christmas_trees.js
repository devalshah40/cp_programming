/*
Problem Description
You are given an array A consisting of heights of Christmas trees and an array B of the same size 
consisting of the cost of each of the trees (Bi is the cost of tree Ai, where 1 ≤ i ≤ size(A)), 
and you are supposed to choose 3 trees (let's say, indices p, q, and r), such that Ap < Aq < Ar, where p < q < r.
The cost of these trees is Bp + Bq + Br.

You are to choose 3 trees such that their total cost is minimum. Return that cost.

If it is not possible to choose 3 such trees return -1.



Problem Constraints
1 <= A[i], B[i] <= 109
3 <= size(A) = size(B) <= 3000



Input Format
First argument is an integer array A.
Second argument is an integer array B.



Output Format
Return an integer denoting the minimum cost of choosing 3 trees whose heights are strictly in increasing order, if not possible, -1.



Example Input
Input 1:

 A = [1, 3, 5]
 B = [1, 2, 3]
Input 2:

 A = [1, 6, 4, 2, 6, 9]
 B = [2, 5, 7, 3, 2, 7]


Example Output
Output 1:

 6 
Output 2:

 7 


Example Explanation
Explanation 1:

 We can choose the trees with indices 1, 2 and 3, and the cost is 1 + 2 + 3 = 6. 
Explanation 2:

 We can choose the trees with indices 1, 4 and 5, and the cost is 2 + 3 + 2 = 7. 
 This is the minimum cost that we can get.
*/

let arr = [1, 6, 4, 2, 6, 9];
let costArr = [2, 5, 7, 3, 2, 7];
//TC :- O(N^3) -> N^3 steps
//SC :- O(1)
function brutForceApproach(arr, costArr) {
  let minCost = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] < arr[j] && arr[j] < arr[k]) {
          let currentCost = costArr[i] + costArr[j] + costArr[k];
          minCost = Math.min(currentCost, minCost);
        }
      }
    }
  }
  return minCost === Number.POSITIVE_INFINITY ? -1 : minCost;
}

//TC :- O(n^2) -> N^3 steps
//SC :- O(1)
function efficientApproach(arr, costArr) {
  let minCost = Number.POSITIVE_INFINITY;
  for (let i = 1; i < arr.length - 1; i++) {
    let leftCost = Number.POSITIVE_INFINITY;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        leftCost = Math.min(costArr[j], leftCost);
      }
    }
    let rightCost = Number.POSITIVE_INFINITY;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        rightCost = Math.min(costArr[j], rightCost);
      }
    }
    currentMinCost = leftCost + rightCost + costArr[i];
    minCost = Math.min(currentMinCost, minCost);
  }
  return minCost;
}

// let minCost = brutForceApproach(arr, costArr);
let minCost = efficientApproach(arr, costArr);

console.log(minCost);
