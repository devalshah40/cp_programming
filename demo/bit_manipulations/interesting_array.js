/*
Problem Description
You have an array A with N elements. We have two types of operation available on this array :
We can split an element B into two elements, C and D, such that B = C + D.
We can merge two elements, P and Q, to one element, R, such that R = P ^ Q i.e., XOR of P and Q.
You have to determine whether it is possible to convert array A to size 1, containing a single element equal to 0 after several splits and/or merge?



Problem Constraints
1 <= N <= 100000

1 <= A[i] <= 106



Input Format
The first argument is an integer array A of size N.



Output Format
Return "Yes" if it is possible otherwise return "No".



Example Input
Input 1:

 A = [9, 17]
Input 2:

 A = [1]


Example Output
Output 1:

 Yes
Output 2:

 No


Example Explanation
Explanation 1:

 Following is one possible sequence of operations -  
 1) Merge i.e 9 XOR 17 = 24  
 2) Split 24 into two parts each of size 12  
 3) Merge i.e 12 XOR 12 = 0  
 As there is only 1 element i.e 0. So it is possible.
Explanation 2:

 There is no possible way to make it 0.

 Solution Approach
 If any element in the array is even then, it can be made 0. Split that element into two equal parts of A[i]/2 and A[i]/2. XOR of two identical numbers is zero. Therefore this strategy makes an element 0.

If any element is odd. Split it in two-part: 1, A[i]-1. Since A[i]-1 is even, it can be made 0 by the above strategy. Therefore an odd element can reduce its size to 1.

Therefore, two odd elements can be made 0 by following the above strategy and finally XOR them (i.e., 1) as 1 XOR 1 = 0.

Therefore if the number of odd elements in the array is even, the answer is possible. Otherwise, an element of value 1 will be left, and it is impossible to satisfy the condition.
*/

function checkInterestingArr(arr) {
  let n = arr.length;
  if (n === 0) {
    return 'No';
  }
  let ans = arr[0];
  for (let i = 1; i < n; i++) {
    ans ^= arr[i];
  }
  if ((ans & 1) === 0) {
    return 'Yes';
  } else {
    return 'No';
  }
}

/*
even number can easily split in two same parts having xor = 0
 let arr = [10]; 10 /2 is 5,5 and 5^5 =0. 
 so for any even number answer is Yes

 For odd number answer 
 let arr = [5]; 5 = 1,4 then for 4 answer is 0. so left only 1 value.
 so for any odd number, there will be only 1 value remaining. So answer is No. 

But for 2 odd numbers.
let arr = [5,9]; let ans = [1,1] so 1&1 = 0; so ans will be 0.
so for even odd numbers,  answer is Yes otherwise No. 
*/
function efficientSolution(arr) {
  let i,
    ctr = 0;
  for (i = 0; i < arr.length; i++) {
    // if its odd then increase count
    if (arr[i] % 2 === 1) {
      ctr++;
    }
  }
  // if odd number count is odd then return No else Yes
  if (ctr % 2 === 1) {
    return 'No';
  } else {
    return 'Yes';
  }
}

let arr = [9, 17];
let ans = checkInterestingArr(arr);
console.log(ans);
