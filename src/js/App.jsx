import { useState } from "react";

import "../css/App.css";

import MemoryDeck from "./components/MemoryDeck.jsx";
import Scoreboard from "./components/Scoreboard.jsx";

function App() {
  const digimonUrl = "https://digimon-api.vercel.app/api/digimon";
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const setScore = (score) => {
    // Set current score
    setCurrentScore(score);
    // If current score is higher than best score, set best score
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  return (
    <>
      <h1 className="font-pixeligivolve">Digimon Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <MemoryDeck url={digimonUrl} setScore={setScore} />
    </>
  );
}

export default App;
