// let A = [2, 4, 5, 1, 3];
// let B = 3;
// let isExist = false;
// let moreElementsCount = -1;
// for (let i = 0; i < A.length; i++) {
//   if (A[i] > B) {
//     moreElementsCount++;
//   }
//   if (A[i] === B) {
//     isExist = true;
//   }
// }
// if (isExist) {
//   moreElementsCount++;
// }
// // return moreElementsCount;
// console.log(moreElementsCount);

// let str = 'scaler';
// let prefixSum = [];
// let index = 0;
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// for (const s of str) {
//   if (vowels.includes(s)) {
//     prefixSum[index] = index === 0 ? 1 : prefixSum[index - 1] + 1;
//   } else {
//     prefixSum[index] = index === 0 ? 0 : prefixSum[index - 1];
//   }
//   index++;
// }
// console.log(prefixSum);

// let ansArr = [];
// let B = [
//   [0, 2],
//   [2, 4],
// ];
// for (let i = 0; i < B.length; i++) {
//   let start = B[i][0];
//   let end = B[i][1];
//   console.log(start, ' ', end, ' ', prefixSum[end], ' ', prefixSum[start]);
//   let count =
//     start === 0 ? prefixSum[end] : prefixSum[end] - prefixSum[start - 1];
//   ansArr.push(count);
// }
// console.log(ansArr);

// let A = 3;
// let B = 2;

// let multiplier = 1;
// let ans = 0;

// for (let i = 0; i < 5; i++) {
//   let digit = B > 0 ? 0 : 1;
//   ans += digit * multiplier;
//   multiplier *= 2;
//   B--;
// }
// console.log(ans);
/*
8 9 20 
2 5 6 
1 6 5 
3 1 5 4 6 
2 8 6 
2 2 2 
3 4 4 2 8 
1 9 4 
2 7 4 
1 2 2 
3 2 8 3 6 
3 1 5 7 4 
2 5 3 
3 6 6 5 5 
4 8 3 2 8 
3 5 3 5 4 
2 1 5 
4 2 9 2 9 
1 4 2 
3 6 1 3 1 
3 8 7 3 2 
*/

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let operationsArr;
let matrix;

let lineNo = 0;

let row, column, queriesCount;
r1.on('line', function (line) {
  if (lineNo === 0) {
    let numbers = line.split(' ');
    row = parseInt(numbers[0]);
    column = parseInt(numbers[1]);
    queriesCount = parseInt(numbers[2]);
    operationsArr = Array.from(Array(queriesCount), () => new Array(5));
    matrix = Array.from(Array(row), () => new Array(column));
    let val = 1;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        matrix[i][j] = val;
        val++;
      }
    }
  } else {
    let numbers = line.split(' ').map((v) => parseInt(v));
    operationsArr[lineNo - 1] = numbers;
  }

  if (queriesCount === lineNo) {
    r1.close();
  }
  lineNo++;
});

r1.on('close', function () {
  for (let i = 0; i < operationsArr.length; i++) {
    let operationVal = operationsArr[i][0];
    switch (operationVal) {
      case 1:
        let sourceColumn = operationsArr[i][1] - 1,
          targetColumn = operationsArr[i][2] - 1;
        for (let i = 0; i < row; i++) {
          let temp = matrix[i][sourceColumn];
          matrix[i][sourceColumn] = matrix[i][targetColumn];
          matrix[i][targetColumn] = temp;
        }
        break;
      case 2:
        let sourceRow = operationsArr[i][1] - 1,
          targetRow = operationsArr[i][2] - 1;
        for (let i = 0; i < column; i++) {
          let temp = matrix[sourceRow][i];
          matrix[sourceRow][i] = matrix[targetRow][i];
          matrix[targetRow][i] = temp;
        }
        break;
      case 3:
        let x1 = operationsArr[i][1] - 1,
          y1 = operationsArr[i][2] - 1,
          x2 = operationsArr[i][3] - 1,
          y2 = operationsArr[i][4] - 1;
        let ans = matrix[x1][y1] | matrix[x2][y2];
        console.log(ans);
        break;
      case 4:
        let a1 = operationsArr[i][1] - 1,
          b1 = operationsArr[i][2] - 1,
          a2 = operationsArr[i][3] - 1,
          b2 = operationsArr[i][4] - 1;
        let ans1 = matrix[a1][b1] & matrix[a2][b2];
        console.log(ans1);
        break;
      default:
        break;
    }
  }
  // console.log(matrix);
  // console.log(operationsArr);
});
