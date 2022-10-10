import { render, screen } from "@testing-library/react";
import Game from "components/Game";

describe("Minesweeper game", () => {
  it("should render correct number of cells", () => {
    render(<Game size={4} />);

    expect(screen.getAllByTestId("cell")).toHaveLength(16);
  });
});
