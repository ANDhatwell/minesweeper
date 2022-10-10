import { createGameBoard } from './setUpGame';

describe('create game board', () => {
  it('sets up a 3x3 game', () => {
    expect(createGameBoard(3)).toHaveLength(9);
    expect(createGameBoard(3).filter((v: string) => v === 'X')).toHaveLength(2);
  });
});
