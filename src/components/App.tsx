import React, { FC, createContext, useState } from "react";

import Game from "components/Game";

interface IMinesweeperContext {
  gameOver: boolean;
  setGameOver: (gameOver: boolean) => void;
}

export const MinesweeperContext = createContext<IMinesweeperContext | null>(
  null
);

const App: FC = () => {
  const [gameOver, setGameOver] = useState(false);
  const minesweeperContextValue: IMinesweeperContext = {
    gameOver,
    setGameOver,
  };
  return (
    <MinesweeperContext.Provider value={minesweeperContextValue}>
      <div id="container">
        <h2>MINESWEEPER</h2>

        <Game size={6} />
      </div>
    </MinesweeperContext.Provider>
  );
};

export default App;
