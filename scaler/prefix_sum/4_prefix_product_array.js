/*
Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.

Note: It is always possible to form the product array with integer (32 bit) values. Solve it without using the division operator.


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
// let arr = [1, 2, 3, 4, 5];
let arr = [5, 1, 10, 1];
let n = arr.length;

let prefixMul = new Array(n);

for (let i = 0; i < n; ++i) {
  if (i === 0) {
    prefixMul[i] = arr[i];
  } else {
    prefixMul[i] = prefixMul[i - 1] * arr[i];
  }
}

for (let i = 0; i < n; i++) {
  console.log(prefixMul[i] + ' ');
}

let productArr = [];
for (let i = 0; i < n; i++) {
  let prodcutRes = 1;
  if (i === 0) {
    prodcutRes = prefixMul[n - 1] / prefixMul[i];
  } else {
    prodcutRes = (prefixMul[n - 1] / prefixMul[i]) * prefixMul[i - 1];
  }
  productArr.push(prodcutRes);
}
console.log(productArr);
