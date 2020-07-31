import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  z-index: 5;
  left: -100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 500px) {
    display: none;
  }
`;

interface Props {
  // open: boolean;
  // show: boolean;
  closed: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <StyledSidebar clicked={props.closed}>
      <ul>
        <li>Component1</li>
        <li>Component2</li>
        <li>Component3</li>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
