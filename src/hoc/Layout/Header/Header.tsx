import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

interface Props {
  clicked: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  line-height: ${({ theme }) => theme.headerHeight};
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.solidBackground};
  color: ${({ theme }) => theme.fontColor};
  z-index: 5;

  svg {
    float: left;
    margin: 1rem;
    cursor: pointer;

    @media (min-width: 500px) {
      display: none;
    }
  }
  p {
    margin: 0;
  }
`;

const Header: FunctionComponent<Props> = ({ clicked }) => {
  return (
    <StyledHeader>
      <FiMenu onClick={clicked} />
      <p>HEADER</p>
    </StyledHeader>
  );
};

export default Header;
