/*
Q2. Largest Rectangle in Histogram
Problem Description
Given an array of integers A.

A represents a histogram i.e A[i] denotes the height of the ith histogram's bar. Width of each bar is 1.

Find the area of the largest rectangle formed by the histogram.



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 1000000000



Input Format
The only argument given is the integer array A.



Output Format
Return the area of the largest rectangle in the histogram.



Example Input
Input 1:

 A = [2, 1, 5, 6, 2, 3]
Input 2:

 A = [2]


Example Output
Output 1:

 10
Output 2:

 2


Example Explanation
Explanation 1:

The largest rectangle has area = 10 unit. Formed by A[3] to A[4].
Explanation 2:

Largest rectangle has area 2.

*/
const Stack = require('../data-structures/Stack');
function nearestSmallerLeftIndex(arr) {
  const stack = new Stack();
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = stack.peek();
    }
    stack.push(i);
  }
  return ans;
}
function nearestSmallerRightIndex(arr) {
  const stack = new Stack();
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      ans[i] = arr.length;
    } else {
      ans[i] = stack.peek();
    }
    stack.push(i);
  }
  return ans;
}

function largestRectangleArea(arr) {
  // arr = [0, ...arr, 0];
  const smallerRight = nearestSmallerRightIndex(arr);
  const smallerLeft = nearestSmallerLeftIndex(arr);
  let area = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const prevLen = smallerLeft[i];
    const nextLen = smallerRight[i];
    newArea = (nextLen - prevLen - 1) * value;
    area = Math.max(area, newArea);
  }
  return area;
}
/*
Hint 1
What’s the brute force approach here?

We know that the height of the largest rectangle will be one of the heights of the histogram bars (Think, why?)
If that is the case, we can iterate on all the histogram bars, and for each histogram bar H, we try to create the maximum rectangle with H as the height.
We keep going left L and right R until we encounter a histogram bar with a height less than H.
Now, (R - L - 1) * H is one of the possibilities for the largest rectangle.

Doing this for all the histogram bars will give us the right solution.

Following is rough pseudocode for the approach mentioned above :


max_rectangle = 0 

for index = 0 to all_histograms.length
  H = all_histograms[index]
  L = index, R = index
  while L >= 0 AND all_histograms[L] >= H
    L = L - 1
  while R < all_histograms.length AND all_histograms[R] >= H
    R = R + 1
  max_rectangle = MAX(max_rectangle, (R - L - 1) * H)

return max_rectangle


This approach is, however, O(N^2) time complexity in the worst case. How can we do better than this approach?

Hint: Think in terms of using a stack ?

Hint 2
As discussed in the previous hint, the height of the maximum rectangle will be the height of one of the histogram bars. For each histogram H, we need to know the index of the first smaller (smaller than H) bar on the left of H (let’s call it L) and the index of the first smaller bar on the right of H.
We have already tried the brute force approach. How can we do better?

Important observation:

Lets consider 2 consecutive histogram bars H[i] and H[i+1]. Lets assume H[i+1] < H[i]
In such a case, for all histogram bars X with index > i + 1 when traversing left for L, there is no point looking at H[i] after looking at H[i+1]. If H[i+1] > X, obviously H[i] > X as we already know H[i] > H[i+1]

Then, what is the next entry we would want to look at? We want to look at the first histogram bar left of H[i+1] with a height less than H[i+1].

Can you think of a stack-based approach based on the above observation?

Solution Approach
We already know from our previous observation that when I traverse left, I only need entries in decreasing order.

We traverse all histograms from left to right and maintain a stack of histograms. Every histogram is pushed to stack once. A histogram is popped from the stack when a histogram of smaller height is seen. We calculate the area with the popped histogram as the smallest histogram when a histogram is popped. How do we get left and right indexes of the popped histogram – the current index tells us the ‘right index’ R, and the index of the previous item in the stack is the ‘left index’ L. Following is a rough pseudocode.

max_rectangle = 0
stack = an instance of empty stack
for index = 0 to all_histograms.length
    if stack.empty OR H[index] > H[stack.top]
        Push index to the stack
    if H[index] < H[stack.top]
        while !stack.empty && H[stack.top] > H[index]
            h = H[stack.pop]
            # Calculate the area with h as the smallest height. 
            R = index
            L = stack.top
            max_rectangle = MAX(max_rectangle, (R - L - 1) * h)
        Push index to the stack
if stack is not empty
    Repeat removing entries one by one from the stack and calculating the max_rectangle as done earlier.     
    */
function largestRectangleAreaScaler(heights) {
  let maxArea = 0;
  const stack = [];
  heights = [0].concat(heights).concat([0]);
  for (let i = 0; i < heights.length; i++) {
    while (stack && heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop();
      // finds the largest area of the rectangle with height heights[j]
      maxArea = Math.max(
        (i - stack[stack.length - 1] - 1) * heights[j],
        maxArea
      );
    }
    stack.push(i);
  }
  return maxArea;
}
let arr = [];
let ans = 0;
// arr = [1];
arr = [2, 1, 5, 6, 2, 3];
arr = [3, 2, 4, 1, 5, 2];
ans = largestRectangleArea(arr);
console.log(ans);
