import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";

interface Props {
  show: boolean;
  style?: React.CSSProperties;
}

const Sidebar: FunctionComponent<Props> = (props) => {
  return (
    <StyledSidebar show={props.show}>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <ul>
          <div>Components</div>
          <NavLink to={"/components/buttons"}>Buttons</NavLink>
          <NavLink to={"/components/checkbox"}>Checkboxes</NavLink>
          <NavLink to={"/components/progress"}>Progress</NavLink>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
