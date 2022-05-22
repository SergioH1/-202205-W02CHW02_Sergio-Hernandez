import { ramdonCellBoard } from './RamdonCellBoard.js';
export function gameOfLive(array) {
  const cellBoardClone = array.map((array) => [...array]);
  let livingCells = 0;
  for (let x = 0; x < cellBoardClone.length; x++) {
    for (let y = 0; y < cellBoardClone.length; y++) {
      if (x === 0 && y === 0) {
        if (array[x][y + 1] === 1) {
          livingCells++;
        }
        if (array[x + 1][y + 1] === 1) {
          livingCells++;
        }
        if (array[x + 1][y] === 1) {
          livingCells++;
        }
      } else if (x === 0 && y < array.length && y !== 0) {
        if (array[x][y - 1] === 1) {
          livingCells++;
        }
        if (array[x][y + 1] === 1) {
          livingCells++;
        }
        if (array[x + 1][y] === 1) {
          livingCells++;
        }
        if (array[x + 1][y - 1] === 1) {
          livingCells++;
        }
        if (array[x + 1][y + 1] === 1) {
          livingCells++;
        }
      } else if (x === array.length - 1 && y === 0) {
        if (array[x][y + 1] === 1) {
          livingCells++;
        }
        if (array[x - 1][y + 1] === 1) {
          livingCells++;
        }
        if (array[x - 1][y] === 1) {
          livingCells++;
        }
      } else if (x === array.length - 1 && y < array[x].length && y !== 0) {
        if (array[x][y - 1] === 1) {
          livingCells++;
        }
        if (array[x][y + 1] === 1) {
          livingCells++;
        }
        if (array[x - 1][y] === 1) {
          livingCells++;
        }
        if (array[x - 1][y - 1] === 1) {
          livingCells++;
        }
        if (array[x - 1][y + 1] === 1) {
          livingCells++;
        }
      } else {
        if (array[x][y - 1] === 1) {
          livingCells++;
        }
        if (array[x][y + 1] === 1) {
          livingCells++;
        }
        if (array[x - 1][y] === 1) {
          livingCells++;
        }
        if (array[x + 1][y] === 1) {
          livingCells++;
        }
        if (array[x - 1][y - 1] === 1) {
          livingCells++;
        }
        if (array[x + 1][y + 1] === 1) {
          livingCells++;
        }
        if (array[x - 1][y + 1] === 1) {
          livingCells++;
        }
        if (array[x + 1][y - 1] === 1) {
          livingCells++;
        }
      }
      if (livingCells < 2 || livingCells > 3) {
        cellBoardClone[x][y] = 0;
      }
      if ((livingCells === 2 && livingCells === 3) || livingCells === 3) {
        cellBoardClone[x][y] = 1;
      }
      livingCells = 0;
    }
  }
  return cellBoardClone;
}
