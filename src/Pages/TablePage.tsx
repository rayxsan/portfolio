import React from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import Table from "../Components/Table/Table";
import { data1, data2 } from "../shared/tableData";

const StyledTablePage = styled.div``;

const headers = {
  id: "ID",
  first_name: "First Name",
  last_name: "Last Name",
  email: "Email",
  gender: "Gender",
  ip_address: "IP Address",
  job_title: "Job Title",
  university: "University",
};

const TablePage = () => (
  <StyledTablePage>
    <Card title="Basic Table">
      <Table data={data2} headers={headers} />
    </Card>
    <Card title="Pagination Table">
      <Table data={data1} showPages headers={headers} />
    </Card>
  </StyledTablePage>
);

export default TablePage;
