let n = 123;

function sumOfDigits(n) {
  let remainder = parseInt(n % 10);
  let divisor = parseInt(n / 10);

  if (divisor === 0) {
    return remainder;
  }
  return remainder + sumOfDigits(divisor);
}
let ans = sumOfDigits(n);
console.log(ans);
