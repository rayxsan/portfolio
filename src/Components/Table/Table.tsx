import React from "react";
import { StyledTable } from "./Table.styled";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface TableProps<DataItem> {
  data: DataItem[];
  showPages?: boolean;
}

const Table = <T extends object>({ data, showPages }: TableProps<T>) => {
  if (data.length === 0) {
    return null;
  }

  const tableHeader = Object.keys(data[0]).map((key) => (
    <th key={key}>{key}</th>
  ));

  const tableBody = data.map((row, index) => {
    return (
      <tr key={index}>
        {Object.values(row).map((row) => (
          <td key={row}>{row}</td>
        ))}
      </tr>
    );
  });
  return (
    <StyledTable shrink={showPages}>
      <table>
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
      <div>
        <label>Rows per page:</label>
        <select>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <FaChevronLeft />
        <FaChevronRight />
      </div>
    </StyledTable>
  );
};

export default Table;
