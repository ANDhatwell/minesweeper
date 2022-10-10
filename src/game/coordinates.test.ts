import { getCoordinates, getIndex } from "game/coordinates";

describe("getcoordinates from index", () => {
  it("should always return 0,0 for corner ", () => {
    expect(getCoordinates(1)(0)).toEqual({ x: 0, y: 0 });
  });

  it("should return correct coordinates for 2*2", () => {
    const getCoordsForTwoGrid = getCoordinates(2);
    expect(getCoordsForTwoGrid(0)).toEqual({ x: 0, y: 0 });
    expect(getCoordsForTwoGrid(1)).toEqual({ x: 1, y: 0 });
    expect(getCoordsForTwoGrid(2)).toEqual({ x: 0, y: 1 });
    expect(getCoordsForTwoGrid(3)).toEqual({ x: 1, y: 1 });
  });
  it("should return correct coordinates for 3*3", () => {
    const getCoordsForThreeGrid = getCoordinates(3);
    expect(getCoordsForThreeGrid(0)).toEqual({ x: 0, y: 0 });
    expect(getCoordsForThreeGrid(1)).toEqual({ x: 1, y: 0 });
    expect(getCoordsForThreeGrid(2)).toEqual({ x: 2, y: 0 });
    expect(getCoordsForThreeGrid(3)).toEqual({ x: 0, y: 1 });
    expect(getCoordsForThreeGrid(4)).toEqual({ x: 1, y: 1 });
    expect(getCoordsForThreeGrid(5)).toEqual({ x: 2, y: 1 });
    expect(getCoordsForThreeGrid(6)).toEqual({ x: 0, y: 2 });
    expect(getCoordsForThreeGrid(7)).toEqual({ x: 1, y: 2 });
    expect(getCoordsForThreeGrid(8)).toEqual({ x: 2, y: 2 });
  });
});

describe("get index from coordinates", () => {
  it("should work for 1x1", () => {
    expect(getIndex(1)({ x: 0, y: 0 })).toEqual(0);
  });

  it("should return correct coordinates for 2*2", () => {
    const getIndexForTwoGrid = getIndex(2);
    expect(getIndexForTwoGrid({ x: 0, y: 0 })).toEqual(0);
    expect(getIndexForTwoGrid({ x: 1, y: 0 })).toEqual(1);
    expect(getIndexForTwoGrid({ x: 0, y: 1 })).toEqual(2);
    expect(getIndexForTwoGrid({ x: 1, y: 1 })).toEqual(3);
  });

  it("should return correct indices for 3*3", () => {
    const getIndexForCoordsThree = getIndex(3);
    expect(getIndexForCoordsThree({ x: 0, y: 0 })).toEqual(0);
    expect(getIndexForCoordsThree({ x: 1, y: 0 })).toEqual(1);
    expect(getIndexForCoordsThree({ x: 2, y: 0 })).toEqual(2);
    expect(getIndexForCoordsThree({ x: 0, y: 1 })).toEqual(3);
    expect(getIndexForCoordsThree({ x: 1, y: 1 })).toEqual(4);
    expect(getIndexForCoordsThree({ x: 2, y: 1 })).toEqual(5);
    expect(getIndexForCoordsThree({ x: 0, y: 2 })).toEqual(6);
    expect(getIndexForCoordsThree({ x: 1, y: 2 })).toEqual(7);
    expect(getIndexForCoordsThree({ x: 2, y: 2 })).toEqual(8);
  });
});
