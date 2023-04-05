const Stack = require('../data-structures/Stack');
// https://www.geeksforgeeks.org/introduction-to-monotonic-stack-data-structure-and-algorithm-tutorials/
//https://itnext.io/monotonic-stack-identify-pattern-3da2d491a61e#:~:text=A%20monotonic%20stack%20is%20a,The%20minima%2Fmaxima%20elements
//https://labuladong.gitbook.io/algo-en/ii.-data-structure/monotonicstack
//https://levelup.gitconnected.com/what-is-a-monotonic-stack-f10d79609c45
// https://liuzhenglaichn.gitbook.io/algorithm/monotonic-stack

function nearestSmallerLeft(arr) {
  const stack = new Stack();
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (!stack.isEmpty() && stack.peek() >= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = stack.peek();
    }
    stack.push(arr[i]);
  }
  return ans;
}
// module.exports = {
//   prevSmaller: function (A) {
//     var ans = [],
//       store = [],
//       a = A.length;
//     for (var i = 0; i < a; i++) {
//       while (true) {
//         // pop all the elements from the stack greater than current element
//         if (store.length > 0 && store[store.length - 1] >= A[i]) {
//           store.pop();
//         } else {
//           break;
//         }
//       }
//       if (store.length > 0) {
//         ans.push(store[store.length - 1]);
//       } else {
//         ans.push(-1);
//       }
//       store.push(A[i]);
//     }
//     return ans;
//   },
// };
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

function nearestGreaterLeft(arr) {
  const stack = new Stack();
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = stack.peek();
    }
    stack.push(arr[i]);
  }
  return ans;
}
function nearestSmallerRight(arr) {
  const stack = new Stack();
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() >= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = stack.peek();
    }
    stack.push(arr[i]);
  }
  return ans;
}

function nearestGreaterRight(arr) {
  const stack = new Stack();
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = stack.peek();
    }
    stack.push(arr[i]);
  }
  return ans;
}
// let arr = [1, 3, 5, 4, 2, 1];
// let ans = nearestSmallerLeft(arr);

// let arr = [1, 3, 5, 4, 1, 3, 2];
// let ans = nearestGreaterLeft(arr);

// let arr = [1, 3, 5, 4, 2, 1];
// let ans = nearestSmallerRight(arr);

let arr = [1, 3, 5, 4, 1, 3, 2];
let ans = nearestGreaterRight(arr);
console.log(ans);
