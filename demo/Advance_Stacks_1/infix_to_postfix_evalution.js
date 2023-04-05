// Q3. Infix to Postfix
// Problem Description
// Given string A denoting an infix expression. Convert the infix expression into a postfix expression.

// String A consists of ^, /, *, +, -, (, ) and lowercase English alphabets where lowercase English alphabets are operands and ^, /, *, +, - are operators.

// Find and return the postfix expression of A.

// NOTE:

// ^ has the highest precedence.
// / and * have equal precedence but greater than + and -.
// + and - have equal precedence and lowest precedence among given operators.

// Problem Constraints
// 1 <= length of the string <= 500000

// Input Format
// The only argument given is string A.

// Output Format
// Return a string denoting the postfix conversion of A.

// Example Input
// Input 1:

//  A = "x^y/(a*z)+b"
// Input 2:

//  A = "a+b*(c^d-e)^(f+g*h)-i"

// Example Output
// Output 1:

//  "xy^az*/b+"
// Output 2:

//  "abcd^e-fgh*+^*+i-"

// Example Explanation
// Explanation 1:

//  Ouput dentotes the postfix expression of the given input.
const Stack = require('../data-structures/Stack');

function infixToPostFix(str) {
  const stack = new Stack();

  const precedenceObj = {
    '^': '3',
    '/': '2',
    '*': '2',
    '+': '1',
    '-': '1',
  };
  let ans = '';
  for (const char of str) {
    if (char >= 'a' && char <= 'z') {
      ans += char;
    } else if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      while (!stack.isEmpty() && stack.peek() !== '(') {
        ans += stack.pop();
      }
      stack.pop();
    } else {
      while (
        !stack.isEmpty() &&
        precedenceObj[stack.peek()] >= precedenceObj[char]
      ) {
        ans += stack.pop();
      }
      stack.push(char);
    }
  }
  while (!stack.isEmpty()) {
    ans += stack.pop();
  }
  return ans;
}

function evalutePostFix(strArr) {
  const stack = new Stack();
  // let ans = 0;
  for (const char of strArr) {
    if (['+', '-', '*', '/'].includes(char)) {
      let ans = 0;
      const second = stack.pop();
      const first = stack.pop();
      switch (char) {
        case '+':
          ans = first + second;
          break;
        case '-':
          ans = first - second;
          break;
        case '*':
          ans = first * second;
          break;
        case '/':
          ans = first / second;
          break;
        default:
          break;
      }
      stack.push(ans);
    } else {
      stack.push(parseInt(char));
    }
  }
  return stack.pop();
}
function evalutePostFixScaler(A) {
  var stack = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] === '*' || A[i] === '+' || A[i] === '/' || A[i] === '-') {
      // pop the top two elements from the stack, perform the operation
      // and push that back into the stack
      var num2 = '(' + stack.pop() + ')';
      var num1 = '(' + stack.pop() + ')';
      stack.push(eval(num1 + A[i] + num2));
    } else {
      stack.push(A[i]);
    }
  }
  return parseInt(stack[0]);
}
let str = 'x^y/(a*z)+b';
let ans = infixToPostFix(str);
console.log(ans);

let strArr = ['2', '1', '+', '3', '*'];
// ans = evalutePostFix(strArr);
ans = evalutePostFixScaler(strArr);
console.log(ans);
