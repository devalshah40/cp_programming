/*
Given a binary string A. 
It is allowed to do at most one swap between any 0 and 1. 
Find and return the length of the longest consecutive 1’s that can be achieved.
*/

// let arr = [1, 1, 0];
// let arr = [1, 1, 1];
// let arr = [0, 0, 0];
// let arr = [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1];
let A = '11010110000000000';
let arr = [...A];
// let arr = [0, 1, 1, 1, 0, 1, 1, 0, 0];

//TC :- O(n) -> 3N steps
//SC :- O(1)
function classRoomApproach(arr) {
  let n = arr.length;

  let count = 0;
  for (let i = 0; i < n; i++) {
    const value = arr[i];

    if (value === '1') {
      count++;
    }
  }

  if (count === n) {
    return n;
  }
  if (count === 0) {
    return 0;
  }

  let max1s = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value === '0') {
      let left = 0,
        right = 0;
      //search 1s in left
      for (let k = i - 1; k >= 0; k--) {
        if (arr[k] === '1') {
          left++;
        } else {
          break;
        }
      }
      //search 1s in right
      for (let k = i + 1; k < n; k++) {
        if (arr[k] === '1') {
          right++;
        } else {
          break;
        }
      }
      let consecutive1s = left + right;
      if (consecutive1s < count) {
        consecutive1s++;
      }
      max1s = Math.max(consecutive1s, max1s);
      //search 1s in right
    }
  }
  return max1s;
}

// let max1s = efficientApproach(arr);
let max1s = classRoomApproach(arr);

console.log(max1s);
