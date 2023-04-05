function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  let value = getFactorial(n - 1);
  return n * value;
}

let n = 4;
let ans = getFactorial(n);

console.log(ans);
