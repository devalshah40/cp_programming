/*
Problem Description
You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.

Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.

NOTE: if B > N, return an empty array.



Input Format
First argument is an integer array A
Second argument is an integer B.



Output Format
Return an integer array.



Example Input
Input 1:

 A = [1, 2, 1, 3, 4, 3]
 B = 3
Input 2:

 A = [1, 1, 2, 2]
 B = 1


Example Output
Output 1:

 [2, 3, 3, 2]
Output 2:

 [1, 1, 1, 1]


Example Explanation
Explanation 1:

 A=[1, 2, 1, 3, 4, 3] and B = 3
 All windows of size B are
 [1, 2, 1]
 [2, 1, 3]
 [1, 3, 4]
 [3, 4, 3]
 So, we return an array [2, 3, 3, 2].
Explanation 2:

 Window size is 1, so the output array is [1, 1, 1, 1].
*/
let arr = [1, 2, 1, 3, 4, 3];
let windowSize = 3;

let n = arr.length;
let map = new Map();

for (let i = 0; i < windowSize; i++) {
  const val = arr[i];

  let frequencyCount = map.get(val);
  if (frequencyCount) {
    map.set(val, frequencyCount + 1);
  } else {
    map.set(val, 1);
  }
}

let ansArr = [];
ansArr.push(map.size);

for (let i = windowSize; i < n; i++) {
  const currentVal = arr[i];
  const removalVal = arr[i - windowSize];

  let removalFrequencyCount = map.get(removalVal);
  if (removalFrequencyCount === 1) {
    map.delete(removalVal);
  } else {
    map.set(removalVal, removalFrequencyCount - 1);
  }

  let currentFrequencyCount = map.get(currentVal);
  if (currentFrequencyCount) {
    map.set(currentVal, currentFrequencyCount + 1);
  } else {
    map.set(currentVal, 1);
  }
  ansArr.push(map.size);
}
console.log(ansArr);
