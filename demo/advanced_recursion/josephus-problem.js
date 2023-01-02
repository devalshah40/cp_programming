/*
Problem Description
Given the total number of person A and a number B which indicates that B-1 persons are skipped and the Bth person is killed in a circle. Find the last person standing in the circle.


Problem Constraints
1 <= A <= 104
2 <= B <= A



Input Format
First argument A is an integer.
Second argument B is an integer.


Output Format
Return an integer.


Example Input
Input 1:
A = 4
B = 2
Input 2:
A = 5
B = 3


Example Output
Output 1:
1
Output 2:
4


Example Explanation
For Input 1:
Firstly, the person at position 2 is killed, then the person at position 4 is killed,
then the person at position 3 is killed. So the person at position 1 survives. 
For Input 2:
Firstly, the person at position 3, then the person at position 1 is killed, 
then the person at position 5 is killed. Finally, the person at position 2 is killed. 
So the person at position 4 survives. 
//https://www.geeksforgeeks.org/josephus-problem/
*/

//Recursion
function josephusRecursiveList(person, k, index) {
  // Base case , when only one person is left
  if (person.length == 1) {
    console.log(person[0]);
    return;
  }

  // find the index of first person which will die

  index = (index + k) % person.length;

  // remove the first person which is going to be killed
  if (index > -1) {
    person.splice(index, 1);
  }

  // recursive call for n-1 persons
  josephusRecursiveList(person, k, index);
}

function josephusRecursive(A, B) {
  if (A === 1) {
    return 1;
  }
  let x = this.solve(A - 1, B);
  let y = ((x + B - 1) % A) + 1;
  return y;
}

function josephusIterative(n, k) {
  k--;
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    // Makes all the 'n' people alive by
    // assigning them value = 1
    arr[i] = 1;
  }

  // Cut = 0 gives the sword to 1st person.
  let cnt = 0,
    cut = 0,
    num = 1;

  // Loop continues till n-1 person dies.
  while (cnt < n - 1) {
    // Checks next (kth) alive persons.
    while (num <= k) {
      cut++;
      cut = cut % n;

      // Checks and resolves overflow
      // of Index.
      if (arr[cut] == 1) {
        // Updates the number of persons
        // alive.
        num++;
      }
    }

    // refreshes value to 1 for next use.
    num = 1;
    arr[cut] = 0; // Kills the person at position of 'cut'

    // Updates the no. of killed persons.
    cnt++;
    cut++;

    // Checks and resolves overflow of Index.
    cut = cut % n;

    // Checks the next alive person the
    // sword is to be given.
    while (arr[cut] == 0) {
      cut++;

      // Checks and resolves overflow
      // of Index.
      cut = cut % n;
    }
  }

  // Output is the position of the last
  // man alive(Index + 1);
  return cut + 1;
}

function josephusIterativeEfficient(A, B) {
  let noOfElements = 1,
    ansIndex = 1;
  while (noOfElements <= A) {
    // update the value of ansIndex
    ansIndex = ((ansIndex + B - 1) % noOfElements) + 1;
    noOfElements++;
  }
  return ansIndex;

  // let index = 1,
  //   ansIndex = 1;
  // while (index <= A) {
  //   // update the value of ansIndex
  //   ansIndex = (ansIndex + B) % index;
  //   index++;
  // }
  // //map index to number so 0 -> 1, 1 -> 2
  // return ansIndex + 1;
}
// Driver code

let n = 5; // specific n and k values for original
// josephus problem
let k = 3;

// k--; // (k-1)th person will be killed
// let index = 0; // The index where the person which will die
// let person = [];
// // fill the person vector
// for (let i = 1; i <= n; i++) {
//   person.push(i);
// }
// josephusRecursiveList(person, k, index);

// josephusIterative(n, k);
let ans = josephusIterativeEfficient(n, k);
console.log(ans);
