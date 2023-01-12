/*
Problem Description
You are given an array A of N elements. You have to make all elements unique. To do so, in one step you can increase any number by one.

Find the minimum number of steps.



Problem Constraints
1 <= N <= 105
1 <= A[i] <= 109



Input Format
The only argument given is an Array A, having N integers.



Output Format
Return the minimum number of steps required to make all elements unique.



Example Input
Input 1:

 A = [1, 1, 3]
Input 2:

 A = [2, 4, 5]


Example Output
Output 1:

 1
Output 2:

 0


Example Explanation
Explanation 1:

 We can increase the value of 1st element by 1 in 1 step and will get all unique elements. i.e [2, 1, 3].
Explanation 2:

 All elements are distinct.
*/
/*
The task is to make all the array elements unique, which needs to be done optimally in the minimum number of steps.
Sort the Array and then start the traversing from the 2nd element.
If the current element is the same as the previous one, then make this element equal to (previous + 1) and count the steps.
*/
function solve(A) {
  A.sort((a, b) => a - b);
  let set = new Set();
  set.add(A[0]);

  let noOfSteps = 0;
  for (let i = 1; i < A.length; i++) {
    if (set.has(A[i])) {
      let previousElement = A[i - 1];
      previousElement++;
      noOfSteps += previousElement - A[i];

      A[i] = previousElement;
      set.add(A[i]);
    } else {
      set.add(A[i]);
    }
  }
  return noOfSteps;
}
function solveOptimal(A) {
  A.sort((a, b) => a - b);

  let noOfSteps = 0;
  for (let i = 1; i < A.length; i++) {
    let previousElement = A[i - 1];
    if (previousElement >= A[i]) {
      noOfSteps += previousElement - A[i] + 1;
      A[i] = previousElement + 1;
    }
  }
  return noOfSteps;
}

function solveScalar(A) {
  // sort the array
  A.sort((a, b) => a - b);
  // initialize variables
  let mn = 1,
    ans = 0;
  // loop until you reach the end
  for (let i = 0; i < A.length; i++) {
    // make current element unique
    if (A[i] < mn) {
      ans += mn - A[i];
    } else {
      mn = A[i];
    }
    mn++;
  }
  // return the answer
  return ans;
}

// let A = [1, 1, 2, 2, 2];
let A = [1, 1, 4, 4, 4];
// let A = [
//   2, 5, 6, 6, 7, 8, 9, 10, 10, 13, 14, 14, 14, 14, 15, 16, 17, 18, 18, 18, 20,
//   21, 22, 22, 23, 23, 23, 24, 25, 26, 30, 31, 31, 32, 32, 34, 35, 36, 37, 39,
//   41, 45, 46, 47, 48, 48, 51, 51, 51, 53, 54, 54, 54, 55, 56, 56, 56, 60, 61,
//   62, 66, 66, 66, 67, 68, 69, 69, 71, 72, 73, 73, 75, 76, 76, 79, 80, 81, 81,
//   81, 83, 83, 85, 85, 85, 85, 86, 88, 92, 95, 97, 98, 99, 100, 100,
// ];
// let ans = solve(A);
// let ans = solveOptimal(A);
let ans = solveScalar(A);
console.log(ans);
