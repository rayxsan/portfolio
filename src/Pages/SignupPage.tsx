import React from "react";
import Signup from "../Components/Auth/Signup/Signup";
import styled from "styled-components";

const StyledSignupPage = styled.div`
  margin-top: 10vh;
`;

const SignupPage = () => {
  return (
    <StyledSignupPage>
      <Signup />
    </StyledSignupPage>
  );
};

export default SignupPage;
