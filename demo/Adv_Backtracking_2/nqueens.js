function canPlaceQueen(board, row, col) {
  let n = board.length;
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

function solveNQueen(matrices, row) {
  //base case
  let n = matrices.length;
  if (row === n) {
    console.table(matrices);
    return;
  }

  for (let col = 0; col < n; col++) {
    if (canPlaceQueen(matrices, row, col)) {
      matrices[row][col] = 1;
      solveNQueen(matrices, row + 1);
      matrices[row][col] = 0;
    }
  }
}

let n = 3;
let matrices = [];
for (let i = 0; i < n; i++) {
  matrices[i] = [];
  for (let j = 0; j < n; j++) {
    matrices[i][j] = 0;
  }
}
solveNQueen(matrices, 0);
