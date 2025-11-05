/*
Problem Description
Write a recursive function that, given a string S, prints the characters of S in reverse order.



Problem Constraints
1 <= |s| <= 1000



Input Format
First line of input contains a string S.



Output Format
Print the character of the string S in reverse order.



Example Input
Input 1:

 scaleracademy
Input 2:

 cool


Example Output
Output 1:

 ymedacarelacs
Output 2:

 looc


Example Explanation
Explanation 1:

 Print the reverse of the string in a single line.
 */

let str = 'cool';
let ans = '';
function printReverse(index) {
  if (index === -1) {
    return '';
  }
  ans += str[index];
  printReverse(index - 1);
}

function reverse(index) {
  if (index === -1) {
    return '';
  }
  let value = reverse(index - 1);
  // ans += str[index];
  return str[index] + value;
}

// printReverse(str.length - 1);
let answer = reverse(str.length - 1);
console.log(answer);
