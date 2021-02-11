import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { BiArrowFromRight, BiChevronDown, BiChevronUp } from "react-icons/bi";
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
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <>
      <Backdrop show={show} clicked={clicked} />
      <StyledSidebar show={show}>
        <p>
          Portfolio
          <BiArrowFromRight onClick={clicked} />
        </p>

        <NavLink to={"/"} exact>
          <p className="sidebarHome"> Home</p>
        </NavLink>

        <nav>
          <p>Elements</p>
          <div onClick={() => setOpenComponents(!openComponents)}>
            <p>
              Components
              {openComponents ? <BiChevronUp /> : <BiChevronDown />}
            </p>
          </div>
          {openComponents && (
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
          )}
        </nav>

        <nav>
          <p>Pages</p>
          <div onClick={() => setOpenAuth(!openAuth)}>
            <p>
              Auth
              {openAuth ? <BiChevronUp /> : <BiChevronDown />}
            </p>
          </div>
          {openAuth && (
            <ul>
              <NavLink to={path.notFoundPath}>Sign in</NavLink>
              <NavLink to={path.notFoundPath}>Sign up</NavLink>
              <NavLink to={path.notFoundPath}>404 Page</NavLink>
            </ul>
          )}
        </nav>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
