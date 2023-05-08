function getNthFibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return getNthFibonacci(n - 1) + getNthFibonacci(n - 2);
}

let n = 5;
let ans = getNthFibonacci(n);

console.log(ans);
