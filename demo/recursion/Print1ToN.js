/*
Problem Description
You are given an integer A, print 1 to A using using recursion.



Problem Constraints
1 <= A <= 105



Input Format
First argument A is an integer.



Output Format
Print A space-separated integers 1 to A.
Note: There should be exactly one space after each integer. After printing all the integers, print a new line



Example Input
Input 1:

A = 10
Input 2:

A = 5


Example Output
Output 1:

1 2 3 4 5 6 7 8 9 10 
Output 2:

1 2 3 4 5 


Example Explanation
Explanation 1:

Print 1 to 10 space separated integers.

*/

function approach1(n) {
  function printToN(n) {
    if (n === 0) {
      return;
    }
    printToN(n - 1);
    process.stdout.write(n + ' ');
  }
  printToN(n);
}

function approach2(n) {
  let str = '';
  function printToN(n) {
    if (n === 0) {
      return;
    }
    printToN(n - 1);
    str += n + ' ';
  }

  printToN(n);
  console.log(str);
}

let n = 6;
approach1(n);
// approach2(n);
