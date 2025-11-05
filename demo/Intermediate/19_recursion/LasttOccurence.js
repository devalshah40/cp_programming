function lastOccurence(arr, val, index) {
  if (index === 0) {
    return -1;
  }
  if (arr[index] === val) {
    return index;
  }
  return lastOccurence(arr, val, index - 1);
}
let arr = [1, 2, 7, 4, 3, 5, 7, 6];
let val = 7;
let index = lastOccurence(arr, val, arr.length - 1);
console.log(index);
