/*
Balanced Paranthesis
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Given an expression string A, examine whether the pairs and the orders of “{“,”}”, ”(“,”)”, ”[“,”]” are correct in A.

Refer to the examples for more clarity.



Problem Constraints
1 <= |A| <= 100



Input Format
The first and the only argument of input contains the string A having the parenthesis sequence.



Output Format
Return 0 if the parenthesis sequence is not balanced.

Return 1 if the parenthesis sequence is balanced.



Example Input
Input 1:

 A = {([])}
Input 2:

 A = (){
Input 3:

 A = ()[] 


Example Output
Output 1:

 1 
Output 2:

 0 
Output 3:

 1 


Example Explanation
You can clearly see that the first and third case contain valid paranthesis.

In the second case, there is no closing bracket for {, thus the paranthesis sequence is invalid.
  */
const Stack = require('../data-structures/Stack');

function isBalancedParanthesis(str) {
  let stack = new Stack();
  for (const char of str) {
    let searchedParanthesis = '';
    if (char === '}') {
      searchedParanthesis = '{';
    } else if (char === ']') {
      searchedParanthesis = '[';
    } else if (char === ')') {
      searchedParanthesis = '(';
    }
    const top = stack.peek();
    if (top === searchedParanthesis) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.isEmpty() ? true : false;
}
function solveScaler(s) {
  let validStart = ['[', '{', '('];

  let define = {
    '[': ']',
    '(': ')',
    '{': '}',
  };

  let arr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    // matches adjacent opening and closing brackets and removes them
    if (validStart.includes(arr[i]) && arr[i + 1] === define[arr[i]]) {
      arr.splice(i, 2);
      i = i - 2;
    }
  }
  return !arr.length ? 1 : 0;
}
let str = '{([()])}';
// let ans = isBalancedParanthesis(str);
let ans = solveScaler(str);
console.log(ans);
