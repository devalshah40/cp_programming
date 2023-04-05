/*
Problem Description
You are given an integer A. You have to tell whether it is a perfect number or not.

Perfect number is a positive integer which is equal to the sum of its proper positive divisors.

A proper divisor of a natural number is the divisor that is strictly less than the number.



Problem Constraints
1 <= A <= 106



Input Format
First and only argument contains a single positive integer A.



Output Format
Return 1 if A is a perfect number and 0 otherwise.



Example Input
Input 1:

A = 4
Input 2:

A = 6


Example Output
Output 1:

0 
Output 2:

1 


Example Explanation
Explanation 1:

For A = 4, the sum of its proper divisors = 1 + 2 = 3, is not equal to 4.
Explanation 2:

For A = 6, the sum of its proper divisors = 1 + 2 + 3 = 6, is equal to 6. 

*/
let number = 1;

let factorsCount = 1;
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    // console.log(i);
    // console.log('\n');
    // console.log(number / i);
    // console.log('\n');
    factorsCount += i;
    factorsCount += number / i;
    //corner case for 100, 1 where 10*10 should be 1 factor and for 1 there should be only 1 factor.
    // if (i * i === number) {
    //   factorsCount++;
    // } else {
    //   factorsCount += 2;
    // }
  }
}
console.log(factorsCount);
// if (factorsCount === number) {
//   return 1;
// } else {
//   return 0;
// }
