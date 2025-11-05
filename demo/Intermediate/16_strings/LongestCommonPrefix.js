function checkLongestPrefix(A) {
  // if (A.length === 1) {
  //   return A[0];
  // }
  let currentAns = A[0];
  for (let i = 1; i < A.length; i++) {
    currentAns = checkCommonPrefix(currentAns, A[i]);
    if (currentAns.length === 0) {
      break;
    }
    console.log(currentAns);
  }
  return currentAns;
}

function checkCommonPrefix(str, str1) {
  console.log(str, str1);
  let len = Math.min(str.length, str1.length);
  let ans = '';
  for (let i = 0; i < len; i++) {
    console.log(str[i], ' ', str1[i], i);
    if (str[i] !== str1[i]) {
      break;
    }
    ans += str[i];
  }
  return ans;
}

let arr = ['abcdefgh', 'abcefgh', 'aefghijk', 'aefghijklm'];
// let arr = ['abcd', 'abcd', 'efgh'];
// console.log(arr.sort());
// let ans = checkCommonPrefix('length', 'len');
let ans = checkLongestPrefix(arr);
console.log('ans ', ans);
