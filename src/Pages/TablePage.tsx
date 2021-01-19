import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Components/UI/Card/Card";
import Table from "../Components/Table/Table";
import { data1, data2 } from "../shared/tableData";
import axios from "axios";

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

interface Props {}
interface State<DataItem> {
  data: DataItem[];
}
class TablePage extends Component<Props, State<any>> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://portfolio-083-default-rtdb.firebaseio.com/userData.json")
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      });
  }

  render() {
    return (
      <StyledTablePage>
        <Card title="Basic Table">
          <Table data={data2} headers={headers} />
        </Card>
        <Card title="Pagination Table">
          <Table data={data1} showPages headers={headers} />
        </Card>
        <Card title="Table fetching from backend">
          <Table data={this.state.data} showPages />
        </Card>
      </StyledTablePage>
    );
  }
}

export default TablePage;
