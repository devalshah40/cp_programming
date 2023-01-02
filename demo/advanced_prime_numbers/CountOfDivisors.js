/*
Problem Description
Given an array of integers A, find and return the count of divisors of each element of the array.

NOTE: The order of the resultant array should be the same as the input array.



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 106



Input Format
The only argument given is the integer array A.



Output Format
Return the count of divisors of each element of the array in the form of an array.



Example Input
Input 1:

 A = [2, 3, 4, 5]
Input 2:

 A = [8, 9, 10]


Example Output
Output 1:

 [2, 2, 3, 2]
Output 1:

 [4, 3, 4]


Example Explanation
Explanation 1:

 The number of divisors of 2 : [1, 2], 3 : [1, 3], 4 : [1, 2, 4], 5 : [1, 5]
 So the count will be [2, 2, 3, 2].
Explanation 2:

 The number of divisors of 8 : [1, 2, 4, 8], 9 : [1, 3, 9], 10 : [1, 2, 5, 10]
 So the count will be [4, 3, 4].

 */
//param A : array of integers
//return a array of integers
function solve(A) {
  let N = Math.max(...A);
  let spf = sieveSPF(N);

  let ans = [];
  for (let i = 0; i < A.length; i++) {
    let N = A[i];
    let divisors = 1;
    while (N > 1) {
      let count = 0;
      let x = spf[N];
      while (spf[N] === x) {
        N = N / x;
        count++;
      }
      divisors *= count + 1;
    }
    ans.push(divisors);
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

let A = [100];
let ans = solve(A);
console.log(ans);
