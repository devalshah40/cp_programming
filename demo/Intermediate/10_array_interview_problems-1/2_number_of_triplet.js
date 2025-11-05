/*
Given an arr[N] elements. Calculate no triplets of i,j,k 
such that i<j<k and arr[i] < arr[j] < arr[k]
*/

let arr = [2, 6, 9, 4, 10];

//TC :- O(N^3) -> N^3 steps
//SC :- O(1)
function brutForceApproach(arr) {
  let noOfTriplets = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] < arr[j] && arr[j] < arr[k]) {
          noOfTriplets++;
        }
      }
    }
  }
  return noOfTriplets;
}

//TC :- O(n^2) -> N^3 steps
//SC :- O(1)
function efficientApproach(arr) {
  let noOfTriplets = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let left = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) {
        left++;
      }
    }
    let right = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        right++;
      }
    }
    noOfTriplets += left * right;
  }
  return noOfTriplets;
}

// let noOfTriplets = brutForceApproach(arr);
let noOfTriplets = efficientApproach(arr);

console.log(noOfTriplets);
