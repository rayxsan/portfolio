import React, { Component } from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Table from "../Components/Elements/Table/Table";
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
  errMsg: string;
}
class TablePage extends Component<Props, State<any>> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      errMsg: "",
    };
  }

  async getData() {
    try {
      // fetch data from a url endpoint
      const response = await axios.get(
        "https://portfolio-083-default-rtdb.firebaseio.com/userData.json"
      );
      const data = await response.data;
      this.setState({ ...this.state, data: data });
    } catch (error) {
      this.setState({
        ...this.state,
        errMsg: "Error fetching table from backend.",
      });
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <StyledTablePage>
        <ContentBox title="Basic Table">
          <Table data={data2} headers={headers} />
        </ContentBox>
        <ContentBox title="Pagination Table">
          <Table data={data1} showPages headers={headers} />
        </ContentBox>
        <ContentBox title="Table fetching from backend">
          <Table data={this.state.data} showPages />
          {this.state.errMsg && (
            <div style={{ color: "red" }}> {this.state.errMsg} </div>
          )}
        </ContentBox>
      </StyledTablePage>
    );
  }
}

export default TablePage;
