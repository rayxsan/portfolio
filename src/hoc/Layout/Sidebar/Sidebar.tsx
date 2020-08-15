import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";

interface Props {
  show: boolean;
  style?: React.CSSProperties;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  const toggle = {
    transform: props.show ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <StyledSidebar style={toggle}>
      <nav>
        <ul>
          Components
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/components/buttons"}>Buttons</NavLink>
          <NavLink to={"/components/checkbox"}>Checkboxes</NavLink>
          <NavLink to={"/components/progress"}>Progress</NavLink>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
