let arr = [10, 4, 16, 20, 40, 60, 80];
let n = arr.length;
let prefixSum = new Array(n + 1);

prefixSum[0] = 0;

for (let i = 0; i < n; ++i) {
  prefixSum[i + 1] = prefixSum[i] + arr[i];
}

for (let i = 0; i <= n; i++) {
  console.log(prefixSum[i] + ' ');
}

const q = [
  [2, 3],
  [4, 6],
  [1, 5],
  [3, 6],
];
for (let i = 0; i < q.length; i++) {
  let l = q[i][0];
  let r = q[i][1];

  // Calculating sum from r to l.
  console.log(prefixSum[r] - prefixSum[l - 1]);
}
console.log('');
// 0,10,14,30,50,90,150,230
