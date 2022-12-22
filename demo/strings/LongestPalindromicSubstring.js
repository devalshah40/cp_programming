/*
Problem Description
Given a string A of size N, find and return the longest palindromic substring in A.

Substring of string A is A[i...j] where 0 <= i <= j < len(A)

Palindrome string:
A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

Incase of conflict, return the substring which occurs first ( with the least starting index).



Problem Constraints
1 <= N <= 6000



Input Format
First and only argument is a string A.



Output Format
Return a string denoting the longest palindromic substring of string A.



Example Input
A = "aaaabaaa"


Example Output
"aaabaaa"


Example Explanation
We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".

 */

// let str = 'abcbabcb';
// let str = 'abb';
// let str = 'abba';
// let str = 'aaa';
// let str = 'abcbaaabcb';
// let str = 'abcaacbbbaaaababbabbaabbcccaacabbacacbc';
//  "abcaacbbbaaaababbabbaabbcccaacabbacacbc"
// ans = acabbaca
// current return value :- abbabba

let str = 'caccacabbbba';

/*
A simpler approach, O(N2) time and O(1) space:

In fact, we could solve it in O(N2) time without any extra space.

We observe that a palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center, and there are only 2N-1 such centers.

You might be asking why there are 2N-1 but not N centers?

The reason is that the center of a palindrome can be in between two letters.

Such palindromes have even number of letters (such as “abba”) and their center are between the two ‘b’s.

Since expanding a palindrome around its center could take O(N) time, the overall complexity is O(N2).
*/

function myApproach(str) {
  let charArr = str.split('');

  let n = charArr.length;
  if (n === 0) {
    return '';
  } else if (n === 1) {
    return charArr[0];
  }

  let i = 0;
  let totalLength = 0;
  let finalAns = '';

  while (i < n) {
    let currentLength = 0;
    let currentAns = charArr[i];

    let j = i;

    let currentChar = charArr[i];
    while (j < n) {
      let nextChar = charArr[j + 1];

      if (nextChar === currentChar) {
        currentAns += currentChar;
        j++;
      } else {
        break;
      }
    }

    currentLength = j - i + 1;
    if (currentLength > totalLength) {
      totalLength = currentLength;
      finalAns = currentAns;
    }
    let startingLength = Math.floor((totalLength - currentLength) / 2) + 1;

    let firstStr = '',
      secondStr = '';
    while (i - startingLength >= 0 && j + startingLength < n) {
      firstStr = str.substr(i - startingLength, startingLength);
      secondStr = str.substr(j + 1, startingLength);

      reversedSecondStr = secondStr.split('').reverse().join('');

      if (firstStr === reversedSecondStr) {
        finalAns = firstStr + currentAns + secondStr;
      } else {
        break;
      }
      startingLength++;
    }
    totalLength = finalAns.length;
    i++;
  }
  return finalAns;
}

// let n = charArr.length;
// let i = 0;
// let length = 0;
// let ans = '';
// while (i < n) {
//   while (i - length >= 0 && i + length <= n) {
//     let firstStr = '',
//       secondStr = '';
//     firstStr = str.substr(i - length, length);

//     secondStr = str
//       .substr(i + 1, length)
//       .split('')
//       .reverse()
//       .join('');

//     if (firstStr === secondStr) {
//       length++;
//     } else {
//       break;
//     }
//   }
//   i++;
// }

function longestPalindrome(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = left + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > str.length) {
        str = s.slice(left + 1, right);
      }
    }
  }
  return str;
}

function longestPalindrome2ndApproach(s) {
  let maxLength = -1;
  let startIndex = -1;

  //for odd length elements taking single element as center of palindrome
  for (let i = 0; i < s.length; i++) {
    let [start, curLength] = findPalindrome(s, i, i);
    if (curLength > maxLength) {
      maxLength = curLength;
      startIndex = start;
    }
  }

  //for even length palindrome taking adjacent elements as center of palindrome(right edge case(-1))
  for (let i = 0; i < s.length - 1; i++) {
    let [start, curLength] = findPalindrome(s, i, i + 1);
    if (curLength > maxLength) {
      maxLength = curLength;
      startIndex = start;
    }
  }

  return s.substr(startIndex, maxLength);
}

function findPalindrome(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  // because pointers are one step ahead
  left++;
  right--;
  return [left, right - left + 1];
}
// let ans = myApproach(str);
let ans = longestPalindrome(str);
// let ans = longestPalindrome2ndApproach(str);

console.log(ans);
