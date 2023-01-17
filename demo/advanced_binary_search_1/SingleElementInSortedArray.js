/*
Problem Description
Given a sorted array of integers A where every element appears twice except for one element which appears once, find and return this single element that appears only once.

NOTE: Users are expected to solve this in O(log(N)) time.



Problem Constraints
1 <= |A| <= 100000

1 <= A[i] <= 10^9



Input Format
The only argument given is the integer array A.



Output Format
Return the single element that appears only once.



Example Input
Input 1:

A = [1, 1, 7]
Input 2:

A = [2, 3, 3]


Example Output
Output 1:

 7
Output 2:

 2


Example Explanation
Explanation 1:

 7 appears once
Explanation 2:

 2 appears once
 */
// let A = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let A = [1, 1, 2, 3, 3, 4, 4, 5, 5];
//2
// let A = [1, 1, 2, 2, 3];
//3
// let A = [106, 106, 248, 248, 286, 286, 344, 357, 357];
//344

// let A = [
//   19, 19, 76, 76, 86, 86, 113, 113, 172, 172, 198, 198, 209, 209, 241, 241, 247,
//   247, 258, 258, 260, 260, 266, 266, 270, 270, 276, 276, 282, 282, 309, 309,
//   313, 313, 324, 324, 338, 338, 367, 368, 368, 370, 370, 398, 398, 442, 442,
//   460, 460,
// ];
// 367

/*
Solution Approach
Lets say the position of the element occuring once is x.
What property do you observe for the elements which are towards the left of x?

For any i from [0,x) ,we can say that

    if i is even A[i]==A[i+1]
    if i is odd  A[i]==A[i-1]
This cannot be said for elements from [x+1,n). Because in that case if i is even A[i]==A[i-1] and vice versa.

Therefore we just have to find the last index ‘j’ such that it satisfies the property of index from [0,x).
If we get j , then A[j+1] would be our answer.
*/

function singleElementInSortedArr(A) {
  let n = A.length;
  let s = 0;
  let e = n - 1;

  while (s <= e) {
    let mid = s + ((e - s) >>> 1);

    // if (s === e) {
    //   return A[mid];
    // }
    if ((mid & 1) === 0) {
      if (A[mid] === A[mid + 1]) {
        s = mid + 2;
      } else {
        e = mid - 1;
      }
    }

    if ((mid & 1) === 1) {
      if (A[mid] === A[mid - 1]) {
        s = mid + 1;
      } else {
        e = mid - 2;
      }
    }
  }
  return A[s];
}
let ans = singleElementInSortedArr(A);
console.log(ans);
