import React, { useEffect, useState } from "react";
import GameRow from "../Components/GameRow";
const MAX_WORD_LENGTH = 9;
const WORD_LIST = [
  ["Credit", "Check", "Please", "Hold", "Fast", "Food"],
  ["Cocoa", "Powder", "Blue", "Moon", "Landing", "Gear"],
  ["Freezing", "Cold", "Sweat", "Shirt", "Button", "Nose"],
  ["Crushed", "Ice", "Water", "Garden", "Party", "Animal"],
];
const WORD_ROW_CLASSNAME = [
  "firstWord",
  "secondWord",
  "thirdWord",
  "fourthWord",
  "fifthWord",
  "sixthWord",
];
const AVAILABLE_ROW = [0, 1, 0, 0, 1, 0];

const Board = () => {
  const index = Math.floor(Math.random() * WORD_LIST.length);
  const [wordList, setWordList] = useState(WORD_LIST[index]);
  const [availableRow, setAvailableRow] = useState(AVAILABLE_ROW);
  console.log(wordList);

  const chainWords = {
    0: { word: "", len: "" },
    1: { word: "", len: "" },
    2: { word: "", len: "" },
    3: { word: "", len: "" },
    4: { word: "", len: "" },
    5: { word: "", len: "" },
  };

  function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return (
    <div className="row mainDisplay">
      <div className="col-md-3 col-lg-3 scoreBoard"></div>
      <div className="col-md-12 col-lg-12 displayBox">
        <table id="GameOn">
          <tbody>
            {wordList.map((word, index) => (
              <GameRow
                className={`${WORD_ROW_CLASSNAME[index]} ${
                  index > 0 && index < 5 ? "unsolved" : ""
                } ${availableRow[index] ? "availableRow" : ""}`.trim()}
                trindex={index}
                word={word}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Board;
