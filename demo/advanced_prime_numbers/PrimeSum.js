/*
Problem Description
Given an even number A ( greater than 2 ), return two prime numbers whose sum will be equal to the given number.

If there is more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c,d] is another solution with c <= d, then 
[a, b] < [c, d], If a < c OR a==c AND b < d. 
NOTE: A solution will always exist. Read Goldbach's conjecture.



Problem Constraints
4 <= A <= 2*107



Input Format
First and only argument of input is an even number A.



Output Format
Return a integer array of size 2 containing primes whose sum will be equal to given number.



Example Input
 4


Example Output
 [2, 2]


Example Explanation
 There is only 1 solution for A = 4.

 */

function solve(N) {
  let primeNumbers = sievePrime(N);
  for (let i = 2; i <= N; i++) {
    if (primeNumbers[i] && primeNumbers[N - i]) {
      return i, N - i;
    }
  }
}

function sievePrime(N) {
  let primeNumbers = Array(N + 1).fill(true);
  primeNumbers[0] = false;
  primeNumbers[1] = false;

  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j <= N; j += i) {
        primeNumbers[j] = false;
      }
    }
  }
  return primeNumbers;
}

let A = 378;
let ans = solve(A);
console.log(ans);
