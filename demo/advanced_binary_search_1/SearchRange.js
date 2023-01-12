/*
Problem Description
Given a sorted array A of size N and a target value B, return the index (0-based indexing) if the target is found.
If not, return the index where it would be if it were inserted in order.

NOTE: You may assume no duplicates in the array. Users are expected to solve this in O(log(N)) time.



Problem Constraints
1 <= N <= 106



Input Format
The first argument is an integer array A of size N.
The second argument is an integer B.



Output Format
Return an integer denoting the index of target value.



Example Input
Input 1:

A = [1, 3, 5, 6]
B = 5 
Input 2:

A = [1]
B = 1


Example Output
Output 1:

2 
Output 2:

0


Example Explanation
Explanation 1:

The target value is present at index 2. 
Explanation 2:

The target value is present at index 0.

*/
/*
Solution Approach
First, let us find the left boundary of the range.

We initialize the range to [i=0, j=n-1]. In each step, calculate the middle element [mid = (i+j)/2].

Now according to the relative value of A[mid] to target, there are three possibilities:

If A[mid] < target, then the range must begin on the right of mid (hence i = mid+1 for the next iteration)

If A[mid] > target, it means the range must begin on the left of mid (j = mid-1)

If A[mid] = target, then the range must begins on the left of or at mid (j= mid)

Since we would move the search range to the same side for case 2) and 3), we might as well merge them as one single case so that less code is needed:

2*. If A[mid] >= target, j = mid;

Surprisingly, 1 and 2* are the only logic you need to put in a loop while (i < j). When the while loop terminates, the value of i/j is where the start of the range is. Why?

No matter what the sequence originally is, as we narrow down the search range, eventually, we will be in a situation where there are only two elements in the search range.

Suppose our target is 5, then we have only 7 possible cases:

Case 1: [5 7] (A[i] = target < A[j])

Case 2: [5 3] (A[i] = target > A[j])

Case 3: [5 5] (A[i] = target = A[j])

Case 4: [3 5] (A[j] = target > A[i])

Case 5: [3 7] (A[i] < target < A[j])

Case 6: [3 4] (A[i] < A[j] < target)

Case 7: [6 7] (target < A[i] < A[j])

For case 1, 2 and 3, if we follow the above rule, since mid = i => A[mid] = target in these cases, then we would set j = mid.

Now the loop terminates, and i and j both point to the first 5.

For case 4, since A[mid] < target, then set i = mid+1. The loop terminates and both i and j point to 5.

For all other cases, by the time the loop terminates, A[i] is not equal to 5. So we can easily know 5 is not in the sequence if the comparison fails.

In conclusion, when the loop terminates, if A[i]==target, then i is the left boundary of the range; otherwise, just return -1;

For the right of the range, we can use a similar idea. Again we can come up with several rules:

If A[mid] > target, then the range must begin on the left of mid (j = mid-1)

If A[mid] < target, then the range must begin on the right of mid (hence i = mid+1 for the next iteration)

If A[mid] = target, then the range must begin on the right of or at mid (i= mid)

Again, we can merge conditions 2 and 3 into:

2*. If A[mid] <= target, then i = mid;

However, the terminate condition no longer works this time.

Consider the following case:

[5 7], target = 5
Now A[mid] = 5, then according to rule 2), we set i = mid.

This practically does nothing because i is already equal to mid.

As a result, the search range is not moved at all!

The solution is in using a small trick:

Instead of calculating mid as mid = (i+j)/2, we now do:

mid = (i+j)/2+1

Why does this trick work?

When we use mid = (i+j)/2, the mid is rounded to the lowest integer.

In other words, the mid is always biased towards the left. This means we could have i == mid when j - i == mid,

but we NEVER have j == mid. So, in order to keep the search range moving, we must make sure that the new i is set to something different than mid, otherwise we are at the risk that i gets stuck.

But for the new j, it is okay if we set it to mid since it was not equal to mid anyway.

Our two rules in search for the left boundary happen to satisfy these requirements, so it works perfectly in that situation.

Similarly, when we search for the right boundary, we must make sure i does not get stuck when we set the new i to i = mid.

The easiest way to achieve this is by making mid biased to the right, i.e., mid = (i+j)/2+1.
*/

function searchRange(A, B) {
  let s = 0;
  let e = A.length - 1;
  let i = -1,
    j = -1;
  while (s <= e) {
    let mid = s + ((e - s) >>> 1);
    if (A[mid] === B) {
      i = mid;
      e = mid - 1;
    } else if (A[mid] > B) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  s = 0;
  e = A.length - 1;
  while (s <= e) {
    let mid = s + ((e - s) >>> 1);
    if (A[mid] === B) {
      j = mid;
      s = mid + 1;
    } else if (A[mid] > B) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return [i, j];
}

let A = [1, 3, 5, 6];
let B = 4;
let ans = searchInsert(A, B);
console.log(ans);
