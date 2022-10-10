import minesweeper from "game/playGame";
import { createGameBoard } from "game/setUpGame";
import React, { FC } from "react";
import "./Game.css";

type GameProps = { size: number };

const Game: FC<GameProps> = ({ size }) => {
  const grid = createGameBoard(size);
  const board = minesweeper(grid);

  let minesweeperBoard: string[][] = Array(size)
    .fill("c")
    .map((num) => []);
  minesweeperBoard.forEach((val, i) => {
    for (let col = 0; col < size; col++) {
      const value = board.pop();
      val.push(value!);
    }
  });

  return (
    <>
      {minesweeperBoard.map((values, i) => (
        <Row key={i} values={values} />
      ))}
    </>
  );
};

type RowProps = { values: string[] };

const Row: FC<RowProps> = ({ values }) => (
  <div className="row">
    {values.map((val, i) => (
      <Cell value={val} key={i} />
    ))}
  </div>
);

type CellProps = { value: string };

const Cell: FC<CellProps> = ({ value }) => (
  <div data-testid="cell" className="cell">
    {value}
  </div>
);

export default Game;
