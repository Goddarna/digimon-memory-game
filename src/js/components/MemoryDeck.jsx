import { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard.jsx";
import PropTypes from "prop-types";

import "../../css/MemoryDeck.css";
import shuffleArray from "../utils/shuffleArray.js";

const choosenDigimon = [
  "Numemon",
  "Agumon",
  "Gabumon",
  "Greymon",
  "Patamon",
  "Palmon",
  "Biyomon",
  "Penguinmon",
];

function MemoryDeck({
  url = "https://digimon-api.vercel.app/api/digimon",
  setScore,
}) {
  const [digimon, setDigimon] = useState([]);
  const [shuffledDigimon, setShuffledDigimon] = useState([]);
  const [clickedArray, setClickedArray] = useState([]);

  function handleClick(id) {
    // Check if id is already in array
    // If found, reset game
    // if not found, add id to array and carry on
    if (clickedArray.includes(id)) {
      console.log("Game over, digimon already clicked");
      setClickedArray([]);
      setScore(0);
    } else {
      setClickedArray((prev) => [...prev, id]);
      console.log("Woop, not been clicked yet");
      setScore(clickedArray.length + 1);
    }

    shuffleDigimon(digimon);
  }

  function shuffleDigimon(toShuffle) {
    const newShuffle = shuffleArray(toShuffle);

    console.log("-- Shuffled Digimon", newShuffle);
    setShuffledDigimon(newShuffle);
  }

  // When component first mounts, fetch data from API
  useEffect(() => {
    const fetchDigimon = async (endpoint) => {
      try {
        console.log("bob", endpoint);
        const response = await fetch(endpoint);
        const data = await response.json();

        console.log("Data received", data);
        const filteredDigimon = data.filter((d) =>
          choosenDigimon.includes(d.name)
        );
        console.log("-- Digimon found", filteredDigimon);
        setDigimon(filteredDigimon);
        shuffleDigimon(filteredDigimon);
      } catch (err) {
        console.log("hi", err);
      }
    };
    fetchDigimon(url);
  }, []);

  return (
    <div className="memory-card__container">
      {shuffledDigimon !== undefined &&
        shuffledDigimon.map((digimon) => {
          return (
            <MemoryCard
              key={digimon.name}
              digimon={digimon}
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
}

MemoryDeck.defaultProps = {
  url: "https://digimon-api.vercel.app/api/digimon",
};

MemoryDeck.propTypes = {
  url: PropTypes.string.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default MemoryDeck;
