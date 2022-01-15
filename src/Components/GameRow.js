import { useState } from "react";
import TableCell from "./TableCell";

const GameRow = ({ className, trindex, word, isRowAvailable }) => {
  const [unhideClass, setUnhideClass] = useState([1, 0, 0, 0, 0, 0, 0, 0, 0]); // -1=cell visible, 1=current invisible, 0=invisible
  const onClickCell = (event) => {
    let currentIndex = unhideClass.indexOf(1);
    if (isRowAvailable && currentIndex < word.length - 1) {
      let tmp = [...unhideClass];
      tmp.unshift(-1);
      tmp.pop();
      setUnhideClass(tmp);
    } else if (currentIndex === word.length - 1) {
      let tmp = [...unhideClass];
      tmp[currentIndex] = "x";

      setUnhideClass(tmp);
    }
    console.log(unhideClass);
  };
  const wordSplit = word.split("");
  return (
    <tr className={className} index={trindex} onClick={onClickCell}>
      {unhideClass.map((val, index) => (
        <TableCell
          key={index}
          className={`
          ${unhideClass[index] === 1 ? "unhide" : ""} 
          ${unhideClass[index] === -1 ? "unhiddenCard" : ""} 
          ${unhideClass[index] === "?" ? "lastBox" : ""}
          ${unhideClass[index] === "x" ? "noValue" : ""}
          `.trim()}
          value={wordSplit[index]}
        />
      ))}
    </tr>
  );
};
export default GameRow;
