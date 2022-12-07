/*
Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

NOTE:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.



Problem Constraints
1 <= N <= 105
-105 <= A[i] <= 105


Input Format
First arugment is an array A .


Output Format
Return the equilibrium index of the given array. If no such index is found then return -1.


Example Input
Input 1:
A=[-7, 1, 5, 2, -4, 3, 0]
Input 2:

A=[1,2,3]


Example Output
Output 1:
3
Output 2:

-1


Example Explanation
Explanation 1:
3 is an equilibrium index, because: 
A[0] + A[1] + A[2] = A[4] + A[5] + A[6]
Explanation 1:

There is no such index.

*/

let arr = new Array(1, 2, 4, 2, 1);
let n = arr.length;

// let index = equilibriumUsing2PrefixSum(arr, n);
// console.log(index);

// let index1 = equilibrium(arr, n);
// console.log(index1);

let index2 = equilibriumUsing1PrefixSum(arr, n);
console.log(index2);

// Program to find equilibrium index of an array using Prefix sum
// Time Complexity: O(N)
// Auxiliary Space: O(N)
function equilibriumUsing2PrefixSum(a, n) {
  if (n == 1) return 0;
  var forward = new Array(0);
  var rev = new Array(0);

  // Taking the prefixsum from front end array
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      forward[i] = a[i];
    } else {
      forward[i] = forward[i - 1] + a[i];
    }
  }
  console.log(arr);
  console.log(forward);

  // Taking the prefixsum from back end of array
  // start from 4,3,2,1,0
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      rev[i] = a[i];
    } else {
      rev[i] = rev[i + 1] + a[i];
    }
  }
  console.log(rev);

  // Checking if forward prefix sum
  // is equal to rev prefix
  // sum
  for (let i = 0; i < n; i++) {
    if (forward[i] == rev[i]) {
      return i;
    }
  }
  return -1;
}

// Time Complexity: O(N)
// Auxiliary Space: O(N)
function equilibriumUsing1PrefixSum(arr, n) {
  let prefixSum = new Array(n);

  for (let i = 0; i < n; ++i) {
    if (i === 0) {
      prefixSum[i] = arr[i];
    } else {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(prefixSum[i] + ' ');
  }

  for (let i = 0; i < n; i++) {
    let leftSum;
    if (i === 0) {
      leftSum = 0;
    } else {
      leftSum = prefixSum[i - 1];
    }
    console.log('leftSum - ', leftSum);

    let rightSum;
    if (i === n - 1) {
      rightSum = 0;
    } else {
      rightSum = prefixSum[n - 1] - prefixSum[i];
    }

    console.log('rightSum - ', rightSum);
    if (leftSum === rightSum) {
      console.log('equilibrium index - ', i);
      return i;
    }
  }
  return -1;
}

/*
The idea is to get the total sum of the array first. Then Iterate through the array and keep updating the left sum which is initialized as zero. In the loop, we can get the right sum by subtracting the elements one by one.

1) Initialize leftsum  as 0
2) Get the total sum of the array as sum
3) Iterate through the array and for each index i, do following.
    a)  Update sum to get the right sum.  
           sum = sum - arr[i] 
       // sum is now right sum
    b) If leftsum is equal to sum, then return current index. 
       // update leftsum for next iteration.
    c) leftsum = leftsum + arr[i]
4) return -1 
// If we come out of loop without returning then
// there is no equilibrium index
*/
// Time Complexity: O(N)
// Auxiliary Space: O(1)
function equilibrium(arr, n) {
  let sum = 0; // initialize sum of whole array
  let leftsum = 0; // initialize leftsum

  // Find sum of the whole array
  for (let i = 0; i < n; ++i) sum += arr[i];

  for (let i = 0; i < n; ++i) {
    sum -= arr[i]; // sum is now right sum for index i

    if (leftsum == sum) return i;

    leftsum += arr[i];
  }

  // If no equilibrium index found, then return 0 //
  return -1;
}

/*
public class Solution {
    public int[] solve(int[] A, int[][] B) {
        int n = A.length;
        int[] pref = new int[n + 1];
        pref[0] = 0;
        for(int i = 0 ; i < n ; i++){
            if(A[i] % 2 == 0){
                pref[i + 1] = pref[i] + 1;
            }
            else{
                pref[i + 1] = pref[i];
            }
        }
        int[] ans = new int [B.length];
        for(int i = 0 ; i < B.length ; i++){
            ans[i] = pref[B[i][1] + 1] - pref[B[i][0]];
        }
        return ans;
    }
    */