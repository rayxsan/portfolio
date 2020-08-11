import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import Checkbox from "../../../Components/Checkbox/Checkbox";

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
        <Checkbox toggle checked={props.show} />
        <ul>
          Components
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/components/buttons"}>Buttons</NavLink>
          <NavLink to={"/components/checkbox"}>Checkboxes</NavLink>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
