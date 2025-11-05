function largestNumber(A) {
  // sorts the array lexicographically
  A.sort((a, b) => {
    if (a + '' + b > b + '' + a) return -1;
    else return 1;
  });

  let ans = '';
  A.forEach((ele) => (ans += ele));
  if (ans[0] == '0') return 0;
  return ans;
}
let A = [3, 30, 34, 5, 9];

let ans = largestNumber(A);
console.log(ans);
