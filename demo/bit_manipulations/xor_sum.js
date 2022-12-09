/*
Problem Description
Given two integers A and B. 
Find the minimum value (A ⊕ X) + (B ⊕ X) that can be achieved for any X.

where P ⊕ Q is the bitwise XOR operation of the two numbers P and Q.


Problem Constraints
1 <= A, B <= 109


Input Format
The first argument is a single integer A.
The second argument is a single integer B.


Output Format
Return the minimum value (A ⊕ X) + (B ⊕ X) that can be achieved for any X.


Example Input
Input 1:-
A = 6
B = 12
Input 2:-
A = 4
B = 9


Example Output
Output 1:-
10
output 2:-
13


Example Explanation 
Expanation 1:-
X ^ A + X ^ B = 10 when X = 8
Explanation 2:-
X ^ A + X ^ B = 13 when X = 1

Hint 1
We can choose any X. So lets try to choose optimally. Say for any ith bit in binary values of A and B, the bit is set for both A and B.
Then we can also set it in X such that XOR with both becomes 0.
Similarly, if for both A and B the bit was unset, we unset it for X as well. XOR of that bit remains 0.
Now try to think if the bit is set for one and unset for other what will X and our result be.

That's right doesnt matter if the bit is set or unset that bit will be added to our answer as either A ^ X != 0 or B ^ X != 0 for that bit.
Now did you take the observation? If we are adding a bit to our answer if that bit is set for one number and unset for another,
then it is A ^ B operation itself. So A ^ B is our answer.

https://www.geeksforgeeks.org/choose-x-such-that-a-xor-x-b-xor-x-is-minimized/
*/
let x = 3;
let y = 3;
// let x = 9;
// let y = 4;

let k = 1;
let min = x + y;
for (let k = 1; k < x + y; k++) {
  let z = (x ^ k) + (y ^ k);
  console.log(x, ' ', y, ' ', k, ' ', z);
  if (z < min) {
    min = z;
  }
}
console.log(min);

// let ans = x * (x & y) + y * (x & y);
