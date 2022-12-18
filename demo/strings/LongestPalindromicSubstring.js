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
let str = 'abcaacbbbaaaababbabbaabbcccaacabbacacbc';
//  "abcaacbbbaaaababbabbaabbcccaacabbacacbc"
// ans = acabbaca
// current return value :- abbabba
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
let ans = myApproach(str);
console.log(ans);

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
