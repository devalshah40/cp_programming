/*
Problem Description
Given a string A and a string B, find the window with minimum length in A, which will contain all the characters in B in linear time complexity.
Note that when the count of a character c in B is x, then the count of c in the minimum window in A should be at least x.

Note:

If there is no such window in A that covers all characters in B, return the empty string.
If there are multiple such windows, return the first occurring minimum window ( with minimum start index and length )


Problem Constraints
1 <= size(A), size(B) <= 106



Input Format
The first argument is a string A.
The second argument is a string B.



Output Format
Return a string denoting the minimum window.



Example Input
Input 1:

 A = "ADOBECODEBANC"
 B = "ABC"
Input 2:

 A = "Aa91b"
 B = "ab"


Example Output
Output 1:

 "BANC"
Output 2:

 "a91b"


Example Explanation
Explanation 1:

 "BANC" is a substring of A which contains all characters of B.
Explanation 2:

 "a91b" is the substring of A which contains all characters of B.

 */
function minWindow(A, B) {
  let sourceMap = new Map();
  for (const s of A) {
    sourceMap.set(s, (sourceMap.get(s) || 0) + 1);
  }
  console.log(sourceMap);
  let targetMap = new Map();
  let totalLen = 0;
  let ans = '';
  for (let index = 0; index < B.length; index++) {
    const char = B[index];
    const sourceFrequency = sourceMap.get(char);

    if (sourceFrequency) {
      totalLen++;
      const isAvailable = targetMap.has(char);
      if (isAvailable) {
        // if (targetMap.size() === 1) {
        //   targetMap.set(char, index);
        // }
        // const targetFrequency = targetMap.get(char);
        // if (targetFrequency > 1) {
        targetMap = new Map();
        totalLen = 1;
        // }
      }
    }
    targetMap.set(char, index);

    if (sourceMap.size === totalLen) {
      if (targetMap.size > ans.length) {
        ans = targetMap.values().toString();
      }
    }
  }
  return ans;
}
let A = 'ABC';
let B = 'AANBADC';
let ans = minWindow(A, B);
console.log(ans);
