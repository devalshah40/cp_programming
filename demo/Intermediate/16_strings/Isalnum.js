function isAlnum(A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 'A' && A[i] <= 'Z') {
      continue;
    } else if (A[i] >= 'a' && A[i] <= 'z') {
      continue;
    } else if (A[i] >= '0' && A[i] <= '9') {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}
let arr = ['S', 'c', 'a', 'l', 'e', 'r', '#', '2', '0', '2', '0'];
let ans = isAlnum(arr);
console.log(ans);
