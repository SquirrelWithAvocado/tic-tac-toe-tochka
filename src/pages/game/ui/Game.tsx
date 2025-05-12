import "./Game.css";
import Lottie from "lottie-react";
import gridAnimation from "./assets/grid.json";
import { Mark } from "../../../shared/ui/Mark/Mark";
import { useGameStatus } from "../lib/hooks/use-game-status";
import { useGameField } from "../lib/hooks/use-game-field";
import { useRandomBot } from "../lib/hooks/use-random-bot";


export function Game() {
  const [gameField, turn, onClickMarkHandler, resetGame] = useGameField();
  const gameStatus = useGameStatus(gameField);
  const gameEnded = gameStatus !== 'In Progress';
  
  useRandomBot("O", turn, gameField, onClickMarkHandler);

  return (
    <section className="game">
      <p className={`game__winner ${gameEnded ? "game__winner--show" : ""}`}>
        Победитель: {gameStatus}
      </p>
      
      <div className="game__grid-animation">
        <Lottie animationData={gridAnimation} loop={false} />
      </div>
      <div className="game__grid">
        {gameField.map((marks, rowIdx) => (
          <div className="game__row">
            {marks.map((mark, cellIdx) => (
              <Mark 
                type={mark} 
                onClick={() => onClickMarkHandler(rowIdx, cellIdx)} 
                gameStatus={gameStatus}
              />
            ))}
          </div>
        ))}
      </div>
    <button 
        aria-label="Новая игра" 
        className="game__button"
        onClick={resetGame}
      >
        <svg viewBox="0 0 19 20" width={20} height={20}>
          <use xlinkHref="#round-arrow" />
        </svg>
      </button>
    </section>
  );
}
