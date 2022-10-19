let totalStrength = function (strength) {
  let n = strength.length;

  let MOD = 1000000007;
  // let MOD = 1;

  let preSum = new Array(n + 1).fill(0);

  let prePrefix = new Array(n + 2).fill(0);

  for (let i = 0; i < n; i++) {
    preSum[i + 1] = (preSum[i] + strength[i]) % MOD;
  }
  for (let i = 0; i <= n; i++) {
    prePrefix[i + 1] = (prePrefix[i] + preSum[i]) % MOD;
  }

  let left = new Array();
  let stack = new Array();
  for (let i = 0; i < strength.length; i++) {
    let stackLen = stack.length;
    while (stack.length !== 0 && strength[i] <= strength[stack[stackLen - 1]]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stackLen - 1];
    stack.push(i);
  }

  let right = new Array();
  stack = new Array();
  for (let i = strength.length - 1; i >= 0; i--) {
    let stackLen = stack.length;
    while (stack.length !== 0 && strength[i] < strength[stack[stackLen - 1]]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n : stack[stackLen - 1];
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans +=
      ((((prePrefix[right[i] + 1] - prePrefix[i + 1]) * (i - left[i])) % MOD) +
        MOD -
        (((prePrefix[i + 1] - prePrefix[left[i] + 1]) * (right[i] - i)) %
          MOD)) *
      strength[i];
    ans %= MOD;
  }
  return ans;
};

let ans = totalStrength([1, 3, 1, 2]);
console.log(ans);
