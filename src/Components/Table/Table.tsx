import React, { Component } from "react";
import StyledTable from "./Table.styled";

interface TableProps {
  header?: any[];
  body?: any[];
}
let rows = ["Setting One", "Setting Two", "Setting Three", "Setting Four"];
class Table extends Component<TableProps> {
  createTable = () => {
    let table = [];
    for (let i = 0; i < rows.length; i++) {
      let children = [];
      children.push(<td>{rows[i]}</td>, <td>ListMEnu</td>);
      table.push(<tr>{children}</tr>);
    }
    return table;
  };
  render() {
    return <StyledTable>{this.createTable()}</StyledTable>;
  }
}

export default Table;
