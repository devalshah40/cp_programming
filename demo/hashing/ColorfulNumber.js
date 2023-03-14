/*
Problem Description
Given a number A, find if it is COLORFUL number or not.

If number A is a COLORFUL number return 1 else, return 0.

What is a COLORFUL Number:

A number can be broken into different contiguous sub-subsequence parts. 
Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245. 
And this number is a COLORFUL number, since product of every digit of a contiguous subsequence is different.


Problem Constraints
1 <= A <= 2 * 109



Input Format
The first and only argument is an integer A.



Output Format
Return 1 if integer A is COLORFUL else return 0.



Example Input
Input 1:

 A = 23
Input 2:

 A = 236


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 Possible Sub-sequences: [2, 3, 23] where
 2 -> 2 
 3 -> 3
 23 -> 6  (product of digits)
 This number is a COLORFUL number since product of every digit of a sub-sequence are different. 
Explanation 2:

 Possible Sub-sequences: [2, 3, 6, 23, 36, 236] where
 2 -> 2 
 3 -> 3
 6 -> 6
 23 -> 6  (product of digits)
 36 -> 18  (product of digits)
 236 -> 36  (product of digits)
 This number is not a COLORFUL number since the product sequence 23  and sequence 6 is same. 

*/

function isColorfulNumber(number) {
  let arr = number.toString().split('');
  let n = arr.length;
  let prefixMul = new Array(n);

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      prefixMul[i] = arr[i];
    } else {
      prefixMul[i] = prefixMul[i - 1] * arr[i];
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(prefixMul[i] + ' ');
  }

  let set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let val;
      if (i === 0) {
        val = prefixMul[j];
      } else {
        val = prefixMul[j] / prefixMul[i - 1];
      }
      if (set.has(val)) {
        return 0;
      } else {
        set.add(val);
      }
    }
  }
  return 1;
}
/*
It is one of the easiest problems in this section.
You just need to simulate what has been stated in the problem.

Iterate over all the consecutive sequence of digits of the number and store the product in a set using hashing.
If the product is already present in the set at any point then the number is not Colorful.
Otherwise, it is a Colorful number.

Example:

A = 123
1 2 3 12 23 123
1 -> 1
2 -> 2
3 -> 3
12 -> 2  we have already encountered 2 before. Return 0

Time Complexity : O((log10A)2)
Space Complexity : O((log10A)2)
*/

function isColorfulNumberEfficient(number) {
  let arr = number.toString().split('');
  let n = arr.length;

  let set = new Set();
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = i; j < n; j++) {
      product *= arr[j];
      if (set.has(product)) {
        return 0;
      } else {
        set.add(product);
      }
    }
  }
  return 1;
}
// let number = 23;
let number = 236;
// let ans = isColorfulNumber(number);
let ans = isColorfulNumberEfficient(number);
console.log(ans);
