import React from "react";
import styled from "styled-components";

const StyledHeader = styled.footer`
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5rem;
  background-color: ${({ theme }) => theme.solidBackground};
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
  z-index: 10;
`;

const Footer = () => {
  return <StyledHeader>THIS IS THE FOOTER</StyledHeader>;
};

export default Footer;
