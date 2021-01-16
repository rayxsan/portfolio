import React, { useState } from "react";
import { StyledTable, StyledPagination } from "./Table.styled";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

//TODO : use custom dropdown Menu

interface TableProps<DataItem> {
  data: DataItem[];
  showPages?: boolean;
  sort?: boolean;
  headers?: {
    [key: string]: string;
  };
}

const Table = <T extends object>({
  data,
  showPages,
  headers,
}: TableProps<T>) => {
  const [offset, setoffset] = useState(0);
  const [rowLength, setrowLength] = useState(showPages ? 5 : data.length);

  if (data.length === 0) {
    return null;
  }

  // const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setoffset(0);
  //   setrowLength(parseInt(event.target.value));
  // };

  // const onHeaderClick = (item: string | number) => {
  //   if (sort) return console.log(`"cliked":${item}`);
  // };

  let endIndex = offset + rowLength;
  const dataToDisplay = data.slice(offset, endIndex);

  const goNextPage = () => {
    if (endIndex < data.length) setoffset(Math.min(endIndex, data.length));
  };

  const goPrevPage = () => {
    setoffset(Math.max(offset - rowLength, 0));
  };

  const tableHeader = Object.keys(data[0]).map((key) => {
    const prettyKey = (headers && headers[key]) || key;

    return <th key={key}>{prettyKey}</th>;
  });

  const tableBody = dataToDisplay.map((row, index) => {
    return (
      <tr key={index}>
        {Object.values(row).map((row: string | number) => (
          <td key={row}>{row}</td>
        ))}
      </tr>
    );
  });
  const options = [
    { key: 5, value: 5, text: "5" },
    { key: 10, value: 10, text: "10" },
    { key: 15, value: 15, text: "15" },
    { key: 20, value: 20, text: "20" },
  ];

  const pagination = (
    <StyledPagination shrink={showPages}>
      <p>Rows per page:</p>
      <Dropdown
        options={options}
        onChange={(value) => {
          setoffset(0);
          setrowLength(parseInt(value.toString()));
        }}
      />
      <div>
        <p>
          {offset + 1}-{endIndex} of {data.length}
        </p>
      </div>
      <Button disabled={offset === 0} clicked={goPrevPage} text circular>
        <FaChevronLeft />
      </Button>
      <Button
        disabled={endIndex >= data.length}
        clicked={goNextPage}
        text
        circular
      >
        <FaChevronRight />
      </Button>
    </StyledPagination>
  );

  return (
    <StyledTable>
      <table>
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
      {pagination}
    </StyledTable>
  );
};

export default Table;
