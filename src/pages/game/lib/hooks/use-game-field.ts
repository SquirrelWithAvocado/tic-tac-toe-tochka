import { useState } from "react";
import type { GameField, Mark } from "../../model/types";

const gameInitialState: GameField = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

export const useGameField = (): [
    GameField, Mark, 
    (rowIdx: number, cellIdx: number) => void,
    () => void,
] => {
  const [turn, setTurn] = useState<Mark>("X");
  const [gameField, setGameField] = useState(gameInitialState);

  function onClickMarkHandler(rowIdx: number, cellIdx: number) {
    setGameField((prev) => {
      return prev.map((row, curRowIdx) => {
        if (curRowIdx === rowIdx) {
          return row.map((cell, curCellIdx) =>
            curCellIdx === cellIdx ? turn : cell
          );
        }
        return row.map((cell) => cell);
      });
    });

    setTurn(turn === "X" ? "O" : "X");
  }

  function resetGame() {
    setGameField(gameInitialState);
  }

  return [gameField, turn, onClickMarkHandler, resetGame]
};
