/*
Problem Description
On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

Given row number A and index B, return the Bth indexed symbol in row A. (The values of B are 0-indexed.).



Problem Constraints
1 <= A <= 20

0 <= B < 2A - 1



Input Format
First argument is an integer A.

Second argument is an integer B.



Output Format
Return an integer denoting the Bth indexed symbol in row A.



Example Input
Input 1:

 A = 3
 B = 0
Input 2:

 A = 4
 B = 4


Example Output
Output 1:

 0
Output 2:

 1


Example Explanation
Explanation 1:

 Row 1: 0
 Row 2: 01
 Row 3: 0110
Explanation 2:

 Row 1: 0
 Row 2: 01
 Row 3: 0110
 Row 4: 01101001
 */
function solveEasy(A, B) {
  let str = '0';
  for (let i = 0; i < A - 1; i++) {
    let ans = '';
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '0') {
        ans += '01';
      } else if (str[j] === '1') {
        ans += '10';
      }
    }
    str = ans;
  }
  return str[B];
}
/*
When
A = 1 -> 0
A = 2 ->01
A = 3 ->0110

As we can see that there are two part in string (when A>=2)
first part is repeating of (A-1)th> step and second part is also compliment of (A-1)th step

for A = 3 -> first part - 01 ( it is same as when A == 2) second part- 10 ( compliment of when A == 2)

We know that on every expansion, the length of String is 2(A-1)

so what we can do when B value is <= mid we can search the result in first part of (A-1)th step solve(A-1, B)

and when B > mid we can search the result in (A-1)th step but compliment of that index to get the actual index in 1st part we have to do B - mid.
*/
function solveHard(A, B) {
  B = Number(B);
  return solveIssue(B);
  function solveIssue(B) {
    if (B === 0) {
      return 0;
    }
    let index = parseInt(B / 2);
    let parentVal = solveIssue(index);
    if (B & 1) {
      return 1 - parentVal;
    } else {
      return parentVal;
    }
  }
}

function solveHardBigInt(A, B) {
  return Number(solveIssue(B));
  function solveIssue(B) {
    if (B === 0n) {
      return 0n;
    }
    let index = B / 2n;
    let parentVal = solveIssue(index);
    if (B & 1n) {
      return 1n - parentVal;
    } else {
      return parentVal;
    }
  }
}
// let A = 4;
// let B = 5;
let A = 4;
let B = 8;
// let ans = solve(A, B);
let ans = solveHard(A, B);
console.log('ans ', ans);
/*
0
01
0110
01101001
0110100110010110

1 2 3 4 5 6 7 8
*/
