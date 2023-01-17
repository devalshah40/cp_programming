function binarySearch(A, B) {
  let n = A.length;
  let s = 0;
  let e = n - 1;

  while (s <= e) {
    let mid = s + ((e - s) >> 1);
    if (A[mid] === B) {
      return mid;
    } else if (A[mid] < B) {
      s = mid + 1;
    } else {
      pivot - mid;
      e = mid - 1;
    }
  }
}

let A = [1, 2, 3, 4, 5];
let B = 3;

let ans = binarySearch(A, B);
console.log(ans);
