import React from "react";
import styled from "styled-components";
import * as theme from "../../shared/Theme";

const StyledHeader = styled.div`
  position: sticky;
  width: 100%;
  height: 30px;
  top: 0;
  padding-top: 15px;
  background-color: ${theme.BACKGROUND_COLOR};
  text-align: center;
  color: ${theme.COLOR_PRIMARY};
`;

const Header = () => {
  return (
    <>
      <StyledHeader>THIS IS THE HEADER</StyledHeader>
    </>
  );
};

export default Header;
