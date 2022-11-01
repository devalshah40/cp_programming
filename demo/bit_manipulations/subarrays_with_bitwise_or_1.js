/*
Problem Description
Given an array B of length A with elements 1 or 0. Find the number of subarrays with bitwise OR 1.


Problem Constraints
1 <= A <= 105


Input Format
The first argument is a single integer A.
The second argument is an integer array B.


Output Format
Return the number of subarrays with bitwise array 1.


Example Input
Input 1:
 A = 3
B = [1, 0, 1]
Input 2:
 A = 2
B = [1, 0]


Example Output
Output 1:
5
Output2:
2


Example Explanation
Explanation 1:
The subarrays are :- [1], [0], [1], [1, 0], [0, 1], [1, 0, 1]
Except the subarray [0] all the other subarrays has a Bitwise OR = 1
Explanation 2:
The subarrays are :- [1], [0], [1, 0]
Except the subarray [0] all the other subarrays has a Bitwise OR = 1
*/

// let arrLength = 3;
// let arr = [1, 0, 1];

// let arr = [1, 0, 1];
// let arrLength = 3;
// ans = 5
// let arr = [0, 1, 1, 0, 1];
// let arrLength = 5;
// ans = 13
let arr = [1, 0, 0, 1, 0, 0, 1];
let arrLength = 7;
// ans 22

// let arr = [0, 1, 1, 0, 1];
// let arrLength = 5;
// ans 13

function brutForce(arrLength, arr) {
  let count = 0;
  for (let start = 0; start < arrLength; start++) {
    let ans = 0;
    for (let end = start; end < arrLength; end++) {
      if (ans !== 1) {
        ans |= Number(arr[end]);
      }
      if (ans === 1) {
        count++;
      }
    }
  }
  return count;
}
/*
My approach :-
For  1001001 For every 1, subarray with Bitwise 1 will be total elements from that that index to end index. 
So for 1st 1, sum is 7, 2nd 1, sum is 1001 so 4 etc..
For every 0, count zeros until found 1. Then at 1, calculate subarray with numOfZeros until 1 into back elements from 1. 
This will count to total 1 elements.
*/
function efficientMyApproach(arrLength, arr) {
  let count = 0;

  let countZeros = 0;
  for (let index = 0; index < arrLength; index++) {
    let val = arr[index];
    let backElements = arrLength - index;

    if (val === 1) {
      let totalZeroCount = countZeros * backElements;
      countZeros = 0;
      count += backElements + totalZeroCount;
    } else {
      countZeros++;
    }
  }
  return count;
}

/*
Scaler approach
Since the operation is a bitwise OR any subarray with atleast one element as 1 will have bitwise or 1.
Well every subarray has a unique pair of left and right end indices. 
Now for every index i in the array find in how many subarrays with bitwise OR 1, it is the right index of. And add this value to ans.

We can find this by seaching how many valid left index is present if current index i is taken as right index.
If j is the first index that has B[j] = 1 to the left of i (including i), then index 1 to j all can be taken as left index as there is atlest one 1 is the subarray. 
so ans += j for that particular i.

My understanding :- For every index i with , previous subarray count will be i+1 which have OR is 1.
like [1 0 0 1 0 0 1] -> for 3rd index with 1, previous subarray OR will be 1 and have 
*/
function efficientScalerApproach(arrLength, arr) {
  let last = 0;
  let ans = 0;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] == 1) {
      last = i + 1;
    }
    ans += last;
  }
  return ans;
}

// function efficient(arrLength, arr) {
//   let count = 0;
//   for (let index = 0; index < arrLength; index++) {
//     let val = arr[index];

//     if (val === 1) {
//       count += (index + 1) * (arrLength - index);
//     }
//   }
//   return count;
// }

let ans = efficientScalerApproach(arrLength, arr);
// let ans = brutForce(arrLength, arr);
// let ans = efficientMyApproach(arrLength, arr);
console.log(ans);
