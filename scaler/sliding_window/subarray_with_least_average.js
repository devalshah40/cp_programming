/*
Problem Description
Given an array of size N, find the subarray of size K with the least average.



Problem Constraints
1<=k<=N<=1e5
-1e5<=A[i]<=1e5


Input Format
First argument contains an array A of integers of size N.
Second argument contains integer k.


Output Format
Return the index of the first element of the subarray of size k that has least average.
Array indexing starts from 0.


Example Input
Input 1:
A=[3, 7, 90, 20, 10, 50, 40]
B=3
Input 2:

A=[3, 7, 5, 20, -10, 0, 12]
B=2


Example Output
Output 1:
3
Output 2:

4


Example Explanation
Explanation 1:
Subarray between indexes 3 and 5
The subarray {20, 10, 50} has the least average 
among all subarrays of size 3.
Explanation 2:

 Subarray between [4, 5] has minimum average
 */

let arr = [3, 7, 90, 20, 10, 50, 40];
let k = 3;

let n = arr.length;
let start = 0,
  end = k - 1;

let leaseAverageIndex = 0;
let leaseAverage = Number.POSITIVE_INFINITY;
let average = 0,
  sum = 0;
for (let i = start; i <= end; i++) {
  sum += arr[i];
}
average = sum / 2;
if (average < leaseAverage) {
  leaseAverage = average;
  leaseAverageIndex = start;
}

start++;
end++;
while (end < n) {
  sum += arr[end];
  sum -= arr[start - 1];

  average = sum / 2;
  if (average < leaseAverage) {
    leaseAverage = average;
    leaseAverageIndex = start;
  }
  start++;
  end++;
}
console.log(leaseAverageIndex);
