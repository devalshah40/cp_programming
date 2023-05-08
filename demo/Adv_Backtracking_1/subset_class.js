/*
Q1. Subset
Unsolved
character backgroundcharacter
Stuck somewhere?
Ask for help from a TA and get it resolved.
Get help from TA.
Problem Description
Given a set of distinct integers A, return all possible subsets.

NOTE:

Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
Also, the subsets should be sorted in ascending ( lexicographic ) order.
The list is not necessarily sorted.


Problem Constraints
1 <= |A| <= 16
INTMIN <= A[i] <= INTMAX


Input Format
First and only argument of input contains a single integer array A.



Output Format
Return a vector of vectors denoting the answer.



Example Input
Input 1:

A = [1]
Input 2:

A = [1, 2, 3]


Example Output
Output 1:

[
    []
    [1]
]
Output 2:

[
 []
 [1]
 [1, 2]
 [1, 2, 3]
 [1, 3]
 [2]
 [2, 3]
 [3]
]


Example Explanation
Explanation 1:

 You can see that these are all possible subsets.
Explanation 2:

You can see that these are all possible subsets.
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

function subsetsIncludeExclude(arr, N, index, curList) {
  if (index === N) {
    ansList.push([...curList]);
    return;
  }
  curList.push(arr[index]);
  subsetsIncludeExclude(arr, N, index + 1, curList);
  curList.pop();
  subsetsIncludeExclude(arr, N, index + 1, curList);
}

//  []
//  [1]
//  [1, 2]
//  [1, 2, 3]
//  [1, 3]
//  [2]
//  [2, 3]
//  [3]
function subsetsExcludeInclude(arr, N, index, curList) {
  if (index === N) {
    ansList.push([...curList]);
    return;
  }
  // for exclude don't add
  // curList.pop();
  subsetsExcludeInclude(arr, N, index + 1, curList);

  // include
  curList.push(arr[index]);
  subsetsExcludeInclude(arr, N, index + 1, curList);

  // pop to remove last element
  curList.pop();
}
let arr;
arr = [-20, -18, -12];
// arr = [9, -20, -11, -8, -4, 2, -12, 14, 1, -18];
// arr = [1, 2, 3];

arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

// subsetsExcludeInclude(arr, arr.length, 0, []);
// console.log(ansList);

// ansList = [
//   [],
//   [-12],
//   [-18],
//   [-18, -12],
//   [-20],
//   [-20, -12],
//   [-20, -18],
//   [-20, -18, -12],
// ];
// ansList.sort(function (a, b) {
//   for (let i = 0; i < Math.max(a.length, b.length); i++) {
//     const aValue = a[i];
//     const bValue = b[i];

//     if (a[i] < b[i]) {
//       return -1;
//     }
//   }
//   return 1;
// });
// console.log(ansList);

subsetsIncludeExclude(arr, arr.length, 0, []);
ansList.sort(function (a, b) {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] < b[i]) {
      return -1;
    } else if (a[i] > b[i]) {
      return 1;
    }
  }
  if (a.length < b.length) {
    return -1;
  }
  return 1;
});
console.log(ansList);

// Scaler answer
/*
var res; 
function subsetsRec(arr , A) {
    res.push(arr.sort(function(a , b) {
        return a - b 
    }));
    if(A.length !== 0) {
        // for every element we can either take it or skip it
        for(var i = 0; i < A.length; i++) 
            subsetsRec(arr.concat(A[i]) , A.slice(i + 1 , A.length));
    }
}

module.exports = {
 //param A : array of integers
 //return a array of array of integers
	subsets : function(A){
	    A.sort(function(a , b) {
	        return a - b 
	    });
	    res = [];
	    subsetsRec([] , A);
	    return res;
	}
};
*/
