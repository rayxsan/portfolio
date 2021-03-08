import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";
import * as svg from "../../../shared/AppIcons";
import Backdrop from "../../../Components/UI/Backdrop/Backdrop";
import * as path from "../../../shared/Paths";

interface Props {
  show: boolean;
  clicked: (
    event: React.MouseEvent<SVGElement | HTMLDivElement, MouseEvent>
  ) => void;
}

const Sidebar: FunctionComponent<Props> = ({ show, clicked }) => {
  const [openComponents, setOpenComponents] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [openPages, setOpenPages] = useState(false);

  return (
    <>
      <Backdrop show={show} clicked={clicked} />
      <StyledSidebar show={show}>
        <p>
          Portfolio
          {show ? (
            <svg.BiArrowFromLeft onClick={clicked} title="Expand" />
          ) : (
            <svg.BiArrowFromRight onClick={clicked} title="Collapse" />
          )}
        </p>

        <NavLink to={"/"} exact>
          <p className="sidebarHome">
            {!show ? "Dashboard" : <svg.BiHome title="Dashboard" />}
          </p>
        </NavLink>

        <nav>
          <p>Elements</p>
          <div onClick={() => setOpenComponents(!openComponents)}>
            <p>
              {" "}
              <svg.CgComponents />
              Components
            </p>
            {!show ? (
              openComponents ? (
                <svg.BiChevronUp />
              ) : (
                <svg.BiChevronDown />
              )
            ) : (
              <svg.CgComponents title="Components" />
            )}
          </div>
          {openComponents && (
            <ul>
              <NavLink to={path.buttonPath}>
                {!show ? "Button" : <svg.GiPlayButton title="Button" />}
              </NavLink>
              <NavLink to={path.cardPath}>
                {!show ? "Card" : <svg.BsCardImage title="Card" />}
              </NavLink>
              <NavLink to={path.checkboxPath}>
                {!show ? "Checkbox" : <svg.FaCheckSquare title="Checkbox" />}
              </NavLink>
              <NavLink to={path.dropdownPath}>
                {!show ? (
                  "Dropdown"
                ) : (
                  <svg.FaRegCaretSquareDown title="Dropdown" />
                )}
              </NavLink>
              <NavLink to={path.formPath}>
                {!show ? "Form" : <svg.FaWpforms title="Form" />}
              </NavLink>
              <NavLink to={path.menuPath}>
                {!show ? "Menu" : <svg.CgMenu title="Menu" />}
              </NavLink>
              <NavLink to={path.progressPath}>
                {!show ? "Progress" : <svg.FiPercent title="Progress" />}
              </NavLink>
              <NavLink to={path.radioPath}>
                {!show ? "Radio" : <svg.MdRadioButtonChecked title="Radio" />}
              </NavLink>
              <NavLink to={path.tablePath}>
                {!show ? "Table" : <svg.BiTable title="Table" />}
              </NavLink>
            </ul>
          )}
          <NavLink to={path.chartPath}>
            {!show ? (
              <p>
                <svg.FiPieChart />
                Chart
              </p>
            ) : (
              <svg.FiPieChart title="Chart" />
            )}
          </NavLink>
        </nav>
        <nav>
          <p>Pages</p>
          <div onClick={() => setOpenAuth(!openAuth)}>
            <p>
              <svg.FiUsers />
              Auth
            </p>
            {!show ? (
              openAuth ? (
                <svg.BiChevronUp />
              ) : (
                <svg.BiChevronDown />
              )
            ) : (
              <svg.FiUsers title="Auth" />
            )}
          </div>
          {openAuth && (
            <ul>
              <NavLink to={path.signinPath}>
                {!show ? "Sign in" : <svg.FiUserCheck title="Sign in" />}
              </NavLink>
              <NavLink to={path.signupPath}>
                {!show ? "Sign up" : <svg.FiUserPlus title="Sign up" />}
              </NavLink>
              <NavLink to={path.passwordResetPath}>
                {!show ? (
                  "Reset Password"
                ) : (
                  <svg.RiRotateLockFill title="Reset Password" />
                )}
              </NavLink>
              <NavLink to={path.privatePagePath}>
                {!show ? "Private Page" : <svg.FiLock title="Private Page" />}
              </NavLink>
              {/* <NavLink to={path.notFoundPath}>
                {!show ? "404 Page" : <svg.BiErrorAlt title="404 Page" />}
              </NavLink> */}
            </ul>
          )}

          <div onClick={() => setOpenPages(!openPages)}>
            <p>
              <svg.FaPager />
              Pages
            </p>
            {!show ? (
              openPages ? (
                <svg.BiChevronUp />
              ) : (
                <svg.BiChevronDown />
              )
            ) : (
              <svg.FaPager title="Pages" />
            )}
          </div>
          {openPages && (
            <ul>
              <NavLink to={path.profilePath}>
                {!show ? "Profile" : <svg.CgProfile title="Profile" />}
              </NavLink>
              <NavLink to={path.settingsPath}>
                {!show ? "Settings" : <svg.FiSettings title="Settings" />}
              </NavLink>
            </ul>
          )}
        </nav>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
