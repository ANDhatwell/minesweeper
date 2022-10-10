import minesweeper from './playGame';

describe('minesweeper', () => {
  it('can transform 2x2 board', () => {
    expect(minesweeper(['-', '-', '-', 'X'])).toEqual(['1', '1', '1', 'X']);
  });
  it('can transform 5x5 board', () => {
    expect(
      minesweeper([
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        'X',
        'X',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        '-',
        'X',
      ]),
    ).toEqual([
      '0',
      '0',
      '0',
      '0',
      '0',
      '2',
      '2',
      '1',
      '0',
      '0',
      'X',
      'X',
      '1',
      '0',
      '0',
      '2',
      '2',
      '1',
      '1',
      '1',
      '0',
      '0',
      '0',
      '1',
      'X',
    ]);
  });
});
