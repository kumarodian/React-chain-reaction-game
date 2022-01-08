const TableCell = ({ className, onClick, value }) => {
  return (
    <td className={className} onClick={onClick}>
      {value}
    </td>
  );
};

export default TableCell;
