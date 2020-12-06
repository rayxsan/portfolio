import React, { Component } from "react";
import StyledTable from "./Table.styled";

interface TableProps {
  header?: any[];
  rows?: any[][];
}
let rows = ["Setting One", "Setting Two", "Setting Three", "Setting Four"];
class Table extends Component<TableProps> {
  renderTableHeader() {
    const header = this.props.header;
    const headings = header!.map((head) => <th>{head}</th>);
    return <tr>{headings}</tr>;
  }

  renderTableBody() {
    const rows = this.props.rows;
    const tbody = rows!.map((row) => {
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
  render() {
    return (
      <StyledTable>
        <thead>{this.renderTableHeader()}</thead>
        <tbody>{this.renderTableBody()}</tbody>
      </StyledTable>
    );
  }
}

export default Table;
