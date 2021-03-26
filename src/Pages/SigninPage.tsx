import React from "react";
import Signin from "../Components/Auth/SignIn/Signin";
import styled from "styled-components";

const StyledSigninPage = styled.div`
  margin-top: 10vh;
`;

const SigninPage = () => {
  return (
    <StyledSigninPage>
      <Signin />
    </StyledSigninPage>
  );
};

export default SigninPage;
