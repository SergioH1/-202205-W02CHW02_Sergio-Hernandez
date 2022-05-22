export function ramdonCellBoard(rows, cols) {
  const board = new Array(rows);
  for (let x = 0; x < rows; x++) {
    board[x] = new Array(cols);
    for (let y = 0; y < cols; y++) {
      board[x][y] = Math.round(Math.random());
    }
  }
  return board;
}
