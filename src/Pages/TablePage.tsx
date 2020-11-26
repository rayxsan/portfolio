import React from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import Table from "../Components/Table/Table";

const StyledTablePage = styled.div``;

const TablePage = () => (
  <StyledTablePage>
    <Card title="Basic Table">
      <Table />
    </Card>
  </StyledTablePage>
);

export default TablePage;
