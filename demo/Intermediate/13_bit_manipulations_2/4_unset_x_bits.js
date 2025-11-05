/*
Problem Description
Given an integer A. Unset B bits from the right of A in binary.
For eg:-
A = 93, B = 4
A in binary = 1011101
A should become = 1010000 = 80. Therefore return 80.


Problem Constraints
1 <= A <= 1018
1 <= B <= 60


Input Format
The first argument is a single integer A.
The second argument is a single integer B.


Output Format
Return the number with B unset bits from the right.


Example Input
Input 1:-
A = 25
B = 3
Input 2:-
A = 37
B = 3


Example Output
Output 1:-
24
Output 2:-
32


Example Explanation
Explanation 1:-
A = 11001 to 11000
Explantio 2:-
A = 100101 to 100000


*/
let A = 25;
let B = 3;

/*
Try using for loops iterate from 0 to B-1 and do the needful.

Initialise a variable ans = A
Iterate from i = 0 to i = B - 1. If ith bit was set in A that is (A & (1<<i)) != 0, ans -= (1<<i), unset it from the answer.
*/
function unsetXBits(A, B) {
  let unset = ~((1 << B) - 1);
  return A & unset;
  // let unset = ~((1n << BigInt(B)) - 1n);
  // return A & unset;
}

function unsetIthBitScaler(N, i) {
  return (N >> BigInt(i)) << BigInt(i);
}

// let ans = unsetIthBit(A, B);
let ans = unsetIthBitScaler(A, B);
console.log(ans);
