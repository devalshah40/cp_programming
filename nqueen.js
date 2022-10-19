function printSolution(board, N) {
  //   for (let i = 0; i < N; i++) {
  //     for (let j = 0; j < N; j++) {
  //       process.stdout.write(board[i][j], ' ');
  //     }
  //     process.stdout.write('\n');
  //   }
  console.table(board);
}

function canPlaceQueen(board, row, col, n) {
  // Check this row on left side
  for (let i = 0; i < col; i++) {
    if (board[row][i] == 1) return false;
  }

  // Check upper diagonal on left side
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j]) return false;

  // Check lower diagonal on left side
  for (let i = row, j = col; j >= 0 && i < n; i++, j--)
    if (board[i][j]) return false;

  return true;
}

function solveNQueen(i, j, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0;
    }
  }
  //base case
  if (i === n) {
    printSolution(arr, n);
    return true;
  }

  for (let j = 0; j < n; j++) {
    let isValid = canPlaceQueen(arr, i, j, n);
    if (isValid) {
      arr[i][j] = 1;
      let isSuccess = solveNQueen(i + 1, j, n);

      if (isSuccess) {
        return true;
      }
      arr[i][j] = 0;
    }
  }
  return false;
}

solveNQueen(0, 0, 4);
