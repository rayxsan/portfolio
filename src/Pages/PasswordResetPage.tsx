import React from "react";
import PasswordReset from "../Components/Auth/PasswordReset/PasswordReset";
import styled from "styled-components";

const StyledPasswordResetPage = styled.div`
  margin-top: 10vh;
`;

const PasswordResetPage = () => {
  return (
    <StyledPasswordResetPage>
      <PasswordReset />
    </StyledPasswordResetPage>
  );
};

export default PasswordResetPage;
