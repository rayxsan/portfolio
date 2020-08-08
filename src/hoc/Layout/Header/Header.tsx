import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  position: sticky;
  width: 100%;
  height: 2rem;
  top: 0;
  padding-top: 15px;
  background-color: ${({ theme }) => theme.solidBackground};
  text-align: center;
  color: ${({ theme }) => theme.primaryColor};
  z-index: 5;
`;

const Header = () => {
  return <StyledHeader>THIS IS THE HEADER</StyledHeader>;
};

export default Header;
