import React from "react";
import styled from "styled-components";
import Progress from "../Components/Progress/Progress";

const StyledProgressPage = styled.div``;

const ProgressPage = () => (
  <StyledProgressPage>
    <div>
      <p>Circular Progress</p>
      <Progress primary />
      <Progress secondary />
      <Progress />
    </div>
  </StyledProgressPage>
);
export default ProgressPage;
