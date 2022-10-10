import { Coordinates } from './types';

export const getCoordinates = (
  gridSize: number,
): ((index: number) => Coordinates) => (index: number): Coordinates => ({
  x: index % gridSize,
  y: ~~(index / gridSize),
});

export const getIndex = (
  gridSize: number,
): ((coordinates: Coordinates) => number) => (
  coordinates: Coordinates,
): number => coordinates.y * gridSize + coordinates.x;
