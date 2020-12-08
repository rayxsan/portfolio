import React, { Component } from "react";
import StyledTable from "./Table.styled";

interface TableProps {
  header?: (string | number)[];
  rows?: (string | number)[][];
  numberOfRows?: number;
}

class Table extends Component<TableProps> {
  renderTableHeader() {
    const header = this.props.header;
    if (header) {
      const headings = header.map((head) => <th>{head}</th>);

      return headings;
    }
  }

  renderTableBody() {
    const rows = this.props.rows;
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
      <StyledTable>
        <table>
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableBody()}</tbody>
        </table>
        <div>testing</div>
      </StyledTable>
    );
  }
}

export default Table;
