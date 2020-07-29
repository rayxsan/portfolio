import React from "react";
import styled from "styled-components";
import * as theme from "../../shared/Theme";

const StyledHeader = styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: ${theme.BACKGROUND_COLOR};
  text-align: center;
  color: ${theme.COLOR_PRIMARY};
  z-index: 10;
`;

const Footer = () => {
  return (
    <>
      <StyledHeader>THIS IS THE FOOTER</StyledHeader>
    </>
  );
};

export default Footer;
