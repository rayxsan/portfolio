import React, { Component } from "react";
import { StyledTable } from "./Table.styled";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

interface TableProps {
  header?: (string | number)[];
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
    this.setState({ min: 0, max: 5 });
  }

  renderTableHeader() {
    const header = this.props.header;
    if (header) {
      const headings = header.map((head) => <th>{head}</th>);

      return headings;
    }
  }

  renderTableBody() {
    const rows = this.props.rows.slice(this.state.min, this.state.max);
    if (rows) {
      const tbody = rows.map((row) => {
        return (
          <tr>
            {row.map((row) => (
              <td>{row}</td>
            ))}
          </tr>
        );
      });
      return tbody;
    }
  }
  render() {
    return (
      <StyledTable shrink={this.props.shrink}>
        <table>
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableBody()}</tbody>
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
