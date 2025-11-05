function simlePowerToN(n, power) {
  if (power === 1) {
    return n;
  }

  return n * simlePowerToN(n, power - 1);
}

function optimiZedPowerToN(n, power) {
  if (power === 0) {
    return 1;
  }
  let temp = optimiZedPowerToN(n, parseInt(power / 2));
  if (power & 1) {
    return temp * temp * n;
  } else {
    return temp * temp;
  }
}

function optimiZedPowerToNMod(n, power, mod) {
  n = BigInt(n);
  mod = BigInt(mod);
  if (n === 0) {
    return 0;
  }
  if (power === 0) {
    return 1n;
  }
  let temp = optimiZedPowerToNMod(n, parseInt(power / 2), mod);
  let halfAnswer = ((temp % mod) * (temp % mod)) % mod;
  if (power & 1) {
    return ((halfAnswer % mod) * (n % mod)) % mod;
  } else {
    return halfAnswer;
  }
}
function pow(n, power, mod) {
  n = BigInt(n);
  mod = BigInt(mod);

  function optimiZedPowerToNMod(n, power, mod) {
    if (n === 0n) {
      return 0n;
    }
    if (power === 0) {
      return 1n;
    }
    let temp = optimiZedPowerToNMod(n, parseInt(power / 2), mod);
    let halfAnswer = ((temp % mod) * (temp % mod)) % mod;
    if (power & 1) {
      return ((halfAnswer % mod) * (n % mod)) % mod;
    } else {
      return halfAnswer;
    }
  }

  let ans = optimiZedPowerToNMod(n, power, mod);

  if (ans < BigInt(0)) {
    ans = (ans + mod) % mod;
  }
  return Number(ans);
}
// let n = 0;
// let power = 0;
// let mod = 100;

// let n = 2;
// let power = 3;
// let mod = 1_000_000_007;

let n = 67790475;
let power = 13522204;
let mod = 98794224;

// let n = -1;
// let power = 1;
// let mod = 20;
// let ans = simlePowerToN(n, power);
// let ans = optimiZedPowerToN(n, power);
let ans = optimiZedPowerToNMod(n, power, mod);
if (ans < BigInt(0)) {
  ans = (ans + mod) % mod;
}
// return Number(ans);

console.log(Number(ans));
// console.log(ans);
