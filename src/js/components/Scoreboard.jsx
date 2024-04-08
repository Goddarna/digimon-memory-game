export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="score-board">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}
