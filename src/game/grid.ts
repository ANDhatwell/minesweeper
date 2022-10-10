import { Coordinates } from './types';

export const createGrid = (dimension: number): string[] =>
  Array(dimension * dimension).fill('-');

export const isCorner = (
  gridSize: number,
): ((coordinates: Coordinates) => boolean) => (
  coordinates: Coordinates,
): boolean => {
  const dimension = gridSize - 1;

  return [
    { x: 0, y: 0 },
    { x: 0, y: dimension },
    { x: dimension, y: 0 },
    { x: dimension, y: dimension },
  ].some((corner) => JSON.stringify(corner) == JSON.stringify(coordinates));
};

export const isEdge = (
  gridSize: number,
): ((coordinates: Coordinates) => boolean) => (
  coordinates: Coordinates,
): boolean => {
  const dimension = gridSize - 1;

  if (isCorner(gridSize)(coordinates)) return false;
  return (
    Object.values(coordinates).filter((val) => val == 0 || val == dimension)
      .length !== 0
  );
};

export const getNeighbours = (
  gridSize: number,
): ((coordinates: Coordinates) => Coordinates[]) => (
  coordinates: Coordinates,
): Coordinates[] => {
  const { x, y } = coordinates;

  return [
    { x: x - 1, y: y - 1 },
    { x: x - 1, y },
    { x: x - 1, y: y + 1 },
    { x, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x + 1, y },
    { x: x + 1, y: y + 1 },
    { x, y: y + 1 },
  ].filter((coords) => isInGrid(gridSize)(coords));
};

export const isInGrid = (
  gridSize: number,
): ((coordinates: Coordinates) => boolean) => (
  coordinates: Coordinates,
): boolean =>
  Object.values(coordinates).every(
    (value) => value >= 0 && value <= gridSize - 1,
  );
