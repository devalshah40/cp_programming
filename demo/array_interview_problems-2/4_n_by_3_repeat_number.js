/*
Problem Description
You're given a read-only array of N integers. Find out if any integer occurs more than N/3 times in the array in linear time
 and constant additional space.
If so, return the integer. If not, return -1.

If there are multiple solutions, return any one.

Problem Constraints
1 <= N <= 7*105
1 <= A[i] <= 109

Input Format
The only argument is an integer array A.

Output Format
Return an integer.

Example Input
[1 2 3 1 1]

Example Output
1

Example Explanation
1 occurs 3 times which is more than 5/3 times.
*/

// let arr = [2, 1, 6, 4];
// let arr = [1, 2, 3, 4, 5, 1];
// let arr = [2, 3, 1, 1, 4]; // 1
let arr = [1, 1, 1, 2, 2];

function bruteForceApproach(arr) {
  let n = arr.length;
  let requiredCount = parseInt(n / 3);
  if (requiredCount === 0) {
    return arr[0];
  }
  for (let i = 0; i < n; i++) {
    let currentCount = 0;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] === arr[i]) {
        currentCount++;
      }
      if (currentCount === requiredCount) {
        return arr[j];
      }
    }
  }
}

/*
It works to simply pick all elements one by one. For every picked element, count its occurrences by traversing the array.
If the count becomes more than n/3, then print the element. Time Complexity of this method would be O(n^2).

A better solution is to use sorting.

First, sort all elements using an O(nLogn) algorithm. All required elements in a linear array scan can be found once the array is sorted.

So overall, time complexity of this method is O(nLogn) + O(n) which is O(nLogn).

However, a linear solution is needed here.

Note: if at any instance, you have three distinct elements from the array, if you remove them from the array, your answer does not change.

Try to base your solution idea on the above fact.

Would it help to maintain two elements from the array with their count as you traversed the array?
*/
function efficientApproach(arr) {
  let n = arr.length;
  let count1 = 0,
    count2 = 0,
    num1 = -1,
    num2 = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == num1) {
      //  num1 is already equal to arr[i],
      count1 = count1 + 1; //  so we will increase its frequency by 1
    } else if (arr[i] == num2) {
      //  num2 is already equal to arr[i],
      count2 = count2 + 1; //  so we will increase its frequency by 1
    } else if (count1 == 0) {
      // frequency of num1 is 0, it means num1 is not initialized till now,
      num1 = arr[i]; // so we will initialize it with arr[i] and increase its frequency by 1
      count1 = count1 + 1;
    } else if (count2 == 0) {
      // frequency of num1 is 0, it means num1 is not initialized till now,
      num2 = arr[i]; // so we will initialize it with arr[i] and increase its frequency by 1
      count2 = count2 + 1;
    } else {
      count1 = count1 - 1; // If none of the statements holds true,
      count2 = count2 - 1; // deacrease the frequency of both num1 and num2
    }
  }

  count1 = 0;
  count2 = 0;

  for (i = 0; i < n; i++) {
    if (arr[i] == num1) {
      count1 = count1 + 1;
    } else if (arr[i] == num2) {
      count2 = count2 + 1;
    }
  }

  if (count1 > n / 3) {
    // If frequency of num1 > n/3, return num1
    return num1;
  } else if (count2 > n / 3) {
    // If frequency of num2 > n/3, return num2
    return num2;
  } else {
    return -1; // no element is having frequency > n/3, so return -1;
  }
}

// let ans = bruteForceApproach(arr);
let ans = efficientApproach(arr);
console.log(ans);
