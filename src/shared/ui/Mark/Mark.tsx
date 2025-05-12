import './Mark.css';
import Lottie from "lottie-react";
import ovalAnimation from "./assets/oval.json";
import crossAnimation from "./assets/cross.json";
import type { GameStatus } from '../../../pages/game/model/types';

type MarkProps = {
  type: 'O' | 'X' | '_';
  onClick: () => void;
  gameStatus: GameStatus;
};

export function Mark({ type, onClick, gameStatus }: MarkProps) {
  const isChosen = type !== '_';
  const markAnimation = type === "O" ? ovalAnimation : crossAnimation;

  return (
    <div className="mark">
      {
        isChosen &&
          <div className="mark__animation">
            <Lottie animationData={markAnimation} loop={false}/>
          </div>
      }
      <button 
        className="mark__button"
        disabled={isChosen || gameStatus !== 'In Progress'}
        onClick={onClick}
      > 
      </button>
    </div>
  );
}
