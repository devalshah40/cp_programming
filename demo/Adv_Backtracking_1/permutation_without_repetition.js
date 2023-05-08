/*
Q2. Permutations
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Given an integer array A of size N denoting collection of numbers , return all possible permutations.

NOTE:

No two entries in the permutation sequence should be the same.
For the purpose of this problem, assume that all the numbers in the collection are unique.
Return the answer in any order
WARNING: DO NOT USE LIBRARY FUNCTION FOR GENERATING PERMUTATIONS. 
Example : next_permutations in C++ / itertools.permutations in python.
If you do, we will disqualify your submission retroactively and give you penalty points.


Problem Constraints
1 <= N <= 9



Input Format
Only argument is an integer array A of size N.



Output Format
Return a 2-D array denoting all possible permutation of the array.



Example Input
A = [1, 2, 3]


Example Output
[ [1, 2, 3]
  [1, 3, 2]
  [2, 1, 3] 
  [2, 3, 1] 
  [3, 1, 2] 
  [3, 2, 1] ]


Example Explanation
All the possible permutation of array [1, 2, 3].
*/

let ansList = [];
/*
[
  [ 1, 2, 3 ], [ 1, 2 ],
  [ 1, 3 ],    [ 1 ],
  [ 2, 3 ],    [ 2 ],
  [ 3 ],       []
]
*/
/*
Hint 1
Think in terms of recursion.

How can you simulate the choices of elements in a subset?
*/
/*
Solution Approach
For every element, you have 2 options.

You may either include the element in your subset or do not include the element in your subset.

Make the call for both cases.
Remember to include a base case to avoid infinite calling.

Can you also do it iteratively?
Hint: You can use the fact that each number from 0 to 2N - 1, represent each subset of N elements.
*/

function permute(arr, N, index, curList = []) {
  if (index === N) {
    ansList.push([...curList]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!curList.includes(arr[i])) {
      curList.push(arr[i]);
      permute(arr, N, index + 1, curList);
      curList.pop();
    }
  }
}

/*
Hint 1
Again, what helps here is thinking in terms of recursion.

At each step you can keep any of the elements from the remaining one and permute remaining one excluding current one.

Solution Approach
Heap’s algorithm is used to generate all permutations of n objects. The idea is to generate each permutation from the previous permutation by choosing a pair of elements to interchange, without disturbing the other n-2 elements.

Algorithm:

1)The algorithm generates (n-1)! permutations of the first n-1 elements, adjoining the last element to each of these. This will generate all of the permutations that end with the last element.

2)If n is odd, swap the first and last element and if n is even, then swap the ith element (i is the counter starting from 0) and the last element and repeat the above algorithm till i is less than n.

3)In each iteration, the algorithm will produce all the permutations that end with the current last element.

*/

function permuteScaler(arr, N, startIndex) {
  if (startIndex === N) {
    ansList.push([...arr]);
    return;
  }
  for (let i = startIndex; i < arr.length; i++) {
    // swap arr[i] and arr[startIndex]
    let temp = arr[i];
    arr[i] = arr[startIndex];
    arr[startIndex] = temp;

    permuteScaler(arr, N, startIndex + 1);

    temp = arr[startIndex];
    arr[startIndex] = arr[i];
    arr[i] = temp;
  }
}

// https://www.youtube.com/watch?v=sPAT_DbvDj0
// https://www.youtube.com/watch?v=f2ic2Rsc9pU
let arr;
arr = [1, 2, 3];
// permute(arr, arr.length, 0, []);
permuteScaler(arr, arr.length, 0);
console.log(ansList);
