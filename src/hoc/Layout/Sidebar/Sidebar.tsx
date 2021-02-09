import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import { BiArrowFromRight } from "react-icons/bi";
import Backdrop from "../../../Components/UI/Backdrop/Backdrop";

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
              <NavLink to={"/components/button"}>Button</NavLink>
              <NavLink to={"/components/card"}>Card</NavLink>
              <NavLink to={"/components/checkbox"}>Checkbox</NavLink>
              <NavLink to={"/components/dropdown"}>Dropdown</NavLink>
              <NavLink to={"/components/form"}>Form</NavLink>
              <NavLink to={"/components/menu"}>Menu</NavLink>
              <NavLink to={"/components/progress"}>Progress</NavLink>
              <NavLink to={"/components/radio"}>Radio</NavLink>
              <NavLink to={"/components/table"}>Table</NavLink>
            </ul>
          ) : null}
        </nav>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
