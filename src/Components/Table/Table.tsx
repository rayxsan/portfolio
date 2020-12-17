import React from "react";
import { StyledTable } from "./Table.styled";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface TableProps<DataItem> {
  data: DataItem[];
  showPages?: boolean;
  sort?: boolean;
}

const Table = <T extends object>({ data, showPages, sort }: TableProps<T>) => {
  if (data.length === 0) {
    return null;
  }

  const onHeaderClick = (item: string | number) => {
    if (sort) return console.log(`"cliked":${item}`);
  };

  const tableHeader = Object.keys(data[0]).map((key) => (
    <th key={key} onClick={() => onHeaderClick(key)}>
      {key}
    </th>
  ));

  const tableBody = data.map((row, index) => {
    return (
      <tr key={index}>
        {Object.values(row).map((row: string | number) => (
          <td key={row}>{row}</td>
        ))}
      </tr>
    );
  });
  return (
    <StyledTable shrink={showPages} sort={sort}>
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
