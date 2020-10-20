import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { BiArrowFromRight } from "react-icons/bi";
import { CgComponents } from "react-icons/cg";

interface Props {
  show: boolean;
  style?: React.CSSProperties;
  clicked: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const Sidebar: FunctionComponent<Props> = ({ show, style, clicked }) => {
  const [openComponents, setOpenComponents] = useState(false);

  return (
    <StyledSidebar show={!show}>
      <BiArrowFromRight onClick={clicked} />
      <nav>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
      <nav>
        <NavLink to={"/components/buttons"}>
          <CgComponents />
        </NavLink>
        <div onClick={() => setOpenComponents(!openComponents)}>
          <p>Components</p>
        </div>
        {openComponents ? (
          <ul>
            <NavLink to={"/components/buttons"}>Buttons</NavLink>
            <NavLink to={"/components/card"}>Cards</NavLink>
            <NavLink to={"/components/checkbox"}>Checkboxes</NavLink>
            <NavLink to={"/components/dropdown"}>Dropdown</NavLink>
            <NavLink to={"/components/form"}>Form</NavLink>
            <NavLink to={"/components/menu"}>Menu</NavLink>
            <NavLink to={"/components/progress"}>Progress</NavLink>
            <NavLink to={"/components/radio"}>Radio</NavLink>
          </ul>
        ) : null}
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
