/*

Input 1:
A = "100"
B = "11"
Input 2:
A = "110"
B = "10"


Example Output
Output 1:
"111"
Output 2:
"1000"


Example Explanation
For Input 1:
The sum of 100 and 11 is 111.
For Input 2:
 
The sum of 110 and 10 is 1000.
*/
let A = '11';
let B = '11';

let maxStrLen = Math.max(A.length, B.length);
let maxStr = Array(maxStrLen).fill(0);

let i = A.length - 1;
let j = B.length - 1;
let carry = 0;
while (i >= 0 || j >= 0) {
  let firstBinary = A[i] ? parseInt(A[i]) : 0;
  let secondBinary = B[j] ? parseInt(B[j]) : 0;

  let sum = firstBinary + secondBinary + carry;
  carry = parseInt(sum / 2);
  let curSum = parseInt(sum % 2);
  maxStr[maxStrLen - 1] = curSum;
  i--;
  j--;
  maxStrLen--;
}

console.log(maxStr);
maxStr = carry ? carry + '' + maxStr.join('') : maxStr.toString('');
console.log(maxStr);
