const cellBoard = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

let livingCells = 0;

for (let x = 0; x < cellBoard.length; x++) {
  for (let y = 0; y < cellBoard[x].length; j++) {
    if (x === 0 && y === 0) {
      if (cellBoard[x + 1][y + 1] === 1) {
        livingCells++;
      }
      if (cellBoard[x][y + 1] === 1) {
        livingCells++;
      }
      if (cellBoard[x + 1][y] === 1) {
        livingCells++;
      }
    } else {
      if (x === cellBoard.length && y === cellBoard.length) {
        if (cellBoard[x - 1][y - 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x][y - 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x - 1][y] === 1) {
          livingCells++;
        }
      } else {
        if (x === 0 && y === cellBoard.length) {
          if (cellBoard[x + 1][y] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x + 1][y - 1] === 1) {
            livingCells++;
          }
        }
        if (x === cellBoard.length && y === 0) {
          if (cellBoard[x - 1][y + 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y + 1] === 1) {
            livingCells++;
          }
        }

        if (y === cellBoard.length) {
          if (cellBoard[x + 1][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x + 1][y] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y - 1] === 1) {
            livingCells++;
          }
        }

        if (x === 0) {
          if (cellBoard[x + 1][y + 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x + 1][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y + 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x + 1][y] === 1) {
            livingCells++;
          }
        }
        if (y === 0) {
          if (cellBoard[x + 1][y + 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x + 1][y] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y + 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y + 1] === 1) {
            livingCells++;
          }
        }

        if (x === cellBoard.length) {
          if (cellBoard[x - 1][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y + 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y + 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y - 1] === 1) {
            livingCells++;
          }
        }

        if (x === cellBoard.length && y === cellBoard.length) {
          if (cellBoard[x - 1][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x][y - 1] === 1) {
            livingCells++;
          }
          if (cellBoard[x - 1][y] === 1) {
            livingCells++;
          }
        }
        if (x === 0 && y === cellBoard.length) {
        }
        if (y === 0 && cellBoard.length) {
        }

        if (cellBoard[x + 1][y + 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x - 1][y - 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x - 1][y + 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x + 1][y - 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x][y + 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x][y - 1] === 1) {
          livingCells++;
        }
        if (cellBoard[x + 1][y] === 1) {
          livingCells++;
        }
        if (cellBoard[x - 1][y] === 1) {
          livingCells++;
        }
      }
    }
  }
}

// celula vive o muere

//
// if ((cellBoard[x] === 0 && cellBoard[y] === 0) || livingCells === 3) {
// }

// if(livingCells === 2 || livingCells === 3){

// }

// if(livingCells > 3 ) // muere
