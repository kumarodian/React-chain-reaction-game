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

const Board = () => {
  const index = Math.floor(Math.random() * WORD_LIST.length);

  const [wordList, setWordList] = useState(WORD_LIST[index]);

  console.log(wordList);

  const chainWords = {
    0: { word: "", len: "" },
    1: { word: "", len: "" },
    2: { word: "", len: "" },
    3: { word: "", len: "" },
    4: { word: "", len: "" },
    5: { word: "", len: "" },
  };

  const FillFirstLastRow = () => {
    // setSixthWord(wordSplit(list[0][5]));
    //let firstRowAlphabet = wordSplit(list[0][0]);
    //let sixthRowAlphabet = wordSplit(list[0][5]);
    let tmp = [];
    for (let i = 0; i < MAX_WORD_LENGTH; i++) {
      /* tmp.push(
        firstRowAlphabet[i] ? `<td>${firstRowAlphabet[i]}</td>` : `<td></td>`
      ); */
      tmp.push(<td>S</td>);
    }
    console.log(tmp);
    //console.log(firstWord);
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
                className={WORD_ROW_CLASSNAME[index]}
                index={index}
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
