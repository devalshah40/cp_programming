function firstOccurence(arr, val, index) {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === val) {
    return index;
  }
  return firstOccurence(arr, val, index + 1);
}
function firstOccurenceIndexWay(arr, val, index) {
  if (index === arr.length) {
    return -1;
  }
  if (arr[0] === val) {
    return 0;
  }
  // removes first element from arr
  arr.shift();
  let subIndex = firstOccurence(arr, val, index + 1);
  if (subIndex === -1) {
    return -1;
  } else {
    return subIndex + 1;
  }
}
let arr = [1, 2, 3, 4, 5];
let val = 6;

// let arr = [1, 2, 7, 4, 3, 5, 7];
// let val = 7;
// let index = firstOccurence(arr, val, 0);
let index = firstOccurenceIndexWay(arr, val, 0);
console.log(index);
