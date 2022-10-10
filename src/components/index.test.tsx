import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Minesweeper', () => {
  it('should load a game of minesweeper', () => {
    render(<App />);
    expect(screen.getByText(/minesweeper/i)).toBeTruthy();
  });
});
