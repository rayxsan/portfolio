import React from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import Table from "../Components/Table/Table";
import dataTable from "../shared/tableData";

const StyledTablePage = styled.div``;

const TablePage = () => (
  <StyledTablePage>
    <Card title="Basic Table">
      <Table data={dataTable} showPages />
    </Card>
  </StyledTablePage>
);

export default TablePage;
