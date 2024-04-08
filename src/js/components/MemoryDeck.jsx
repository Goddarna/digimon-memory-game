import { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import fetchData from "../api/api.js";
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

export default function MemoryDeck({ url, setScore }) {
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
  }

  // When component first mounts, fetch data from API
  useEffect(() => {
    // Create a ignore variable to only fetch data once
    let ignore = false;
    if (!ignore) {
      fetchData(url)
        .then((data) => {
          console.log("Data received", data);
          const filteredDigimon = data.filter((d) =>
            choosenDigimon.includes(d.name)
          );
          console.log("-- Digimon found", filteredDigimon);
          setDigimon(filteredDigimon);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    // Shuffle digimon if digimon data is obtained and player lost
    const newShuffle = shuffleArray(digimon);

    console.log("-- Shuffled Digimon", newShuffle);
    setShuffledDigimon(newShuffle);
  }, [digimon, clickedArray]);

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
