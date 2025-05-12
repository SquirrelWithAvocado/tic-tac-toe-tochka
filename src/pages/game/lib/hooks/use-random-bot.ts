import { useEffect } from "react";
import type { GameField, Mark } from "../../model/types";
import { makeRandomMove } from "../service/make-random-move";

export const useRandomBot = (
  botTurn: Mark,
  curTurn: Mark,
  gameField: GameField,
  newMarkHandler: (rowIdx: number, cellIdx: number) => void
) => {

  useEffect(() => {
    if (curTurn !== botTurn) {
      return;
    }
    const coords = makeRandomMove(gameField);

    if (coords) {
      newMarkHandler(...coords);
    }

  }, [curTurn]);
};
