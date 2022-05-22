// const cellBoard = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0],
// ];
// const cellBoardClone = cellBoard.map((cellBoard) => [...cellBoard]);

// let livingCells = 0;
// export function gameOfLive(array, array2) {
//   for (let x = 0; x < cellBoard.length; x++) {
//     for (let y = 0; y < cellBoard.length; y++) {
//       if (x === 0 && y === 0) {
//         if (array[x][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y] === 1) {
//           livingCells++;
//         }
//       } else if (x === 0 && y < array.length && y !== 0) {
//         if (array[x][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y + 1] === 1) {
//           livingCells++;
//         }
//       } else if (x === 0 && y === array[x].length) {
//         if (array[x][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y - 1] === 1) {
//           livingCells++;
//         }
//       } else if (x === array.length - 1 && y === 0) {
//         if (array[x][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y] === 1) {
//           livingCells++;
//         }
//       } else if (x === array.length - 1 && y < array[x].length && y !== 0) {
//         if (array[x][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y + 1] === 1) {
//           livingCells++;
//         }
//       } else if (x === array.length && y === array[x].length) {
//         if (array[x][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y - 1] === 1) {
//           livingCells++;
//         }
//       } else {
//         if (array[x][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y - 1] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x - 1][y + 1] === 1) {
//           livingCells++;
//         }
//         if (array[x + 1][y - 1] === 1) {
//           livingCells++;
//         }
//       }
//       if (livingCells < 2 || livingCells > 3) {
//         array2[x][y] = 0;
//       }
//       if ((livingCells === 2 && livingCells === 3) || livingCells === 3) {
//         array2[x][y] = 1;
//       }
//       livingCells = 0;
//     }
//   }
//   return array2;
// }

// console.log(cellBoard);
// console.log(gameOfLive(cellBoard, cellBoardClone));

function RamdonArray(rows, cols) {
  const board = new Array(rows);
  for (let i = 0; i < rows; i++) {
    board[i] = new Array(cols);
    for (let j = 0; j < cols; j++) {
      board[i][j] = Math.round(Math.random());
    }
  }
  return board;
}
console.log(RamdonArray(5, 5));
