import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";

interface Props {
  show: boolean;
  style?: React.CSSProperties;
}

const Sidebar: FunctionComponent<Props> = props => {
  const [open, setOpen] = useState(false);

  return (
    <StyledSidebar show={props.show}>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        {/* TODO maybe reuse checkbox or another UI component */}
        <div onClick={() => setOpen(!open)}>Components</div>
        {open ? (
          <ul>
            <NavLink to={"/components/buttons"}>Buttons</NavLink>
            <NavLink to={"/components/checkbox"}>Checkboxes</NavLink>
            <NavLink to={"/components/progress"}>Progress</NavLink>
            <NavLink to={"/components/radio"}>Radio</NavLink>
          </ul>
        ) : null}
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
