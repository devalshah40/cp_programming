/*
  Given an array A and an integer B. 
  A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B). 
  Check if any good pair exist or not. 
*/
let arr = [1, 2, 5, 8, 3, 4, 8, 6, 8];

/*
Approach 1 :- 
  
*/
let isGoodPair = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = j + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === B) {
      isGoodPair = true;
      break;
    }
  }
}
