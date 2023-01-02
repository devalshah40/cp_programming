// Using recursion check whether arr is sorted or not

let arr = [1, 3, 2];
// let arr = [1, 2, 3, 5, 4, 6];

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

let ans = isSorted(arr, 0);
console.log(ans);
