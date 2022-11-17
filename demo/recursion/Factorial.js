function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

let n = 4;
let ans = getFactorial(n);

console.log(ans);
