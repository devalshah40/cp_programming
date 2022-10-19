/*
Problem Description
You are given an integer array A.

Decide whether it is possible to divide the array into one or more subarrays of even length such that the first and last element of all subarrays will be even.

Return "YES" if it is possible; otherwise, return "NO" (without quotes).



Problem Constraints
1 <= |A|, A[i] <= 106



Input Format
The first and the only input argument is an integer array, A.



Output Format
Return a string "YES" or "NO" denoting the answer.



Example Input
Input 1:

 A = [2, 4, 8, 6]
Input 2:

 A = [2, 4, 8, 7, 6]


Example Output
Output 1:

 "YES"
Output 2:

 "NO"


Example Explanation
Explanation 1:

 We can divide A into [2, 4] and [8, 6].
Explanation 2:

 There is no way to divide the array into even length subarrays.

 Hint 1 :- Try to find a pattern in this question. For some particular cases, the answer is always going to Yes and No otherwise.
Try to make that observation.

Solution Approach :- If the first and the last element are even and the size of the array is even, then only the answer will be “YES.”
Otherwise will be “NO,” as we can’t divide the array into subarrays that meet the given conditions in the question.

So, if(A[0]%2 == 0 and A[n-1]%2 == 0 and n%2 == 0)
return “YES”;


 */

//param A : array of integers
//return an integer
function subarrayString(A) {
  let length = A.length;

  if (length % 2 === 0) {
    if (A[0] % 2 === 0 && A[length - 1] % 2 === 0) {
      return 'YES';
    } else {
      return 'NO';
    }
  } else {
    return 'NO';
  }
}
let A = [
  859, 468, 734, 489, 219, 72, 933, 200, 425, 771, 325, 931, 547, 127, 795, 802,
  903, 598, 243, 999, 577, 880, 864, 753, 95, 280, 476, 648, 722, 768, 105, 548,
  388, 197, 327, 725, 654, 672, 214, 167, 447, 514, 952, 355, 365, 570, 616,
  322, 658, 720, 591, 949, 64, 997, 9, 934, 595, 368,
];
// let A = [2, 3, 4, 6, 7, 8];
console.log(subarrayString(A));
