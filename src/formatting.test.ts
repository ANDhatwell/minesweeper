import { formatGameOver } from "formatting";

describe("formatting", () => {
  describe("gameOver", () => {
    it("should format when game is over", () => {
      expect(formatGameOver(true)).toBe("Oh no!! Game over!!");
    });
    it("should format when game not over", () => {
      expect(formatGameOver(false)).toBe("Can you find the mines?");
    });
  });
});
