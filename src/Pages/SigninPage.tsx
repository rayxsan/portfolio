import React from "react";
import Signin from "../Components/Auth/SignIn/Signin";
import styled from "styled-components";

const StyledSigninPage = styled.div`
  /* display: block;
  align-items: center;
  margin: auto; */
`;

const SigninPage = () => {
  return (
    <StyledSigninPage>
      <Signin />
    </StyledSigninPage>
  );
};

export default SigninPage;
