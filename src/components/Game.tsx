import { MinesweeperContext } from "components/App";
import { CellProps, GameProps, RowProps } from "components/types";
import minesweeper from "game/playGame";
import { createGameBoard } from "game/setUpGame";
import React, { FC, useContext, useState } from "react";
import "./Game.css";



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

  const ctx = useContext(MinesweeperContext) 

  return (
    <>
      <h4>{ctx.gameOver.toString()}</h4>
      {minesweeperBoard.map((values, i) => (
        <Row key={i} values={values} />
      ))}
    </>
  );
};

const Row: FC<RowProps> = ({ values }) => (
  <div className="row">
    {values.map((val, i) => (
      <Cell value={val} key={i} />
    ))}
  </div>
);



const Cell: FC<CellProps> = ({ value }) => {
  const [hidden, setHidden] = useState(true);

  const {
    setGameOver 
  } = useContext(MinesweeperContext) 

  
  const handleGameOver = (isGameOver: boolean) =>{
    console.log("before", isGameOver);
    
    setGameOver(true);

    console.log("after", isGameOver);
  }


  const onClickCell = (event: React.MouseEvent) => {

    setHidden(false);
    console.log(event.currentTarget.textContent);
    
    
    if (value === "X") {
      handleGameOver(true)
    }
  };

  

  return (
    <div className="cell" data-testid="cell" onClick={onClickCell}>
      {hidden ? "" : value}
    </div>
  );
};

export default Game;
