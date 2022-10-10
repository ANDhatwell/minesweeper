import { getCoordinates, getIndex } from './coordinates';
import { getNeighbours } from './grid';

const minesweeper = (grid: string[]): string[] => {
  const gridSize = Math.sqrt(grid.length);
  const b = grid.map((value, index) => {
    if (value == 'X') return 'X';
    else {
      const adjacents = getNeighbours(gridSize)(
        getCoordinates(gridSize)(index),
      );

      const mineCount = adjacents
        .map((value) => grid[getIndex(gridSize)(value)])
        .filter((v) => v == 'X').length;

      return mineCount.toString();
    }
  });

  return b;
};

export default minesweeper;
