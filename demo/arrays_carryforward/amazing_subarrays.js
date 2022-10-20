/*
You are given a string S, and you have to find all the amazing substrings of S.

An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, O, U).

Input

Only argument given is string S.
Output

Return a single integer X mod 10003, here X is the number of Amazing Substrings in given the string.
Constraints

1 <= length(S) <= 1e6
S can have special characters
Example

Input
    ABEC

Output
    6

Explanation
    Amazing substrings of given string are :
    1. A
    2. AB
    3. ABE
    4. ABEC
    5. E
    6. EC
    here number of substrings are 6 and 6 % 10003 = 6.
 */

//param A : array of integers
//return an integer
function subarrayString(str) {
  let strLength = str.length;
  if (strLength == 0) {
    return 0;
  }
  let subStringLength = 0;
  for (let i = 0; i < strLength; i++) {
    if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(str[i])) {
      subStringLength = (subStringLength + strLength - i) % 10003;
    }
  }
  return subStringLength;
}
let string = 'ABEC';
console.log(subarrayString(string));
