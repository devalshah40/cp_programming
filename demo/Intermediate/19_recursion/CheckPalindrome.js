/*
Problem Description
Write a recursive function that checks whether string A is a palindrome or Not.
Return 1 if the string A is a palindrome, else return 0.

Note: A palindrome is a string that's the same when read forward and backward.



Problem Constraints
1 <= |A| <= 50000

String A consists only of lowercase letters.



Input Format
The first and only argument is a string A.



Output Format
Return 1 if the string A is a palindrome, else return 0.



Example Input
Input 1:

 A = "naman"
Input 2:

 A = "strings"


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 "naman" is a palindomic string, so return 1.
Explanation 2:

 "strings" is not a palindrome, so return 0.
 */

function scalerApproach(A) {
  function check_palindrome(A, left, right) {
    if (left >= right) return 1;
    if (A[left] == A[right]) return check_palindrome(A, left + 1, right - 1);
    else return 0;
  }

  let n = A.length;
  return check_palindrome(A, 0, n - 1);
}

function myApproach(str) {
  function checkPalindrome(start, end) {
    if (start < 0) {
      return 1;
    }
    if (str[start] === str[end]) {
      return checkPalindrome(start - 1, end + 1);
    } else {
      return 0;
    }
  }
  let start, end;
  let middle = parseInt(str.length / 2);
  if (str.length & 1) {
    start = middle - 1;
    end = middle + 1;
  } else {
    start = middle - 1;
    end = middle;
  }
  // console.log(start, end);
  return checkPalindrome(start, end);
}

let str = 'naman';
// let str = 'a';
// let str = 'abba';

// let ans = myApproach(str);
let ans = scalerApproach(str);
console.log(ans);
