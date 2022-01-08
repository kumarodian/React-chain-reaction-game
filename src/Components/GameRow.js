import TableCell from "./TableCell";
const TABLE_DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const GameRow = ({ className, index, word }) => {
  const wordSplit = word.split("");
  return (
    <tr className={className} index={index}>
      {TABLE_DATA.map((val, index) => (
        <TableCell className={""} onClick={""} value={wordSplit[index]} />
      ))}
    </tr>
  );
};
export default GameRow;
