import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  position: sticky;
  width: 100%;
  text-align: center;
  line-height: ${({ theme }) => theme.headerHeight};
  top: 0;
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.solidBackground};
  color: ${({ theme }) => theme.fontColor};
  z-index: 5;
`;

interface Props {}

const Header: FunctionComponent<Props> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
