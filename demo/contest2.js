// // let A = ['harsh91', 'shivam95', 'adarsh100'];
// // let A = ['harsh8', 'shivam9', 'adarsh1'];
// let A = ['xecabdvf2', 'ucgce4', 'hcldoom2', 'q9'];

// A.sort((first, second) => {
//   let firstName = first.slice(0, -2);
//   let firstMarks = parseInt(first.split(/[a-zA-z]+/)[1]);
//   // let firstMarks = first.slice(-3);
//   // firstMarks =
//   //   firstMarks[0] >= '0' && firstMarks[0] <= '9'
//   //     ? parseInt(firstMarks)
//   //     : firstMarks[1] >= '0' && firstMarks[1] <= '9'
//   //     ? parseInt(first.slice(-2))
//   //     : parseInt(first.slice(-1));

//   let secondName = second.slice(0, -2);
//   let secondMarks = parseInt(second.split(/[a-zA-z]+/)[1]);
//   // let secondMarks = second.slice(-3);
//   // secondMarks =
//   //   secondMarks[0] >= '0' && secondMarks[0] <= '9'
//   //     ? parseInt(secondMarks)
//   //     : secondMarks[0] >= '1' && secondMarks[1] <= '9'
//   //     ? parseInt(second.slice(-2))
//   //     : parseInt(second.slice(-1));
//   console.log(firstName, firstMarks, ' ', secondName, secondMarks);

//   if (firstMarks === secondMarks) {
//     return 1;
//   } else {
//     return secondMarks - firstMarks;
//   }
// });

// console.log(A);

// let sum = 0;
// A.map((val) => {
//   let intVal = parseInt(val, 2);
//   sum += intVal;
//   return intVal;
// });
// console.log(sum);
// // console.log(A);
// A.sort((a, b) => {
//   let aVal = parseInt(a, 2);
//   let bVal = parseInt(b, 2);
//   return aVal - bVal;
// });
// console.log(A);

// let maxSum = sum;
// for (let i = 0; i < 2; i++) {
//   console.log('before minus', sum);
//   sum -= parseInt(A[i], 2);
//   console.log('after minus', sum);
//   let val = A[i]
//     .split('')
//     .map((b) => (1 - b).toString())
//     .join('');
//   console.log(A[i], parseInt(A[i], 2), ' ', val, parseInt(val, 2));
//   sum += parseInt(val, 2);
//   console.log('after sum', sum);

//   if (sum > maxSum) {
//     console.log('change sum', sum);
//     maxSum = sum;
//   }
// }
// // A = A.map((val) => val.toString(2));
// console.log(maxSum);

let A = ['100', '011', '100'];
let n = 2;

A.sort();
console.log(A);

let k = 1;
let previousElement = A[0];
while (k < A.length && n > 0) {
  let currentElement = A[k];
  if (currentElement !== previousElement) {
    let flippedA = flipBits(previousElement);
    A[k] = flippedA;
    n--;
  }
  k++;
}

function sumBinaryArr(A) {
  let sum = A[0];

  for (let i = 1; i < A.length; i++) {
    sum = sumTwoElement(sum, A[i]);
  }
  return sum;
}
function sumTwoElement(A, B) {
  // let val =
  // let A = '11';
  // let B = '11';
  let maxStrLen = Math.max(A.length, B.length);
  let maxStr = Array(maxStrLen).fill(0);
  let i = A.length - 1;
  let j = B.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let firstBinary = A[i] ? parseInt(A[i]) : 0;
    let secondBinary = B[j] ? parseInt(B[j]) : 0;
    let sum = firstBinary + secondBinary + carry;
    carry = parseInt(sum / 2);
    // let curSum = parseInt(sum % 2);
    let curSum = sum & 1;
    maxStr[maxStrLen - 1] = curSum;
    i--;
    j--;
    maxStrLen--;
  }
  // console.log(maxStr);
  maxStr = carry ? carry + '' + maxStr.join('') : maxStr.toString('');
  // console.log(maxStr);
  return maxStr;
}

function flipBits(A) {
  let s = 0;
  let e = A.length - 1;
  while (s <= e) {
    if (A[s] === '0') {
      A[s] = '1';
    } else {
      A[s] = '0';
    }

    if (s !== e && A[e] === '0') {
      A[e] = '1';
    } else {
      A[e] = '0';
    }
    s++;
    e--;
  }
}
