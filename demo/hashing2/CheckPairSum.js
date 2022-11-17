/*
Problem Description
Given an Array of integers B, and a target sum A.
Check if there exists a pair (i,j) such that Bi + Bj = A and i!=j.


Problem Constraints
1<= Length of array B <= 103
0<= Bi <=109
0<= A <=109


Input Format
First argument A is the Target sum, and second argument is the array B


Output Format
Return an integer value 1 if there exists such pair, else return 0.


Example Input
Input 1:

A = 8   B = [3, 5, 1, 2, 1, 2]
Input 2:

A = 21   B = [9, 10, 7, 10, 9, 1, 5, 1, 5]


Example Output
Output 1:

1
Output 2:

0


Example Explanation
In Example 1:
It is possible to obtain sum 8 using 3 and 5.
*/
let arr = [2, 3, 4, 6, 1];
let k = 8;

function checkPairSum(arr, k) {
  let s = new Set();
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (s.has(k - val)) {
      return 1;
    } else {
      s.add(val);
    }
  }
  return 0;
}

let ans = checkPairSum(arr, k);
console.log(ans);
