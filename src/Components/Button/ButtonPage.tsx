import React from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledButtonPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ButtonPage = () => {
  return (
    <StyledButtonPage>
      <Button size="2rem" color="red">
        Default
      </Button>
    </StyledButtonPage>
  );
};

export default ButtonPage;
