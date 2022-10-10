import React, { FC } from 'react';
import Game from "components/Game";

const App: FC = () => {
  return (
    <div id="container">
      <h2>MINESWEEPER</h2>

      <Game size={6} />
    </div>
  );
};

export default App;
