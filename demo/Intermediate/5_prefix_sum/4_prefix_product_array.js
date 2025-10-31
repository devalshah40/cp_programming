/*
Given an array of integers A, 
find and return the product array of the same size 
where the ith element of the product array will be equal 
to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array 
with integer (32 bit) values. Solve it without using the division operator.

Input Format

The only argument given is the integer array A.
Output Format

Return the product array.
Constraints

2 <= length of the array <= 1000
1 <= A[i] <= 10
For Example

Input 1:
    A = [1, 2, 3, 4, 5]
Output 1:
    [120, 60, 40, 30, 24]
for first index, we need to product other elements like 2*3*4*5 = 120
for second index, we need to product other elements like 1*3*4*5 = 60
---

Input 2:
    A = [5, 1, 10, 1]
Output 2:
    [10, 50, 5, 50]
*/
let arr = [1, 2, 3, 4, 5];
// let arr = [5, 1, 10, 1];

function solveOld(arr) {
  let n = arr.length;
  let prefixMul = new Array(n);

  for (let i = 0; i < n; ++i) {
    if (i === 0) {
      prefixMul[i] = arr[i];
    } else {
      prefixMul[i] = prefixMul[i - 1] * arr[i];
    }
  }

  // for (let i = 0; i < n; i++) {
  //   console.log(prefixMul[i] + ' ');
  // }
  console.log(arr);
  console.log(prefixMul);

  let productArr = [];
  for (let i = 0; i < n; i++) {
    // let prodcutRes = 1;
    // if (i === 0) {
    //   prodcutRes = prefixMul[n - 1] / prefixMul[i];
    // } else {
    //   prodcutRes = (prefixMul[n - 1] / prefixMul[i]) * prefixMul[i - 1];
    // }
    let prodcutRes = prefixMul[n - 1] / arr[i];
    productArr.push(prodcutRes);
  }
  console.log(productArr);
}

/*
We will have a prefix array pref[] where pref[i] will store the 
multiplication of all the elements in the prefix of the array till
i-th position. Similar we will have a suffix array suff[].
Now for the i-th element, we can find the multiplication of all the 
elements to it's left from the pref[] array and that in the right side
from the suff[] array

Time Complexity : O(N)
Space Complexity : O(N)
*/
function solve(A) {
  console.log(A);
  let n = A.length;

  let pref = [];
  pref.push(A[0]);
  for (let i = 1; i < n; i++) pref.push(pref[i - 1] * A[i]);

  console.log(pref);
  let suff = [];
  suff.push(A[n - 1]);
  for (let i = n - 2; i >= 0; i--) suff.push(suff[n - 2 - i] * A[i]);
  console.log(suff);
  suff.reverse();
  console.log(suff);

  let ans = [];
  for (let i = 0; i < n; i++)
    if (i == 0) ans.push(suff[i + 1]);
    else if (i == n - 1) ans.push(pref[i - 1]);
    else ans.push(pref[i - 1] * suff[i + 1]);
  return ans;
}
let ans = solve(arr);
// let ans = solveOld(arr);

console.log(ans);
