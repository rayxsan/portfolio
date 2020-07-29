import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  background-color: blue;
`;

const Sidebar = (props: any) => {
  return (
    <StyledNav>
      <nav>Nav Items</nav>
    </StyledNav>
  );
};

export default Sidebar;
