import { useState } from "react";
import TableCell from "./TableCell";

const GameRow = ({ className, trindex, word }) => {
  const [unhideClass, setUnhideClass] = useState([1, 0, 0, 0, 0, 0, 0, 0, 0]);
  const onClickCell = (event) => {
    console.log(event);
    let tmp = [...unhideClass];
    tmp.unshift(-1);
    tmp.pop();
    setUnhideClass(tmp);
  };
  const wordSplit = word.split("");
  return (
    <tr className={className} index={trindex} onClick={onClickCell}>
      {unhideClass.map((val, index) => (
        <TableCell
          key={index}
          className={`${unhideClass[index] === 1 ? "unhide" : ""} ${
            unhideClass[index] === -1 ? "unhiddenCard" : ""
          }`.trim()}
          value={wordSplit[index]}
        />
      ))}
    </tr>
  );
};
export default GameRow;
