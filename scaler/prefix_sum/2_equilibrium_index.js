let arr = new Array(1, 2, 4, 2, 1);
let n = arr.length;

// let index = equilibriumUsing2PrefixSum(arr, n);
// console.log(index);

// let index1 = equilibrium(arr, n);
// console.log(index1);

let index2 = equilibriumUsing1PrefixSum(arr, n);
console.log(index2);

// Program to find equilibrium index of an array using Prefix sum
// Time Complexity: O(N)
// Auxiliary Space: O(N)
function equilibriumUsing2PrefixSum(a, n) {
  if (n == 1) return 0;
  var forward = new Array(0);
  var rev = new Array(0);

  // Taking the prefixsum from front end array
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      forward[i] = a[i];
    } else {
      forward[i] = forward[i - 1] + a[i];
    }
  }
  console.log(arr);
  console.log(forward);

  // Taking the prefixsum from back end of array
  // start from 4,3,2,1,0
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      rev[i] = a[i];
    } else {
      rev[i] = rev[i + 1] + a[i];
    }
  }
  console.log(rev);

  // Checking if forward prefix sum
  // is equal to rev prefix
  // sum
  for (let i = 0; i < n; i++) {
    if (forward[i] == rev[i]) {
      return i;
    }
  }
  return -1;
}

// Time Complexity: O(N)
// Auxiliary Space: O(N)
function equilibriumUsing1PrefixSum(arr, n) {
  let prefixSum = new Array(n);

  for (let i = 0; i < n; ++i) {
    if (i === 0) {
      prefixSum[i] = arr[i];
    } else {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(prefixSum[i] + ' ');
  }

  for (let i = 0; i < n; i++) {
    let leftSum;
    if (i === 0) {
      leftSum = 0;
    } else {
      leftSum = prefixSum[i - 1];
    }
    console.log('leftSum - ', leftSum);

    let rightSum;
    if (i === n - 1) {
      rightSum = 0;
    } else {
      rightSum = prefixSum[n - 1] - prefixSum[i];
    }

    console.log('rightSum - ', rightSum);
    if (leftSum === rightSum) {
      console.log('equilibrium index - ', i);
      return i;
    }
  }
  return -1;
}

// Time Complexity: O(N)
// Auxiliary Space: O(1)
function equilibrium(arr, n) {
  let sum = 0; // initialize sum of whole array
  let leftsum = 0; // initialize leftsum

  // Find sum of the whole array
  for (let i = 0; i < n; ++i) sum += arr[i];

  for (let i = 0; i < n; ++i) {
    sum -= arr[i]; // sum is now right sum for index i

    if (leftsum == sum) return i;

    leftsum += arr[i];
  }

  // If no equilibrium index found, then return 0 //
  return -1;
}
