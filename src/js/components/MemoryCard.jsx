import PropTypes from "prop-types";

import "../../css/MemoryCard.css";

function MemoryCard({ digimon, handleClick }) {
  return (
    <div
      className="memory-card"
      onClick={() => {
        handleClick(digimon.name);
      }}
    >
      <img src={digimon.img} />
      <p>{digimon.name}</p>
    </div>
  );
}

MemoryCard.propTypes = {
  digimon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MemoryCard;
