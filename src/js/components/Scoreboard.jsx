import PropTypes from "prop-types";

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="score-board">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

Scoreboard.defaultProps = {
  currentScore: 0,
  bestScore: 0,
};

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

export default Scoreboard;
