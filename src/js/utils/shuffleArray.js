export default function shuffleArray(array) {
  // If not array or array is empty, return undefined
  if (!Array.isArray(array) || array.length == 0) {
    return undefined;
  }

  let newArray = [...array];
  // Knuth Shuffle  or Fisher-Yates algorithm
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
