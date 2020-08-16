import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Progress from "../Components/Progress/Progress";

const StyledProgressPage = styled.div``;

const ProgressPage = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <>
      <StyledProgressPage>
        <div>
          <p>Circular Progress (Indeterminate)</p>
          <Progress circular primary />
          <Progress circular secondary />
          <Progress circular />
        </div>
        <div>
          <p>Linear Progress</p>
          <Progress linear primary completed={completed} />
          <Progress linear secondary completed={completed} />
          <Progress linear completed={80} />
        </div>
      </StyledProgressPage>
    </>
  );
};
export default ProgressPage;
