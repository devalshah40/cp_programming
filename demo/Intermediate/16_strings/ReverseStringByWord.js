/*
Problem Description
You are given a string A of size N.

Return the string A after reversing the string word by word.

NOTE:

A sequence of non-space characters constitutes a word.
Your reversed string should not contain leading or trailing spaces, even if it is present in the input string.
If there are multiple spaces between words, reduce them to a single space in the reversed string.


Problem Constraints
1 <= N <= 3 * 105



Input Format
The only argument given is string A.



Output Format
Return the string A after reversing the string word by word.



Example Input
Input 1:
    A = "the sky is blue"
Input 2:
    A = "this is ib"


Example Output
Output 1:
    "blue is sky the"
Output 2:
    "ib is this"    


Example Explanation
Explanation 1:
    We reverse the string word by word so the string becomes "blue is sky the".
Explanation 2:
    We reverse the string word by word so the string becomes "ib is this".

 */

let str = 'Hello World';
// let str = 'AB CD';
// str = str.split('').reverse().join('');
let charArr = str.split('');
reverseArr(charArr, 0, charArr.length - 1);
console.log(charArr.join(''));

function reverseArr(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let start = 0,
  end = 0,
  n = charArr.length;
for (let i = 0; i < n; i++) {
  if (charArr[i] === ' ') {
    end = i - 1;
    reverseArr(charArr, start, end);
    start = i + 1;
  }
}
reverseArr(charArr, start, n - 1);
console.log(start, ' ', end);
console.log(charArr.join(''));
