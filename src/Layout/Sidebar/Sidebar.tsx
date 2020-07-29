import React, { FunctionComponent } from "react";
import styled from "styled-components";

import * as theme from "../../shared/Theme";

const StyledSidebar = styled.div`
  height: 100vh;
  width: 200px;
  background-color: ${theme.BACKGROUND_COLOR};
  color: ${theme.COLOR_PRIMARY};
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  z-index: 5;
  left: -100%;
  animation: slide-open 0.8s forwards;

  @keyframes slide-open {
    100% {
      left: 0;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul>
        <li>Component1</li>
        <li>Component2</li>
        <li>Component3</li>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
