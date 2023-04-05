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
function prec(c) {
  if (c == '^') return 3;
  else if (c == '*' || c == '/') return 2;
  else if (c == '+' || c == '-') return 1;
  else return -1;
}

// The main function to convert infix expression to postfix expression
function infixToPostfix(s) {
  let st = [];
  st.push('N');
  let l = s.length;
  let ns = '';
  for (let i = 0; i < l; i++) {
    // If the scanned character is an operand, add it to output string.
    if (s[i] >= 'a' && s[i] <= 'z') ns += s[i];
    // If the scanned character is an ‘(‘, push it to the stack.
    else if (s[i] == '(') st.push('(');
    // If the scanned character is an ‘)’, pop and to output string from the stack
    // until an ‘(‘ is encountered.
    else if (s[i] == ')') {
      while (st[st.length - 1] != 'N' && st[st.length - 1] != '(') {
        ns += st.pop();
      }
      st.pop();
    }
    // If an operator is scanned
    else {
      while (
        st[st.length - 1] != 'N' &&
        prec(s[i]) <= prec(st[st.length - 1])
      ) {
        ns += st.pop();
      }
      st.push(s[i]);
    }
  }
  // Pop all the remaining elements from the stack
  while (st[st.length - 1] != 'N') {
    ns += st.pop();
  }
  return ns;
}

let str = 'x^y/(a*z)+b';
let ans = infixToPostfix(str);
console.log(ans);
