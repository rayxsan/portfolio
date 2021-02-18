import React from "react";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Chart from "../Components/Elements/Charts/Chart";

const StyledChartPage = styled.div``;

const ChartPage = () => {
  return (
    <StyledChartPage>
      <ContentBox title="Chart">
        <Chart />
      </ContentBox>
    </StyledChartPage>
  );
};

export default ChartPage;
