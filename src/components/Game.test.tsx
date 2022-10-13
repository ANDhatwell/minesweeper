import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "components/Game";

describe("Minesweeper game", () => {
  it("should render correct number of cells", () => {
    render(<Game size={4} />);

    expect(screen.getAllByTestId("cell")).toHaveLength(16);
  });
});

describe("Cell", () => {
  it("should show value when clicked", () => {
    render(<Game size={3} />);
    const cell = screen.getAllByTestId("cell")[0];
    userEvent.click(cell);
    expect(screen.getByText(/x/i)).toBeTruthy();
  });
});