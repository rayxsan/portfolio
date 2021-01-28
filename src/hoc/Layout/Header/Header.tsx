import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Menu from "../../../Components/Menu/Menu";

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
  box-shadow: 0 2px 2px -2px #ccc;

  svg {
    float: left;
    margin: 1rem;
    cursor: pointer;

    @media (min-width: 500px) {
      display: none;
    }
  }

  li {
    bottom: 0.5rem;
  }

  div {
    float: right;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
  }
`;

const Header: FunctionComponent<Props> = ({ clicked }) => {
  return (
    <StyledHeader>
      <FiMenu onClick={clicked} />
      <div>
        <Menu
          header="Profile"
          type="simple"
          items={["Home", "Settings", "Logout"]}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
