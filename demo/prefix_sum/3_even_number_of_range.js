/*
Problem Description
You are given an array A of length N and Q queries given by the 2D array B of size Q*2. 
Each query consists of two integers B[i][0] and B[i][1].
For every query, the task is to find the count of even numbers in the range A[B[i][0]…B[i][1]].

Input Format
First argument A is an array of integers.
Second argument B is a 2D array of integers.

Output Format
Return an array of integers.

Example Input
Input 1:
A = [1, 2, 3, 4, 5]
B = [   [0,2] 
        [1,4]   ]
Input 2:
A = [2, 1, 8, 3, 9]
B = [   [0,3] 
        [2,4]   ]


Example Output
Output 1:
[1, 2]
Output 2:
[2, 1]

Example Explanation
For Input 1:
The subarray for the first query is [1, 2, 3] which contains 1 even number.
The subarray for the second query is [2, 3, 4, 5] which contains 2 even numbers.
For Input 2:
The subarray for the first query is [2, 1, 8, 3] which contains 2 even numbers.
The subarray for the second query is [8, 3, 9] which contains 1 even number.

*/

/*
Create a prefix array pref[] where pref[i+1] will store the count of even numbers in the subarray A[0…i]. 
Now, the count of even numbers in the range [L, R] can be easily calculated in O(1) as pref[R + 1] – pref[L].

Time Complexity : O(N + Q)
Space Complexity : O(N + Q)
*/
let arr = [3, 1, 5, 7, 5, 2];
let n = arr.length;
let prefixSum = new Array(n);

for (let i = 0; i < n; ++i) {
  let isEven = arr[i] % 2 === 0;
  if (isEven) {
    if (i === 0) {
      prefixSum[i] = 1;
    } else {
      prefixSum[i] = prefixSum[i - 1] + 1;
    }
  } else {
    if (i === 0) {
      prefixSum[i] = 0;
    } else {
      prefixSum[i] = prefixSum[i - 1];
    }
  }
}

for (let i = 0; i < n; i++) {
  console.log(prefixSum[i] + ' ');
}
console.log('------------');
const q = [
  [0, 2],
  // [2, 3],
  // [4, 6],
  // [1, 5],
  // [3, 6],
];
let evenNumbersArr = [];
for (let i = 0; i < q.length; i++) {
  let l = q[i][0];
  let r = q[i][1];

  // Calculating sum from r to l.
  let totalEvenNumbers = 0;
  if (l === 0) {
    totalEvenNumbers = prefixSum[r];
  } else {
    totalEvenNumbers = prefixSum[r] - prefixSum[l - 1];
  }
  // console.log('totalEvenNumbers', totalEvenNumbers);
  evenNumbersArr.push(totalEvenNumbers);
}
console.log(evenNumbersArr);
// 0,10,14,30,50,90,150,230
