function fillPrefixSum(arr, n, prefixSum) {
  prefixSum[0] = arr[0];
  // Adding present element
  // with previous element
  for (let i = 1; i < n; ++i) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
}

let arr = [10, 4, 16, 20];
let n = arr.length;
let prefixSum = new Array(n);

fillPrefixSum(arr, n, prefixSum);

for (let i = 0; i <= n; i++) {
  console.log(prefixSum[i] + ' ');
}
console.log('');
// 10,14,30,50

function rangeSums(A, start, end) {
  let ps = [];
  ps[-1] = 0;

  for (let i = 0; i < A.length; i++) {
    ps[i] = ps[i - 1] + A[i];
  }
  let ans = [];
  for (let i = 0; i < start.length; i++) {
    ans.push(ps[end[i]] - ps[start[i] - 1]);
  }
  return ans;
}
