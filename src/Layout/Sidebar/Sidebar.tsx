import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";

interface Props {
  show: boolean;
  //closed: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <StyledSidebar
      style={{ transform: props.show ? "translateX(0)" : "translateX(-100%)" }}
    >
      <nav>
        Components
        <ul>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/buttons"}>Buttons</NavLink>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
