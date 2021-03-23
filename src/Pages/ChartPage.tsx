import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Chart from "../Components/Elements/Charts/Chart";

const StyledChartPage = styled.div``;

const data = [
  {
    month: "Jan",
    goal: Math.floor(Math.floor(Math.random() * 1000 + 1000)),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Feb",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Mar",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Apr",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "May",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Jun",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Jul",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Aug",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Sep",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Oct",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Nov",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
  {
    month: "Dec",
    goal: Math.floor(Math.random() * 1000 + 1000),
    achieve: Math.floor(Math.random() * 1000 + 800),
  },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const ChartPage = () => {
  return (
    <StyledChartPage>
      <ContentBox title="Line Chart">
        <Chart data={data} type="Line" />
      </ContentBox>
      <ContentBox title="Bar Chart">
        <Chart data={data} type="Bar" />
      </ContentBox>
      <ContentBox title="Pie Chart">
        <Chart data={data01} type="Pie" />
      </ContentBox>
    </StyledChartPage>
  );
};

export default ChartPage;
