import "../../css/MemoryCard.css";

export default function MemoryCard({ digimon, handleClick }) {
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
