import type { GameField } from "../../model/types";

export function makeRandomMove(gameField: GameField) {
    const emptyCells: [number, number][] = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gameField[row][col] === '_') {
        emptyCells.push([row, col]);
      }
    }
  }

  if (emptyCells.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
}