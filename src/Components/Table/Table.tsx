import React, { Component } from "react";
import StyledTable from "./Table.styled";

interface TableProps {
  header: any[];
  body: any[];
}

class Table extends Component<TableProps> {
  render() {
    return <StyledTable>Table</StyledTable>;
  }
}

export default Table;
