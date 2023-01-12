let A = [4, 3, 5, 7, 2, 1, 8, 6];

function mergeSort(A, l, r) {
  if (l === r) {
    return;
  }
  let mid = l + parseInt((r - l) / 2);
  mergeSort(A, l, mid);
  mergeSort(A, mid + 1, r);
  merge(A, l, mid, r);
}

function merge(A, l, mid, r) {
  let C = Array(r - l + 1);
  let k = 0,
    i = l,
    j = mid + 1;
  while (i <= mid && j <= r) {
    if (A[i] > A[j]) {
      C[k] = A[j];
      k++;
      j++;
    } else {
      C[k] = A[i];
      k++;
      i++;
    }
  }
  while (i <= mid) {
    C[k] = A[i];
    k++;
    i++;
  }
  while (j <= r) {
    C[k] = A[j];
    k++;
    j++;
  }

  for (let x = l; x <= r; x++) {
    A[x] = C[x - l];
  }
}
let ans = mergeSort(A, 0, A.length - 1);
console.log(A);
