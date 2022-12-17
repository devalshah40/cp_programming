/*
Problem Description
Given an array of integers A and an integer B, find and return the number of pairs in A whose sum is divisible by B.

Since the answer may be large, return the answer modulo (109 + 7).



Problem Constraints
1 <= length of the array <= 100000
1 <= A[i] <= 109
1 <= B <= 106



Input Format
The first argument given is the integer array A.
The second argument given is the integer B.



Output Format
Return the total number of pairs for which the sum is divisible by B modulo (109 + 7).



Example Input
Input 1:

 A = [1, 2, 3, 4, 5]
 B = 2
Input 2:

 A = [5, 17, 100, 11]
 B = 28


Example Output
Output 1:

 4
Output 2:

 1


Example Explanation
Explanation 1:

 All pairs which are divisible by 2 are (1,3), (1,5), (2,4), (3,5). 
 So total 4 pairs.
 */

function pairSumDivisibleByM(A, B) {
  let map = new Map();

  let N = A.length;
  for (let i = 0; i < N; i++) {
    let modA = A[i] % B;
    let val = map.get(modA);

    if (val) {
      map.set(modA, val + 1);
    } else {
      map.set(modA, 1);
    }
  }

  let ans = 0;
  let mod = 1_000_000_007;

  let frequency = map.get(0) || 0;
  // ans = (frequency * (frequency - 1)) / 2;
  ans = (frequency * (frequency - 1)) >>> 1;

  let i = 1;
  let j = B - 1;
  while (i < j) {
    let frequenceA = map.get(i) || 0;
    let frequenceB = map.get(j) || 0;
    ans += frequenceA * frequenceB;
    i++;
    j--;
  }

  if ((B & 1) === 0) {
    let mid = B / 2;

    let frequency = map.get(mid) || 0;
    // ans += (frequency * (frequency - 1)) / 2;
    ans += (frequency * (frequency - 1)) >>> 1;
  }
  return ans % mod;
}

// Not working
function pairSumDivisibleByMMod(A, B) {
  let map = new Map();
  B = BigInt(B);
  let N = A.length;
  for (let i = 0; i < N; i++) {
    let modA = BigInt(A[i]) % B;
    let val = map.get(modA);

    if (val) {
      map.set(modA, val + 1n);
    } else {
      map.set(modA, 1n);
    }
  }

  let ans = 0n;
  let mod = 1_000_000_007n;

  let frequency = (map.get(0n) || 0n) % mod;
  let frequencyMinus = frequency > 0n ? (frequency - 1n + mod) % mod : 0n;

  let mulVal = (frequency * frequencyMinus) % mod;
  if (mulVal < 0n) {
    mulVal += mod;
  }
  mulVal >>= 1n;

  // ans += mulVal;
  ans = ((ans % mod) + (mulVal % mod)) % mod;
  // ans = ( ( (ans % mod) + ((frequency * (frequency - 1)) ) % mod) % mod) >> 1;

  let i = 1n;
  let j = B - 1n;
  while (i < j) {
    let frequenceA = (map.get(i) || 0n) % mod;
    let frequenceB = (map.get(j) || 0n) % mod;
    //ans += (frequenceA * frequenceB);
    // ans += (frequenceA * frequenceB) % mod;
    let mulVal = (frequenceA * frequenceB) % mod;
    if (mulVal < 0n) {
      mulVal += mod;
    }

    ans = ((ans % mod) + (mulVal % mod)) % mod;
    if (ans < 0n) {
      ans += mod;
    }

    i++;
    j--;
  }
  if (i === j) {
    let frequenceA = (map.get(i) || 0n) % mod;
    let frequencyAMinus = frequenceA > 0n ? (frequenceA - 1n + mod) % mod : 0n;

    let mulVal = (frequenceA * frequencyAMinus) % mod;
    if (mulVal < 0n) {
      mulVal += mod;
    }
    mulVal >>= 1n;

    ans = ((ans % mod) + (mulVal % mod)) % mod;

    // ans += ((frequenceA * (frequenceA - 1)) % mod) >> 1;
    // ans += (frequenceA * (frequenceA - 1)) >> 1;
    // ans = ((ans % mod + (frequenceA * (frequenceA - 1)) % mod) % mod) >> 1;
  }
  if (ans < 0n) {
    ans += mod;
  }
  return Number(ans);
}

// Efficient scaler approach
function pairSumDivisibleScaler(A, B) {
  const MOD = 1e9 + 7;

  // mp[i] stores the count of elements such that their modulo B equals i
  let mp = new Array(B).fill(0);
  let ans = 0;
  A.forEach((ele) => {
    let modElement = ((ele % B) + B) % B;

    let need = (B - modElement) % B;
    ans += mp[need]; 
    ans %= MOD;
    mp[modElement]++;
  });

  return ans;
}

let A = [13, 14, 22, 3, 32, 19, 16];
let B = 4;
// ans = 4

// let A = [5, 17, 100, 11];
// let B = 28;
//ans = 1

// let A = [1, 2, 3, 4, 5];
// let B = 2;
// ans = 4

// let ans = pairSumDivisibleByM(A, B);
// let ans = pairSumDivisibleByMMod(A, B);
let ans = pairSumDivisibleWihtoutMMod(A, B);

console.log(ans);
/*
const MOD = 1e9 + 7;
module.exports = {
  solve: function (A, B) {
    A = A.map((ele) => (ele = ((ele % B) + B) % B));
    // mp[i] stores the count of elements such that their modulo B equals i
    let mp = new Array(B + 1).fill(0);
    let ans = 0;
    A.forEach((ele) => {
        let need = (B - ele) % B;
        ans += mp[need];
        ans %= MOD;
        mp[ele]++;
    });
    return ans;
  },
};
*/
