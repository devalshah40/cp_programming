/*
Q5. Subarray Sum Equals K

Given an array of integers A and an integer B.

Find the total number of subarrays having sum equals to B.


Input Format

The first argument given is the integer array A.
The second argument given is integer B.
Output Format

Return the total number of subarrays having sum equals to B.
Constraints

1 <= length of the array <= 50000
-1000 <= A[i] <= 1000 
For Example

Input 1:
    A = [1, 0, 1]
    B = 1
Output 1:
    4
    Explanation 1:
        [1], [1, 0], [0, 1] and [1] are four subarrays having sum 1.

Input 2:
    A = [0, 0, 0]
    B = 0
Output 2:
    6
 */

// let arr = [1, 2, 3, 4, 5];
// let requiredSum = 5;
// let arr = [15, 2, 5, 6, 9];
// let requiredSum = 7;
// let arr = [15, 2];
// let requiredSum = 2;

// let arr = [1, 0, 1];
// let requiredSum = 1;
// let arr = [
//   -14, -9, 12, 7, -12, -4, 7, 25, -5, 48, 33, -49, 36, -31, -48, 36, 36, 17, 13,
//   -47, -39, 37, -20, 35, 38, 26, -40, -43, 36, -48, -33, -30, 6, -28, 11, 27,
//   22, 18, -21, -11, -50, 34, -21, 44, -25, 17, 34, -12, 14, 26, 30,
// ];
// let requiredSum = 16;
let arr = [1, -1, 1, 2];
// 1, 0 ,1 ,3
let requiredSum = 3;

// function findSubArraWithSum(arr, requiredSum) {
//   let start = 0;
//   let end = 0;
//   let curSum = 0;
//   for (; end < arr.length; end++) {
//     // console.log(start, ' ', end, ' ', curSum);
//     if (arr[end] > requiredSum) {
//       start++;
//     } else {
//       curSum += arr[end];
//     }
//     if (curSum > requiredSum) {
//       break;
//     } else if (curSum === requiredSum) {
//       return arr.slice(start, end + 1);
//     }
//   }
//   // console.log(curSum);
//   while (start < arr.length && end < arr.length) {
//     // console.log(start, ' ', end);
//     if (curSum > requiredSum) {
//       curSum -= arr[start];
//       start++;
//     } else if (curSum < requiredSum) {
//       curSum += arr[end + 1];
//       end++;
//     }
//     if (curSum === requiredSum) {
//       // console.log(start, ' ', end);
//       // console.log(arr.slice(start, end + 1));
//       // break;
//       return arr.slice(start, end + 1);
//     }
//   }
//   return [-1];
// }

/*
Solution Approach
Approach- 1 (Brute Force)
The simplest method is to consider every possible subarray of the given numsnums array, find the sum of the elements of each of those subarrays and check for the equality of the sum obtained with the given kk. Whenever the sum equals kk, we can increment the countcount used to store the required result.
Time complexity : O(n^3)
Space complexity : O(1)

Approach- 2 (using cumulative sum)
Instead of determining the sum of elements every time for every new subarray considered, we can make use of a cumulative sum array , sumsum. Then, in order to calculate the sum of elements lying between two indices, we can subtract the cumulative sum corresponding to the two indices to obtain the sum directly, instead of iterating over the subarray to obtain the sum.

In this implementation, we make use of a cumulative sum array, sumsum, such that sum[i] is used to store the cumulative sum of numsnums array up to the element corresponding to the (i-1)^{th} index. Thus, to determine the sum of elements for the subarray nums[i:j], we can directly use sum[j+1] - sum[i].
Time complexity : O(n^2)
Space complexity : O(n)

Approach- 3 (without space)
Instead of considering all the startstart and endend points and then finding the sum for each subarray corresponding to those points, we can directly find the sum on the go while considering different endend points. i.e. We can choose a particular startstart point and while iterating over the endend points, we can add the element corresponding to the endend point to the sum formed till now. Whenever the sumsum equals the required kk value, we can update the countcount value. We do so while iterating over all the endend indices possible for every startstart index. Whenever, we update the startstart index, we need to reset the sumsum value to 0.
Time complexity : O(n^2)
Space complexity : O(n)

Approach- 4 (Using Hashmap)
The idea behind this approach is as follows: If the cumulative sum(represented by sum[i] for sum up to i^{th} index) up to two indices is the same, the sum of the elements lying in between those indices is zero. Extending the same thought further, if the cumulative sum up to two indices, say i and j is at a difference of k i.e. if sum[i] - sum[j] = k, the sum of elements lying between indices i and j is k.

Based on these thoughts, we make use of a hashmap map which is used to store the cumulative sum up to all the indices possible along with the number of times the same sum occurs. We store the data in the form: (sum_i, no. of occurrences of sum_i). We traverse over the array numsnums and keep on finding the cumulative sum. Every time we encounter a new sum, we make a new entry in the hashmap corresponding to that sum. If the same sum occurs again, we increment the count corresponding to that sum in the hashmap. Further, for every sum encountered, we also determine the number of times the sum sum-ksum−k has occurred already, since it will determine the number of times a subarray with sum kk has occurred up to the current index. We increment the count by the same amount.

After the complete array has been traversed, the count gives the required result.
Time complexity : O(n)
Space complexity : O(n)
*/
function findSubArraWithSumEfficient(A, B) {
  // instead of prefix sum, we can use carry forward currentSum
  let n = A.length;
  let count = 0;

  let prefixSum = [];
  for (let i = 0; i < n; i++) {
    prefixSum[i] = i === 0 ? A[i] : A[i] + prefixSum[i - 1];
  }

  let map = new Map();
  for (let i = 0; i < n; i++) {
    // A[i];
    if (prefixSum[i] === B) {
      count++;
    }
    let requiredVal = prefixSum[i] - B;
    if (map.has(requiredVal)) {
      count += map.get(requiredVal);
    }

    let frequencyVal = map.get(prefixSum[i]);
    if (!frequencyVal) {
      map.set(prefixSum[i], 1);
    } else {
      map.set(prefixSum[i], frequencyVal + 1);
    }
  }
  return count;
}
function findSubArraWithSumCarryForward(A, B) {
  let n = A.length;
  let count = 0;

  let currentSum = 0;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    currentSum += A[i];
    if (currentSum === B) {
      count++;
    }
    let requiredVal = currentSum - B;
    if (map.has(requiredVal)) {
      count += map.get(requiredVal);
    }

    let frequencyVal = map.get(currentSum);
    map.set(currentSum, frequencyVal ? frequencyVal + 1 : 1);
  }
  return count;
}
let ans = findSubArraWithSumEfficient(arr, requiredSum);
console.log(ans);
