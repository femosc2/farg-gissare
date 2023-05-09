import { useState } from "react";

import { RandomStatement } from "../../interfaces";

interface GameProps {
  statements: RandomStatement[];
}

const Game: React.FC<GameProps> = ({ statements }) => {
  const [currentStatement, setCurrentStatement] = useState<RandomStatement>(
    statements[0]
  );
  const [remainingStatements, setRemainingStatements] = useState<
    RandomStatement[]
  >(statements.slice(1));
  const [score, setScore] = useState<number>(0);
  const [guess, setGuess] = useState<string>("");

  const handleGuess = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (guess.toLowerCase() === currentStatement.color.toLowerCase()) {
      setScore(score + 1);
      setCurrentStatement(remainingStatements[0]);
      setRemainingStatements(remainingStatements.slice(1));
      setGuess("");
    } else {
      alert(`Incorrect! The answer was ${currentStatement.color}.`);
      setCurrentStatement(remainingStatements[0]);
      setRemainingStatements(remainingStatements.slice(1));
      setGuess("");
    }
  };

  return (
    <div>
      <h1>Guess the Color Game</h1>
      <p>Score: {score}</p>
      <p>
        {currentStatement.statement.replace(currentStatement.color, "______")}
      </p>
      <form onSubmit={handleGuess}>
        <input
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
        />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
};

export default Game;
