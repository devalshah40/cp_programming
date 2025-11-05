function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  let value = getFactorial(n - 1);
  return n * value;
}

function getFactorial2(k, n) {
  if (n === k) {
    return n;
  }

  return k * getFactorial2(k + 1, n);
}
let ans;
let n = 4;
// ans = getFactorial(n);
ans = getFactorial2(1, n);

console.log(ans);
