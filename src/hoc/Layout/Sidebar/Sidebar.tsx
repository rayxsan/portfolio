import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { BiArrowFromRight } from "react-icons/bi";
import Backdrop from "../../../Components/UI/Backdrop/Backdrop";
import * as path from "../../../shared/Routes";

interface Props {
  show: boolean;
  clicked: (
    event: React.MouseEvent<SVGElement | HTMLDivElement, MouseEvent>
  ) => void;
}

const Sidebar: FunctionComponent<Props> = ({ show, clicked }) => {
  const [openComponents, setOpenComponents] = useState(false);

  return (
    <>
      <Backdrop show={show} clicked={clicked} />
      <StyledSidebar show={show}>
        <BiArrowFromRight onClick={clicked} />
        <nav>
          <NavLink to={"/"} exact>
            Home
          </NavLink>
        </nav>
        <nav>
          <div onClick={() => setOpenComponents(!openComponents)}>
            <p>Components</p>
          </div>
          {openComponents ? (
            <ul>
              <NavLink to={path.buttonPath}>Button</NavLink>
              <NavLink to={path.cardPath}>Card</NavLink>
              <NavLink to={path.checkboxPath}>Checkbox</NavLink>
              <NavLink to={path.dropdownPath}>Dropdown</NavLink>
              <NavLink to={path.formPath}>Form</NavLink>
              <NavLink to={path.menuPath}>Menu</NavLink>
              <NavLink to={path.progressPath}>Progress</NavLink>
              <NavLink to={path.radioPath}>Radio</NavLink>
              <NavLink to={path.tablePath}>Table</NavLink>
            </ul>
          ) : null}
        </nav>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
