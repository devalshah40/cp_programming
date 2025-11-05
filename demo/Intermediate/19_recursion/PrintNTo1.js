/*
Problem Description
You are given an integer A, print A to 1 using using recursion.



Problem Constraints
1 <= A <= 105



Input Format
First argument A is an integer.



Output Format
Print A space-separated integers A to 1.
Note: There should be exactly one space after each integer. Print a new line after printing the A integers



Example Input
Input 1:

10
Input 2:

5


Example Output
Output 1:

10 9 8 7 6 5 4 3 2 1 
Output 2:

5 4 3 2 1 


Example Explanation
Explanation 1:

Print 10 to 1 space separated integers.

*/

function approach1(n) {
  function printToN(n) {
    if (n === 0) {
      return;
    }
    process.stdout.write(n + ' ');
    printToN(n - 1);
  }
  printToN(n);
}

function approach2(n) {
  let str = '';
  function printToN(n) {
    if (n === 0) {
      return;
    }
    str += n + ' ';
    printToN(n - 1);
  }

  printToN(n);
  console.log(str);
}

let n = 18;
approach1(n);
// approach2(n);
