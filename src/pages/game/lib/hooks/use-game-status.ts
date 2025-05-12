import { useEffect, useState } from "react";
import type { GameField, GameStatus } from "../../model/types";
import { checkGameEnd } from "../service/check-game-end";

export const useGameStatus = (gameField: GameField) => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("In Progress");

  useEffect(() => {
    setGameStatus(checkGameEnd(gameField));
  }, [gameField]);

  return gameStatus;
};
