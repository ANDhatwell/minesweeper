import { createGrid } from './grid';

const shuffle = (array: string[]) =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  array.sort((_a: string, b: string) => 0.5 - Math.random());

const mine = (grid: string[]): string[] => {
  const minedGrid = grid.slice();
  minedGrid[0] = 'X';
  minedGrid[1] = 'X';

  return shuffle(minedGrid);
};

export const createGameBoard = (size: number): string[] =>
  mine(createGrid(size));
