/*
Problem Description
A lucky number is a number that has exactly 2 distinct prime divisors.

You are given a number A, and you need to determine the count of lucky numbers between the range 1 to A (both inclusive).



Problem Constraints
1 <= A <= 50000



Input Format
The first and only argument is an integer A.



Output Format
Return an integer i.e the count of lucky numbers between 1 and A, both inclusive.



Example Input
Input 1:

 A = 8
Input 2:

 A = 12


Example Output
Output 1:

 1
Output 2:

 3


Example Explanation
Explanation 1:

 Between [1, 8] there is only 1 lucky number i.e 6.
 6 has 2 distinct prime factors i.e 2 and 3.
Explanation 2:

 Between [1, 12] there are 3 lucky number: 6, 10 and 12.
 */

function solve(N) {
  let A = [];
  for (let i = 0; i <= N; i++) {
    A[i] = false;
  }
  let spf = sieveSPF(N);

  let ans = 0;
  for (let i = 0; i <= N; i++) {
    if (A[i]) continue;

    let N = i;
    let divisors = [];
    while (N > 1) {
      let x = spf[N];
      while (spf[N] === x) {
        N = N / x;
      }
      divisors.push(x);
    }
    if (divisors.length === 2) {
      A[i] = true;
      let currentVal = divisors[0] * divisors[1];
      for (let j = currentVal * divisors[0]; j <= N; j = j * divisors[0]) {
        A[j] = true;
      }
      for (let j = currentVal * divisors[1]; j <= N; j = j * divisors[1]) {
        A[j] = true;
      }
    }
  }
  for (let i = 0; i <= N; i++) {
    if (A[i]) ans++;
  }
  return ans;
}

function sieveSPF(N) {
  let spf = Array(N + 1);
  for (let i = 0; i <= N; i++) {
    spf[i] = i;
  }
  for (let i = 2; i * i <= N; i++) {
    if (spf[i] === i) {
      for (let j = i * i; j <= N; j += i) {
        if (spf[j] === j) spf[j] = i;
      }
    }
  }
  return spf;
}

/*
Solution Approach
Firstly, create an array, let’s say isprime where isprime[i] denotes true or false if number i is prime or not.

Now, for every number in the range [1, A], calculate the number of prime divisors, and if the count of distinct prime factors for a number is 2, increment the answer.

This can be easily done in O(N * sqrt(N)).

The solution can further be optimised to run in O(N * log(N)). The idea is to use a sieve and in place of marking a number of non-prime
in the array, while using sieve, just add 1 to it for each prime you iterate. In the end, you will have the number of prime factors of each
number. Then the rest is a cakewalk. There are other kinds of sieves as well that you should check out. These are quite fast in
terms of processing.

Link to a blog of sieves:- https://codeforces.com/blog/entry/22229
*/
function solveScaler(A) {
  let isprime = new Array(A + 1).fill(1);
  isprime[1] = 0;
  // Sieve of Eratosthenes
  for (let i = 2; i <= A; i++) {
    if (isprime[i] == 1) {
      for (let j = i * i; j <= A; j += i) {
        isprime[j] = 0;
      }
    }
  }

  let cnt = new Array(A + 1).fill(0);
  for (let i = 1; i <= A; i++) {
    let j = 1;
    while (j * j <= i) {
      // Check to increment count of distinct primes
      if (i % j == 0) {
        if (isprime[j] == 1) {
          cnt[i] += 1;
        }
        if (i / j != j && isprime[i / j] == 1) {
          cnt[i] += 1;
        }
      }
      j += 1;
    }
  }

  let ans = 0;
  for (let i = 1; i <= A; i++) {
    // Increment count for every lucky num
    if (cnt[i] == 2) {
      ans += 1;
    }
  }
  return ans;
}
// let A = 12;
let A = 30;
let ans = solve(A);
console.log(ans);
