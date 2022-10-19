/*
You are given an integer A. You need to print all the Armstrong Numbers between 1 to A.

If sum of cubes of each digit of the number is equal to the number itself, then the number is called an Armstrong number.

For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 ).

Problem Constraints
1 <= N <= 500

Input Format
First and only argument is an integer A.

Output Format
Return an integer array of all the Armstrong numbers in range [1,A].

Example Input
Input 1:
 5
Input 2:
 200

Example Output
Output 1:
1
Output 2:
[1, 153]

Example Explanation
Explanation 1:

1 is an armstrong number.
Explanation 2:

1 and 153 are armstrong number under 200.
*/

function isArmstrong(number) {
  let tempNumber = number;
  let isArmstrong = 0;
  let cubeSume = 0;
  while (tempNumber > 0) {
    let divisor = tempNumber % 10;
    cubeSume += divisor * divisor * divisor;
    tempNumber = parseInt(tempNumber / 10);
  }

  if (cubeSume === number) {
    isArmstrong = 1;
  }
  // console.log('isArmstrong ', isArmstrong);
  return isArmstrong;
}
console.log('isArmstrong ', isArmstrong(1));

// let armstrongArr = [];
// for (let i = 1; i <= N; i++) {
//   if (isArmstrong(i)) {
//     armstrongArr.push(i);
//   }
// }
// return armstrongArr;
