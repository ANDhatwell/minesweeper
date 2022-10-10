import { createGrid, getNeighbours, isCorner, isEdge, isInGrid } from './grid';

describe('create grid', () => {
  it('creates 3x3 grid of correct size', () => {
    expect(createGrid(3)).toHaveLength(9);
  });
  it('creates 10x10 grid of correct size', () => {
    expect(createGrid(10)).toHaveLength(100);
  });
});

describe(' position checking', () => {
  it('knows if coordinates are corner', () => {
    expect(isCorner(3)({ x: 0, y: 0 })).toBe(true);
    expect(isCorner(3)({ x: 0, y: 2 })).toBe(true);
    expect(isCorner(3)({ x: 0, y: 0 })).toBe(true);
    expect(isCorner(3)({ x: 2, y: 2 })).toBe(true);
  });
  it('knows if coordinates are not corner', () => {
    expect(isCorner(3)({ x: 0, y: 1 })).toBe(false);
  });

  it('knows if coordinates is edge', () => {
    expect(isEdge(3)({ x: 1, y: 0 })).toBe(true);
  });
  it('knows if coordinates is not edge', () => {
    expect(isEdge(3)({ x: 1, y: 1 })).toBe(false);
  });
  it('knows a corner is not an edge', () => {
    expect(isEdge(3)({ x: 0, y: 0 })).toBe(false);
  });
});

describe('getNeighbours', () => {
  it('gets neighbours for a corner', () => {
    const expected = [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ];
    expect(getNeighbours(3)({ x: 0, y: 0 })).toHaveLength(expected.length);
    getNeighbours(3)({ x: 0, y: 0 }).every((item) => expected.includes(item));
    // expect(getNeighbours(3)({ x: 0, y: 0 })).toEqual([
    //   { x: 1, y: 0 },
    //   { x: 0, y: 1 },
    //   { x: 1, y: 1 },
    // ]);
  });

  it('gets neighbours for an edge', () => {
    expect(getNeighbours(3)({ x: 1, y: 0 })).toHaveLength(5);
  });
  it('gets neighbours for an inside', () => {
    expect(getNeighbours(3)({ x: 1, y: 1 })).toHaveLength(8);
  });
});

describe('isWithinGrid', () => {
  it('knows if a coordinate value is inside a grid', () => {
    expect(isInGrid(3)({ x: 1, y: 2 })).toBe(true);
  });
  it('knows if a number is not inside a grid', () => {
    expect(isInGrid(3)({ x: -1, y: 2 })).toBe(false);
  });
});
