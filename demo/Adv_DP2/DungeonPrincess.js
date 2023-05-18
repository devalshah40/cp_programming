// approach 1 thinking in brut force where need to go max of A[i+1][j] or A[i][j+1]
function calculateMinimumHP(A = []) {
  let n = A.length;
  let m = A[0].length;

  let i = 0,
    j = 0;

  // let health = 1 - 2 * A[i][j];
  let health = 0;
  while (!(i === n - 1 && j === m - 1)) {
    health += A[i][j];
    if (i === n - 1) {
      j++;
    } else if (A[i + 1][j] >= A[i][j + 1]) {
      i++;
    } else if (j === m - 1) {
      i++;
    } else if (A[i][j + 1] > A[i + 1][j]) {
      j++;
    }
  }
  health += A[i][j];
  return 1 - health;
}

let ans;

let A = [
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
];
// A = [
//   [1, -1, 0],
//   [-1, 1, -1],
//   [1, 0, -1],
// ];
A = [
  [1, -1, 4],
  [-1, 2, -1],
  [1, 0, -1],
];
/* above if I select (0,0), (0,1), (0,2),(1,2),(2,2) with select max of 2 then answer is 
formula x + (sum of all numbers) = 1
x + (1 - 1 + 4 -1 -1) =  1 => x + 2 = 1 => x + 2 = 1 => x = -1

(0,0), (1,0), (1,1),(2,1),(2,2) with select max of 2 then answer is 
x + (1 - 1 + 2 + 0 - 1) =  1 => x + 1 = 1 => x = 0

so from above examples, max approach is failed.

(0,0), (1,0), (2,0),(2,1),(2,2) with select max of 2 then answer is 
x + (1 - 1 + 1 + 0 - 1) =  1 => x + 0 = 1 => x = 1

so selecting min or max element from (0,0) to (n-1. m-1) or (n-1. m-1) to (0,0) won't work

*/
ans = calculateMinimumHP(A);
console.log(ans);
