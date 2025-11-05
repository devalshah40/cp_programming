// Using recursion check whether arr is sorted or not

// let arr = [1, 3, 2];
// let arr = [1, 2, 3, 5, 4, 6];
let arr = [1, 2, 3, 4, 5, 6];

let index = 0;

function isSorted(arr, index) {
  if (index === arr.length - 1) {
    return true;
  }
  if (arr[index] < arr[index + 1] && isSorted(arr, index + 1)) {
    return true;
  }
  return false;
}
function isSorted2(arr, index) {
  if (index === arr.length - 1) {
    return true;
  }
  if (arr[index] < arr[index + 1]) {
    return isSorted2(arr, index + 1);
  }
  return false;
}

// let ans = isSorted(arr, 0);
let ans = isSorted2(arr, 0);
console.log(ans);
