import React, { Component } from "react";
import { StyledTable } from "./Table.styled";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface TableProps {
  header: (string | number)[];
  rows: (string | number)[][];
  shrink?: boolean;
}

interface State {
  min: number;
  max: number;
}
class Table extends Component<TableProps, State> {
  constructor(props: TableProps) {
    super(props);
    this.state = { min: 0, max: this.props.rows.length };
  }

  handleRowsIncrease() {
    if (this.props.shrink) this.setState({ min: 0, max: 5 });
  }

  render() {
    const tableHeader = this.props.header!.map((head, index) => {
      return <th key={index}>{head}</th>;
    });

    const rows = this.props.rows.slice(5, 10);

    const tableBody = rows.map((row, index) => {
      return (
        <tr key={index}>
          {row.map((row, index) => (
            <td key={index}>{row}</td>
          ))}
        </tr>
      );
    });

    return (
      <StyledTable shrink={this.props.shrink}>
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
          <FaChevronLeft onClick={this.handleRowsIncrease} />
          <FaChevronRight onClick={this.handleRowsIncrease} />
        </div>
      </StyledTable>
    );
  }
}

export default Table;
